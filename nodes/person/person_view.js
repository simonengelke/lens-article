"use strict";

var _ = require("underscore");
var util = require("substance-util");
var html = util.html;
var NodeView = require("../node").View;
var $$ = require("substance-application").$$;

// Lens.Person.View
// ==========================================================================

var PersonView = function(node) {
  NodeView.call(this, node);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node person");
};

PersonView.Prototype = function() {

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

    this.content.innerHTML ='PERSON_NODE_NOT_YET_IMPLEMENTED';;

    return this;
  }
};

PersonView.Prototype.prototype = NodeView.prototype;
PersonView.prototype = new PersonView.Prototype();

module.exports = PersonView;
