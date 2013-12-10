"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Lens.Cover.View
// ==========================================================================

var CoverView = function(node, viewFactory) {
  NodeView.call(this, node, viewFactory);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node cover");
};


CoverView.Prototype = function() {

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
    var node = this.node;

    if (node.breadcrumbs && node.breadcrumbs.length > 0) {
      var breadcrumbs = $$('.breadcrumbs', {
        children: _.map(node.breadcrumbs, function(bc) {
          var html;
          if (bc.image) {
            html = '<img src="'+bc.image+'" title="'+bc.name+'"/>';
          } else {
            html = bc.name;  
          }
          return $$('a', {href: bc.url, html: html})
        })
      });
      this.content.appendChild(breadcrumbs);
    }

    this.content.appendChild($$('.title', {text: node.title }));

    var authors = $$('.authors', {
      children: _.map(node.getAuthors(), function(authorPara) {
        var paraView = this.viewFactory.createView(authorPara);
        var paraEl = paraView.render().el;
        this.content.appendChild(paraEl);
        return paraEl;
      }, this)
    });

    authors.appendChild($$('.content-node.text.plain', {
      children: [
        $$('.content', {text: this.node.document.on_behalf_of})
      ]
    }));

    this.content.appendChild(authors);

    return this;
  }
};

CoverView.Prototype.prototype = NodeView.prototype;
CoverView.prototype = new CoverView.Prototype();

module.exports = CoverView;
