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

    this.content = $$('div.content', {text: "FIGURE COMES HEEERE"});

    // create your children here... I will smooth it ...

    this.el.appendChild(this.content);
    return this;
  };

};

FigureView.Prototype.prototype = CompositeView.prototype;
FigureView.prototype = new FigureView.Prototype();

module.exports = FigureView;
