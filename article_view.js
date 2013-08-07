"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var Surface = require("substance-surface");
var Outline = require("lens-outline");
var View = require("substance-application").View;


// Lens.Article.View
// ==========================================================================
//
// The Substance Article Editor / Viewer

var ArticleView = function(controller) {
  View.call(this);

  this.$el.addClass('article');
  
  // Controllers
  // --------

  this.controller = controller;
  this.writer = controller.writer;

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

  // Outline
  // --------

  this.outline = new Outline(this.surface);
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
    var that = this;

    this.$el.html(html.tpl('article', this.controller));
    this.$('.document').html(this.surface.render().el);

    _.delay(function() {
      // Render outline that sticks on this.surface
      that.$('.document').append(that.outline.render().el);

      that.outline.setActiveNode('paragraph_5');
    }, 100);

    // Figures
    this.$('.resources').append(this.figures.render().el);

    // Citations
    this.$('.resources').append(this.citations.render().el);

    // Wait a second
    _.delay(function() {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
      // Show doc when typesetting math is done
      // MathJax.Hub.Queue(displayDoc);
    }, 20);


    // TODO: Make this an API and trigger from outside
    // --------

    var lazyOutline = _.debounce(function() {
      // Update width for .document .content-node elements
      that.outline.render(); //renderOutline();
      // that.updateOutline();
      that.updateLayout();
    }, 3);

    $(window).resize(lazyOutline);
    return this;
  };

  // Recompute Layout properties
  // --------
  // 
  // This fixes some issues that can't be dealth with CSS

  this.updateLayout = function() {
    var docWidth = this.$('.document').width();
    this.surface.$('.content-node').css('width', docWidth-15);
  },

  // Free the memories, ahm.. memory.
  // --------
  //

  this.dispose = function() {
    this.surface.dispose();
    this.figures.dispose();
    this.citations.dispose();

    this.stopListening();
  };
};

ArticleView.Prototype.prototype = View.prototype;
ArticleView.prototype = new ArticleView.Prototype();

module.exports = ArticleView;
