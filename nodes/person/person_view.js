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

  this.render = function() {
    NodeView.prototype.render.call(this);

    // Add Affiliations
    // -------

    this.content.appendChild($$('.affiliations', {
      children: [
        $$('.affiliation', {text: "Affiliation 1"}),
        $$('.affiliation', {text: "Affiliation 2"})
      ]
    }));

    // Contribution
    // -------

    this.content.appendChild($$('.label', {text: 'Contribution'}));
    this.content.appendChild($$('.contribution', {text: 'Conception and design, Analysis and interpretation of data, Drafting or revising the article'}));

    // Funding
    // -------

    this.content.appendChild($$('.label', {text: 'Funding'}));
    this.content.appendChild($$('.fundings', {
      children: [
        $$('.funding', {text: "National Institutes of Health, R01-GM092917"}),
        $$('.funding', {text: "Pew Biomedical Scholar Program"}),
        $$('.funding', {text: "National Institutes of Health Predoctoral Training Grant, GM007759"})
      ]
    }));


    this.content.appendChild($$('.label', {text: 'For correspondence'}));
    this.content.appendChild($$('.label', {children: [
      $$('a', {href: "mailto:x@example.com", text: "x@example.com"})
    ]}));

    return this;
  };

};

PersonView.Prototype.prototype = NodeView.prototype;
PersonView.prototype = new PersonView.Prototype();

module.exports = PersonView;
