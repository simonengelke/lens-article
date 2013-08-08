var util = require("substance-util");
var View = require("substance-application").View;
var html = util.html;

// Substance.Node.View
// -----------------

var NodeView = function(node) {
  View.call(this);

  this.node = node;

  this.$el.addClass('content-node');
  this.$el.attr('id', this.node.id);
};

NodeView.Prototype = function() {

  // Rendering
  // --------
  //

  this.render = function() {
    this.renderFocusControls();
    return this;
  };


  // <div class="focus">
  //     <div class="focus-figures" title="Show relevant figures" data-type="figure"><i class="icon-camera"></i>2<div class="arrow"></div></div>  
  //     <div class="focus-publications" title="Show relevant references" data-type="publication"><i class="icon-link"></i>1<div class="arrow"></div></div>
  //   <div class="stripe"></div>
  // </div>

  // Render focus controls
  // --------
  // 
  // .content-node
  //   .focus
  //     .focus-citation
  //     .focus-figure
  //     .stripe



  this.renderFocusControls = function() {
    var modes = this.node.constructor.focusModes;
    if (!modes) return; // Skip focus stuff

    $focus = $('<div class="focus">');

    _.each(modes, function(mode, key) {
      // .content-node.focus
      $('<div>').addClass('focus-mode '+key)
      .attr({
        "data-type": key,
        title: "Show relevant "+key
      })
      // Add icon
      .html('<i class="'+mode.icon+'"></i> 2')
      // Inject
      .appendTo($focus);
    });

    $focus.append('<div class="stripe">');
    this.$el.append($focus);
  };

  this.dispose = function() {
    this.stopListening();
  };
};

NodeView.Prototype.prototype = View.prototype;
NodeView.prototype = new NodeView.Prototype();

module.exports = NodeView;