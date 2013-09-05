"use strict";

var CompositeView = require("../composite/composite_view");
// var List = require("substance-document").List;
var $$ = require ("substance-application").$$;

// Substance.Figure.View
// ==========================================================================

var FigureView = function(node, viewFactory) {
  console.log('constructed figure viewhhehe');
  CompositeView.call(this, node, viewFactory);
};

FigureView.Prototype = function() {

  // Rendering
  // =============================
  //

  this.render = function() {

    console.log('XXXXXXXX ====== rendering figure view');
    this.el.innerHTML = "";

    // var ltype = (this.node.ordered) ? "OL" : "UL";
    // this.content = document.createElement("DIV");
    // this.content.classList.add("content");

    this.content = $$('div.content', {text: "FIGURE COMES HEEERE"});

    // var i;
    // dispose existing children views if called multiple times
    // for (i = 0; i < this.childrenViews.length; i++) {
    //   this.childrenViews[i].dispose();
    // }

    // create children views
    // var children = this.node.getNodes();
    // for (i = 0; i < children.length; i++) {
    //   var child = this.node.document.get(children[i]);
    //   var childView = this.viewFactory.createView(child);

    //   var listEl;
    //   if (child instanceof List) {
    //     listEl = childView.render().el;
    //   } else {
    //     listEl = document.createElement("LI");
    //     listEl.appendChild(childView.render().el);
    //   }
    //   this.content.appendChild(listEl);
    //   this.childrenViews.push(childView);
    // }

    this.el.appendChild(this.content);
    return this;
  };

  this.onNodeUpdate = function(op) {
    if (op.path[0] === this.node.id && op.path[1] === "items") {
      this.render();
    }
  };
};

FigureView.Prototype.prototype = CompositeView.prototype;
FigureView.prototype = new FigureView.Prototype();

module.exports = FigureView;
