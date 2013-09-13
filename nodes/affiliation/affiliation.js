"use strict";

var Node = require("substance-document").Node;
var _ = require("underscore");

var Affiliation = function(node, doc) {
  Node.call(this, node, doc);
};

Affiliation.type = {
  "id": "affiliation",
  "parent": "content",
  "properties": {
    "source_id": "string",
    "city": "string",
    "country": "string",
    "department": "string",
    "institution": "string",
    "label": "string"
  }
};


Affiliation.description = {
  "name": "Affiliation",
  "description": "Person affiliation",
  "remarks": [
    "Name of a institution or organization, such as a university or corporation, that is the affiliation for a contributor such as an author or an editor."
  ],
  "properties": {
    "coming": "soon"
  }
};


Affiliation.example = {
  "id": "affiliation_1",
  "source_id": "aff1",
  "city": "Jena",
  "country": "Germany",
  "department": "Department of Molecular Ecology",
  "institution": "Max Planck Institute for Chemical Ecology",
  "label": "1",
  "type": "affiliation"
};

Affiliation.Prototype = function() {

};

Affiliation.Prototype.prototype = Node.prototype;
Affiliation.prototype = new Affiliation.Prototype();
Affiliation.prototype.constructor = Affiliation;


// Generate getters
// --------

var getters = {};

_.each(Affiliation.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Affiliation.prototype, getters);

module.exports = Affiliation;