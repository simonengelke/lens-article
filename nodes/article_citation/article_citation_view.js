"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;
// var CitationView = require('../citation_view');
var NodeView = require("../node").View;

var $$ = require("substance-application").$$;


var Renderer = function(view) {
    var frag = document.createDocumentFragment(),
        node = view.node;

    // Add Authors
    // -------

    frag.appendChild($$('.authors', {
      html: node.authors.join(', ')
    }));

    // Add Source
    // -------

    frag.appendChild($$('.source', {
      html: [
        [node.source, node.volume].join(', ')+": ",
        [node.fpage, node.lpage].join('-')+", ",
        node.year
      ].join('')
    }));

    // Add DOI (if available)
    // -------

    if (node.doi) {
      frag.appendChild($$('.doi', {
        children: [
          $$('b', {text: "DOI: "}),
          $$('a', {
            href: node.doi,
            target: "_new",
            text: node.doi
          })
        ]
      }));
    }

    // TODO: Add display citations urls
    // -------

    return frag;
};


// Lens.ArticleCitation.View
// ==========================================================================


var ArticleCitationView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('article-citation');
};


ArticleCitationView.Prototype = function() {

  this.render = function() {
    NodeView.prototype.render.call(this);
    this.content.appendChild(new Renderer(this));
    return this;
  };

};

ArticleCitationView.Prototype.prototype = NodeView.prototype;
ArticleCitationView.prototype = new ArticleCitationView.Prototype();
ArticleCitationView.prototype.constructor = ArticleCitationView;

module.exports = ArticleCitationView;
