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
          return $$('a', {href: bc.url, text: bc.name})
        })
      });
    }
  
    this.content.appendChild(breadcrumbs);
    this.content.appendChild($$('.title', {text: node.title }));

    var authors = $$('.authors', {
      children: _.map(node.getAuthors(), function(authorPara) {
        var paraView = this.viewFactory.createView(authorPara);
        var paraEl = paraView.render().el;
        this.content.appendChild(paraEl);
        return paraEl;
      }, this)
    });

    // var orgLink = $$('a.original', {
    //   href: node.document.get('publication_info').doi,
    //   text: "Classic View"
    // });

    // this.content.appendChild(orgLink);

    this.content.appendChild(authors);

    return this;
  }
};

CoverView.Prototype.prototype = NodeView.prototype;
CoverView.prototype = new CoverView.Prototype();

module.exports = CoverView;
