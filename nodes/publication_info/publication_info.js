"use strict";

var Node = require("substance-document").Node;
var _ = require("underscore");

var PublicationInfo = function(node, doc) {
  Node.call(this, node, doc);
};

PublicationInfo.type = {
  "id": "image",
  "parent": "content",
  "properties": {
    "source_id": "string",
  }
};

PublicationInfo.description = {
  "name": "PublicationInfo",
  "description": "PublicationInfo Node",
  "remarks": [
    "Summarizes the article's meta information. Meant to be customized by publishers"
  ],
  "properties": {
    "coming": "soon"
  }
};


PublicationInfo.example = {
  "id": "affiliation_1",
  "source_id": "article_meta",
};

PublicationInfo.Prototype = function() {

};

PublicationInfo.Prototype.prototype = Node.prototype;
PublicationInfo.prototype = new PublicationInfo.Prototype();
PublicationInfo.prototype.constructor = PublicationInfo;


// Generate getters
// --------

var getters = {};

_.each(PublicationInfo.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(PublicationInfo.prototype, getters);

module.exports = PublicationInfo;