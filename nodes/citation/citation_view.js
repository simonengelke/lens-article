"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;


var CitationRenderer = function(citationView) {
  var frag = document.createDocumentFragment();
  var content = $$('.content');
  frag.appendChild(content);
  return frag;
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
    this.el.appendChild(new CitationRenderer(this));
    return this;
  }
};

CitationView.Prototype.prototype = NodeView.prototype;
CitationView.prototype = new CitationView.Prototype();

module.exports = CitationView;
