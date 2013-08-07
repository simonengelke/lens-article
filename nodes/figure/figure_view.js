var _ = require('underscore');
var Node = require('../node');
var util = require("substance-util");
var html = util.html;

// Lens.Figure.View
// -----------------
//
// Manipulation interface shared by all textish types (paragraphs, headings)
// This behavior can overriden by the concrete node types

var FigureView = function(node) {
  Node.View.call(this, node);

  this.$el.addClass('content-node figure resource');
};

FigureView.Prototype = function() {

  // Rendering
  // =============================
  //

  this.render = function() {
    var $header = $('<div class="resource-header">');
    $header.append($('<div class="reference-count">mentioned 10 times</div>'));
    $header.append($('<div class="type figure image"><i class="icon-camera"></i> Image</div>'));
    $header.append($('<div class="name">Figure 1.</div>'));
    
    this.$el.append($header);
    return this;
  };

  this.dispose = function() {
    console.log('disposing paragraph view');
    this.stopListening();
  };
};

FigureView.Prototype.prototype = Node.View.prototype;
FigureView.prototype = new FigureView.Prototype();

module.exports = FigureView;