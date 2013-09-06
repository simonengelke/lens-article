"use strict";

var CompositeView = require("../composite/composite_view");
var $$ = require ("substance-application").$$;

// Substance.Figure.View
// ==========================================================================

var FigureView = function(node, viewFactory) {
  CompositeView.call(this, node, viewFactory);
};

FigureView.Prototype = function() {

  // Rendering
  // =============================
  //

  this.render = function() {    
    this.el.innerHTML = "";
    this.content = $$('div.content');

    // Add graphic (img element)
    var imgEl = $$('.image-wrapper', {
      children: [ $$("img", {src: this.node.url}) ]
    });

    this.content.appendChild(imgEl);
    var i;

    // dispose existing children views if called multiple times
    for (i = 0; i < this.childrenViews.length; i++) {
      this.childrenViews[i].dispose();
    }

    // Only renders the caption (maybe remove the iterator)
    var children = this.node.getNodes();
    for (i = 0; i < children.length; i++) {
      var child = this.node.document.get(children[i]);
      var childView = this.viewFactory.createView(child);
      var childEl = childView.render().el;

      this.content.appendChild(childEl);
      this.childrenViews.push(childView);
    }

    this.el.appendChild(this.content);
    return this;
  };
};

FigureView.Prototype.prototype = CompositeView.prototype;
FigureView.prototype = new FigureView.Prototype();

module.exports = FigureView;
