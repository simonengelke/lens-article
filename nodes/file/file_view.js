"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node/node_view");
var $$ = require("substance-application").$$;

// Lens.Supplement.View
// ==========================================================================

var FileView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node file");
};

FileView.Prototype = function() {

  // Render it
  // --------
  //
  // .content
  //   .caption
  //   .doi
  //   .file.file-1

  this.render = function() {
    var node = this.node;
    NodeView.prototype.render.call(this);

    // var caption = $$('.caption', {text: node.caption.content});
    // this.content.appendChild(caption);

    var file = this.node;

    var f = [];
    if(file.url) f.push($$('a', {href: file.url, text: file.name}));
    if(file.description) f.push($$('div.description', {text: file.description}));
    if(file.doi) f.push($$('div.doi', { children: [ $$('b', {text: "DOI: " }), $$('a', {href: file.doi, target: "_new", text: file.doi}) ]}));

    this.content.appendChild($$('.file', {children: f}));

    return this;
  }
};

FileView.Prototype.prototype = NodeView.prototype;
FileView.prototype = new FileView.Prototype();
FileView.prototype.constructor = FileView;

module.exports = FileView;
