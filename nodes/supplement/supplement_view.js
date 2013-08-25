"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Lens.Supplement.View
// ==========================================================================

var SupplementView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node Supplement");
};

SupplementView.Prototype = function() {


  
  // <script type="text/x-ejs-template" name="node_supplement">
  //   <div id="node_<%= _.htmlId(node.id) %>" class="content-node resource figure supplement">
  //     <div class="resource-header">
  //       <% var refs = doc.find("reverse_figure_references", node.id) || []; %>
  //       <div class="reference-count">mentioned <%= refs.length > 1 ? refs.length +" times" : "once" %></div>
  //       <div class="type figure supplement"><i class="icon-paper-clip"></i> Supplement</div>
  //       <div class="name"><%= node.label %></div>
  //     </div>
  //     <div class="title"><%= annotate(node.caption, 'title') %></div>
  //     <div class="descr"><%= annotate(node.caption, 'content') %></div>
  //     <% if (node.doi) { %>
  //       <div class="doi"><b>DOI:</b> <a href="<%= node.doi %>" target="_new"><%= node.doi %></a></div>
  //     <% } %>
  //   </div>
  // </script>

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

    this.content.innerHTML = 'SUPPLEMENT_NODE_NOT_YET_IMPLEMENTED';

    return this;
  }
};

SupplementView.Prototype.prototype = NodeView.prototype;
SupplementView.prototype = new SupplementView.Prototype();

module.exports = SupplementView;
