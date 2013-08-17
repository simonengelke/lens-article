"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;
var NodeView = require('../node').View;


var CitationRenderer = function(citationView) {

};


// Substance.Paragraph.View
// ==========================================================================

var CitationView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('content-node citation');
};

CitationView.Prototype = function() {

  this.render = function() {
    
    // Render the formula
    // --------

    // if (this.node.format === "mathml") {
    //   var $block = $('<mml:math xmlns="http://www.w3.org/1998/Math/MathML" display="block">');
    //   $block.html(this.node.data);
    //   this.$el.append($block);
    // } else if (this.node.format === "image") {
    //   this.$el.append('<img src="'+node.url+'"/>');
    // }

    this.$el.html('I AM A CITATION');

    // Add label to block formula
    // --------

    // this.$el.append($('<div class="label">').html(this.node.label));

    return this;
  }
};

CitationView.Prototype.prototype = NodeView.prototype;
CitationView.prototype = new CitationView.Prototype();

module.exports = CitationView;
