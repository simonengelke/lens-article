"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Substance.Paragraph.View
// ==========================================================================

var TableView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node table");
};

TableView.Prototype = function() {

  this.render = function() {
    NodeView.prototype.render.call(this);

    this.content.appendChild($$('.not-yet-implement', {text: "This node type has not yet been implemented. "}))

    return this;
  }
};

TableView.Prototype.prototype = NodeView.prototype;
TableView.prototype = new TableView.Prototype();

module.exports = TableView;
