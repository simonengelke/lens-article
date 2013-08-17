"use strict";

var _ = require('underscore');
var util = require('substance-util');
var html = util.html;
var CitationView = require('../citation_view');


// Lens.ArticleCitation.View
// ==========================================================================

var ArticleCitationView = function(node) {
  CitationView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass('article-citation');
};

ArticleCitationView.Prototype = function() {

  this.render = function() {
    CitationView.prototype.render.call(this);

    // Add additional stuff here
    this.$('.content').html('SOME MORE CONTENT');

    // Add label to block formula
    // --------

    // this.$el.append($('<div class="label">').html(this.node.label));

    return this;
  }
};

ArticleCitationView.Prototype.prototype = CitationView.prototype;
ArticleCitationView.prototype = new ArticleCitationView.Prototype();

module.exports = ArticleCitationView;
