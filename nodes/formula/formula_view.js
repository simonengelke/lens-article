"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;

var NodeView = require('../node').View;

// Substance.Paragraph.View
// ==========================================================================

var FormulaView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('content-node formula');
};

    // <!-- Lens.Formula -->
    // <script type="text/x-ejs-template" name="node_formula">
    //   <div id="node_<%= _.htmlId(node.id) %>" class="content-node formula">
    //     <% if (!node.content) { %>
    //       <img src="<%= node.url %>"/>
    //     <% } else { %>
    //       <mml:math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    //       <%= node.content %>
    //       </mml:math>
    //     <% } %>

    //     <div class="label"><%= node.label %></div>
    //     <div class="focus anchor" title="Highlight element then share the link from the address bar.">
    //       <i class="icon-bookmark"></i>
    //       <div class="stripe"></div>
    //     </div>
    //   </div>
    // </script>

FormulaView.Prototype = function() {

  this.render = function() {
    
    // Render the formula
    // --------

    if (this.node.format === "mathml") {
      var $block = $('<mml:math xmlns="http://www.w3.org/1998/Math/MathML" display="block">');
      $block.html(this.node.data);
      this.$el.append($block);
    } else if (this.node.format === "image") {
      this.$el.append('<img src="'+node.url+'"/>');
    }

    // Add label to block formula
    // --------

    this.$el.append($('<div class="label">').html(this.node.label));

    // Add controls
    // --------
    // 
    // This should be done on NodeView

    // <div class="focus anchor" title="Highlight element then share the link from the address bar.">
    //   <i class="icon-bookmark"></i>
    //   <div class="stripe"></div>
    // </div>

    return this;
  }
};

FormulaView.Prototype.prototype = NodeView.prototype;
FormulaView.prototype = new FormulaView.Prototype();

module.exports = FormulaView;
