"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Lens.Video.View
// ==========================================================================

var VideoView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node table");
};

// <div class="video-wrapper">
//   <video controls="controls" poster="<%= node.poster %>" preload="none" style="background-color:black">
//     <source src="<%= node.url %>" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
//     <% if (node.url_ogv) { %>
//       <source src="<%= node.url_ogv %>" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
//     <% } %>
//     <% if (node.url_webm) { %>
//       <source src="<%= node.url_webm %>" type='video/webm; codecs="vp8, vorbis"'>
//     <% } %>
//     <img src="<%= node.poster %>">Your browser does not appear to support HTML5 video. Please upgrade your browser.
//   </video>
// </div>
// <div class="title"><%= annotate(node.caption, 'title') %></div>
// <div class="descr"><%= annotate(node.caption, 'content') %></div>
// <% if (node.doi) { %>
//   <div class="doi"><b>DOI:</b> <a href="<%= node.doi %>" target="_new"><%= node.doi %></a></div>
// <% } %>

VideoView.Prototype = function() {

  this.render = function() {
    NodeView.prototype.render.call(this);

    this.content.appendChild($$('.not-yet-implemented', {text: "This node type has not yet been implemented. "}))

    return this;
  }
};

VideoView.Prototype.prototype = NodeView.prototype;
VideoView.prototype = new VideoView.Prototype();

module.exports = VideoView;
