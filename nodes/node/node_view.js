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

  // Retrieves the corresponding character position for the given DOM position.
  // --------
  //

  this.getCharPosition = function(el, offset) {
    throw new Error("NodeView.getCharPosition() is abstract.");
  };

  // Retrieves the corresponding DOM position for a given character.
  // --------
  //

  this.getDOMPosition = function(charPos) {
    throw new Error("NodeView.getDOMPosition() is abstract.");
  };

};

NodeView.Prototype.prototype = View.prototype;
NodeView.prototype = new NodeView.Prototype();

module.exports = NodeView;
