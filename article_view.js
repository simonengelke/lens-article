"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var Surface = require("substance-surface");
var View = require("substance-application").View;


// Lens.Article.View
// ==========================================================================
//
// The Substance Article Editor / Viewer

var ArticleView = function(controller) {
  View.call(this);

  this.$el.addClass('article');
  
  this.controller = controller;

  // Writer
  // --------

  this.writer = controller.writer;
  
  this.listenTo(this.writer.selection, 'selection:changed', this.toggleAnnotationToggles);

  // Surfaces
  // --------

  // A Substance.Document.Writer instance is provided by the controller
  this.surface = new Surface(this.controller.writer, {
    editable: false
  });

  // A Surface for the figures view
  // Uses the figures writer, provided by the controller
  this.figures = new Surface(this.controller.figures, {
    editable: false
  });

  // A Surface for the figures view
  // Uses the figures writer, provided by the controller
  this.citations = new Surface(this.controller.citations, {
    editable: false
  });

  this.$el.delegate('.image-files', 'change', _.bind(this.handleFileSelect, this));
};

ArticleView.Prototype = function() {


  // Clear selection
  // --------
  //

  this.clear = function() {

  };

  // Annotate current selection
  // --------
  //

  this.annotate = function(type) {
    this.writer.annotate(type);
    return false;
  };

  // Rendering
  // --------
  //

  this.render = function() {
    this.$el.html(html.tpl('article', this.controller));

    this.$('.document').html(this.surface.render().el);

    // Figures
    this.$('.resources').append(this.figures.render().el);
    this.$('.resources').append(this.citations.render().el);

    // Wait a second
    _.delay(function() {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

      // Show doc when typesetting math is done
      // MathJax.Hub.Queue(displayDoc);
    }, 20);

    return this;
  };

  this.dispose = function() {
    this.surface.dispose();
    this.stopListening();
  };
};

ArticleView.Prototype.prototype = View.prototype;
ArticleView.prototype = new ArticleView.Prototype();

module.exports = ArticleView;
