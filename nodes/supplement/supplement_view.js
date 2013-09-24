"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var CompositeView = require("../composite").View;
var $$ = require("substance-application").$$;

// Lens.Supplement.View
// ==========================================================================

var SupplementView = function(node, viewFactory) {
  CompositeView.call(this, node, viewFactory);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node supplement");
};

SupplementView.Prototype = function() {

  // Render it
  // --------

  this.render = function() {
    var node = this.node;

    this.content = $$('div.content');

    var caption = node.getCaption();
    if (caption) {
      var captionView = this.viewFactory.createView(caption);
      var captionEl = captionView.render().el;
      this.content.appendChild(captionEl);
      this.childrenViews.push(captionView);
    }

    var file = $$('div.file', {
      children: [
        $$('a', {href: node.url, html: '<i class="icon-download-alt"/> Download' })
      ]
    });

    this.content.appendChild(file);
    this.el.appendChild(this.content);

    return this;
  }
};

SupplementView.Prototype.prototype = CompositeView.prototype;
SupplementView.prototype = new SupplementView.Prototype();
SupplementView.prototype.constructor = SupplementView;

module.exports = SupplementView;
