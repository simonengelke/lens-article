var _ = require('underscore');
var Node = require('substance-document').Node;

// Lens.Table
// -----------------
//

var Table = function(node, doc) {
  Node.call(this, node, doc);
};


// Type definition
// -----------------
//

Table.type = {
  "id": "table",
  "parent": "content",
  "properties": {
    "source_id": "string",
    "label": "string",
    "content": "string",
    "footers": ["array", "string"],
    "caption": "caption"
  }
};

Table.config = {
  "zoomable": true
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
    "source_id": "string",
    "label": "Label shown in the resource header.",
    "title": "Full table title",
    "content": "HTML data",
    "footers": "Table footers expressed as an array strings",
    "caption": "References a caption node, that has all the content"
  }
};


// Example Table
// -----------------
//

Table.example = {
  "id": "table_1",
  "type": "table",
  "label": "Table 1.",
  "title": "Lorem ipsum table",
  "content": "<table>...</table>",
  "footers": [],
  "caption": "caption_1"
};

Table.Prototype = function() {
  this.getCaption = function() {
    if (this.properties.caption) return this.document.get(this.properties.caption);
  };
};

Table.Prototype.prototype = Node.prototype;
Table.prototype = new Table.Prototype();
Table.prototype.constructor = Table;


// Generate getters
// --------

var getters = {
  header: {
    get: function() {
      return this.properties.label;
    }
  }
};

_.each(Table.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Table.prototype, getters);

module.exports = Table;
