"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Lens.Supplement.View
// ==========================================================================

var SupplementView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node Supplement");
};

SupplementView.Prototype = function() {

  // Render it
  // --------
  // 
  // .content
  //   video
  //     source
  //   .title
  //   .caption
  //   .doi

  this.render = function() {
    NodeView.prototype.render.call(this);

    this.content.innerHTML = 'SUPPLEMENT_NODE_NOT_YET_IMPLEMENTED';

    return this;
  }
};

SupplementView.Prototype.prototype = NodeView.prototype;
SupplementView.prototype = new SupplementView.Prototype();

module.exports = SupplementView;
