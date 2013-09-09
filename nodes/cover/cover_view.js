"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node/node_view");
var $$ = require("substance-application").$$;

// Lens.Cover.View
// ==========================================================================

var CoverView = function(node, viewFactory) {
  NodeView.call(this, node, viewFactory);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node cover");
};


CoverView.Prototype = function() {

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
    var node = this.node;

    this.content.appendChild($$('.title', {text: node.title }));

    var authors = $$('.authors', {
      children: _.map(node.authors, function(a) {
        return $$('a.author', {
          // href: "#",
          // id: a.id,
          text: a.name
        });
      })
    });

    this.content.appendChild(authors);
    return this;
  }
};

CoverView.Prototype.prototype = NodeView.prototype;
CoverView.prototype = new CoverView.Prototype();

module.exports = CoverView;
