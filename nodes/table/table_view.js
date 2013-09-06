"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node/node_view");
var $$ = require("substance-application").$$;

// Substance.Paragraph.View
// ==========================================================================

var TableView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node table");
};

TableView.Prototype = function() {

  //   <% if (node.url) { %>
  //     <div class="table-image">
  //       <a href="<%= node.large_url %>" target="_new"><img class="thumbnail" src="<%= node.url %>"/></a>
  //     </div>
  //   <% } %>
  //   <div class="table-wrapper">
  //     <%= node.content %>
  //   </div>
  //   <div class="footers">
  //     <% _.each(node.footers, function(f) { %>
  //       <div class="footer"><b><%= annotate(f, 'label') %></b> <%= annotate(f, 'content') %></div>
  //     <% }); %>
  //   </div>
  //   <div class="title"><%= annotate(node.caption, 'title') %></div>
  //   <div class="descr"><%= annotate(node.caption, 'content') %></div>
  //   <% if (node.doi) { %>
  //     <div class="doi"><b>DOI:</b> <a href="<%= node.doi %>" target="_new"><%= node.doi %></a></div>
  //   <% } %>
  // </div>

  // .content
  //   .table-wrapper
  //     <table>...
  //   .footers
  //   .title
  //   .caption
  //   .doi

  this.render = function() {
    var node = this.node;
    NodeView.prototype.render.call(this);

    // The actual content
    // --------
    //

    var tableWrapper = $$('.table-wrapper', {
      html: node.content // HTML table content
    });

    this.content.appendChild(tableWrapper);

    // Display footers (optional)
    // --------
    //

    var footers = $$('.footers', {
      children: _.map(node.footers, function(footer) {
        return $$('.footer', { html: "<b>"+footer.label+"</b> " + footer.content });
      })
    });

    this.content.appendChild(footers);


    // this.content.appendChild($$('.not-yet-implemented', {text: "This node type has not yet been implemented. "}));
    return this;
  }
};

TableView.Prototype.prototype = NodeView.prototype;
TableView.prototype = new TableView.Prototype();

module.exports = TableView;
