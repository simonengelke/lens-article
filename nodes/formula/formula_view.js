"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;

var NodeView = require('../node/node_view');

// Substance.Paragraph.View
// ==========================================================================

var FormulaView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('content-node formula');
};

FormulaView.Prototype = function() {

  this.render = function() {

    // Render the formula
    // --------

    if (this.node.format === "mathml") {
      var $block = $('<mml:math xmlns="http://www.w3.org/1998/Math/MathML" display="block">');
      $block.html(this.node.data);
      this.$el.append($block);
    } else if (this.node.format === "image") {
      this.$el.append('<img src="'+node.url+'"/>');
    }

    // Add label to block formula
    // --------

    this.$el.append($('<div class="label">').html(this.node.label));

    return this;
  }
};

FormulaView.Prototype.prototype = NodeView.prototype;
FormulaView.prototype = new FormulaView.Prototype();

module.exports = FormulaView;
