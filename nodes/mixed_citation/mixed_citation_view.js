"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node/node_view");
var $$ = require("substance-application").$$;


// var CitationRenderer = function(citationView) {
//   var frag = document.createDocumentFragment();
//   var content = $$('.content');
//   frag.appendChild(content);
//   return frag;
// };


// Substance.Paragraph.View
// ==========================================================================

var MixedCitationView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('content-node mixed-citation');
};

MixedCitationView.Prototype = function() {

  this.render = function() {
    NodeView.prototype.render.call(this);
    // this.el.appendChild(new CitationRenderer(this));
    return this;
  }
};

MixedCitationView.Prototype.prototype = NodeView.prototype;
MixedCitationView.prototype = new MixedCitationView.Prototype();

module.exports = MixedCitationView;
