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
  //
  // .content
  //   .caption

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

    // if (node.url) {
    // }

    var ext = _.last(node.url.split('.'));

    var file = $$('div.file', {
      children: [
        $$('a', {href: node.url, html: '<i class="icon-download-alt"/> Download '+ ext.toUpperCase() })
      ]
    });

    this.content.appendChild(file);

    this.el.appendChild(this.content);

    // Maybe we want to bring back the files array
    //
    // if (node.files) {
    //   var files = $$('.files', {
    //       children: _.map(node.files, function(file) {
    //           var f = [];
    //           if(file.url) {
    //             f.push($$('a.file', {href: file.url, children: [ $$('div', {html: "<i class='icon-download-alt'></i> "+file.name}), $$('div', {text: ""+file.description})] }));
    //           }
    //           if(file.doi) f.push($$('div.doi', { children: [ $$('b', {text: "DOI: " }), $$('a', {href: file.doi, target: "_new", text: file.doi}) ]}));
    //           return $$('div', {children: f});
    //         })
    //     });
    // }
    // this.content.appendChild(files);

    return this;
  }
};

SupplementView.Prototype.prototype = CompositeView.prototype;
SupplementView.prototype = new SupplementView.Prototype();
SupplementView.prototype.constructor = SupplementView;

module.exports = SupplementView;
