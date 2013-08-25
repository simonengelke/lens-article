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
  this.$el.addClass("content-node supplement");
};

SupplementView.Prototype = function() {

  // Render it
  // --------
  // 
  // .content
  //   .caption
  //   .doi
  //   .files
  //     .file.file-1
  //     .file.file-2

  this.render = function() {
    var node = this.node;
    NodeView.prototype.render.call(this);

    // this.content.appendChild($$(''))
    var caption = $$('.caption', {text: node.caption.content});
    this.content.appendChild(caption);

    if (node.doi) {
      var caption = $$('.doi', {
        children: [
          $$('b', {text: "DOI: " }),
          $$('a', {href: node.doi, target: "_new", text: node.doi})
        ]
      });
      this.content.appendChild(caption);
    }
    return this;
  }
};

SupplementView.Prototype.prototype = NodeView.prototype;
SupplementView.prototype = new SupplementView.Prototype();
SupplementView.prototype.constructor = SupplementView;

module.exports = SupplementView;
