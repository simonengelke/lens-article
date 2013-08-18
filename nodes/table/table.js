var _ = require('underscore');
var Node = require('../node');

// Lens.Table
// -----------------
//

var Table = function(node) {
  Node.call(this, node);
};

// Type definition
// -----------------
//

Table.type = {
  "id": "table",
  "parent": "content",
  "properties": {
    "title": "string",
    "content": "string",
    "footers": ["array", "string"],
    "doi": "string",
    "caption": "paragraph"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Table.description = {
  "name": "Table",
  "remarks": [
    "A table figure which is expressed in HTML notation"
  ],
  "properties": {
    "title": "Table title",
    "content": "HTML data",
    "footers": "Table footers expressed as an array strings",
    "doi": "DOI URL",
    "caption": "A paragraph id that has the caption"
  }
};


// Example Table
// -----------------
//

Table.example = {
  "id": "table_1",
  "type": "table",
  "title": "Table 1.",
  "content": "<table>...</table>",
  "footers": [],
  "doi": "http://dx.doi.org/10.7554/eLife.00311.003",
  "caption": "paragraph_table_1"
};

Table.Prototype = function() {

};

Table.Prototype.prototype = Node.prototype;
Table.prototype = new Table.Prototype();
Table.prototype.constructor = Table;


// Generate getters
// --------

var getters = {};

_.each(Table.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Table.prototype, getters);

module.exports = Table;