var View = require("substance-application").View;

// Substance.Node.View
// -----------------

var NodeView = function(node, viewFactory) {
  View.call(this);

  this.node = node;
  this.viewFactory = viewFactory;

  this.$el.addClass('content-node');
  this.$el.attr('id', this.node.id);
};

NodeView.Prototype = function() {

  // Rendering
  // --------
  //


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

  this.render = function() {
    // this.renderFocusControls();
    this.content = document.createElement("DIV");
    this.content.classList.add("content");
    this.el.appendChild(this.content);
    return this;
  };


  this.dispose = function() {
    this.stopListening();
  };

  // Retrieves the corresponding character position for the given DOM position.
  // --------
  //

  this.getCharPosition = function(/*el, offset*/) {
    throw new Error("NodeView.getCharPosition() is abstract.");
  };

  // Retrieves the corresponding DOM position for a given character.
  // --------
  //

  this.getDOMPosition = function(/*charPos*/) {
    throw new Error("NodeView.getDOMPosition() is abstract.");
  };

  // A general graph update listener that dispatches
  // to `this.onNodeUpdate(op)`
  // --------
  //

  this.onGraphUpdate = function(op) {
    if(op.path[0] === this.node.id && (op.type === "update" || op.type === "set") ) {
      this.onNodeUpdate(op);
    }
  };

  // Callback to get noticed about updates applied to the underlying node.
  // --------
  //

  this.onNodeUpdate = function(/*op*/) {
    // do nothing by default
  };
};

NodeView.Prototype.prototype = View.prototype;
NodeView.prototype = new NodeView.Prototype();

module.exports = NodeView;
