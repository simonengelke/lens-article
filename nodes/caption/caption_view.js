"use strict";

var CompositeView = require("../composite").View;
var List = require("substance-document").List;
var $$ = require("substance-application").$$;

// Lens.Caption.View
// ==========================================================================

var CaptionView = function(node, viewFactory) {
  CompositeView.call(this, node, viewFactory);
};


CaptionView.Prototype = function() {

  // Rendering
  // =============================
  //

  this.render = function() {
    this.content = $$('div.content');

    var i;

    // dispose existing children views if called multiple times
    for (i = 0; i < this.childrenViews.length; i++) {
      this.childrenViews[i].dispose();
    }

    // Add title paragraph
    var titleNode = this.node.getTitle();
    if (titleNode) {
      var titleView = this.viewFactory.createView(titleNode);
      var titleEl = titleView.render().el;
      titleEl.classList.add('caption-title');
      this.content.appendChild(titleEl);
    }

    // create children views
    var children = this.node.getNodes();
    for (i = 0; i < children.length; i++) {
      var child = this.node.document.get(children[i]);
      var childView = this.viewFactory.createView(child);
      var childViewEl = childView.render().el;
      this.content.appendChild(childViewEl);
      this.childrenViews.push(childView);
    }

    this.el.appendChild(this.content);
    return this;
  };

  this.onNodeUpdate = function(op) {
    if (op.path[0] === this.node.id && op.path[1] === "items") {
      this.render();
    }
  };

};

CaptionView.Prototype.prototype = CompositeView.prototype;
CaptionView.prototype = new CaptionView.Prototype();

module.exports = CaptionView;
