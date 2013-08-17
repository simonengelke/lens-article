"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;
var CitationView = require('../citation_view');


// var CitationRenderer = function(citationView) {
  
// };


// Substance.Paragraph.View
// ==========================================================================

var ArticleCitationView = function(node) {
  CitationView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('article-citation');
};

ArticleCitationView.Prototype = function() {

  this.render = function() {

    // if (this.node.format === "mathml") {
    //   var $block = $('<mml:math xmlns="http://www.w3.org/1998/Math/MathML" display="block">');
    //   $block.html(this.node.data);
    //   this.$el.append($block);
    // } else if (this.node.format === "image") {
    //   this.$el.append('<img src="'+node.url+'"/>');
    // }

    this.$el.html('I AM AN ARTICLE CITATION');

    // Add label to block formula
    // --------

    // this.$el.append($('<div class="label">').html(this.node.label));

    return this;
  }
};

ArticleCitationView.Prototype.prototype = CitationView.prototype;
ArticleCitationView.prototype = new ArticleCitationView.Prototype();

module.exports = ArticleCitationView;
