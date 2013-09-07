var _ = require('underscore');

// var Node = require('substance-document').Node;
var Document = require("substance-document");

// Lens.Supplement
// -----------------
//

var Supplement = function(node, doc) {
  Document.Composite.call(this, node, doc);
};

// Type definition
// -----------------
//

Supplement.type = {
  "id": "supplement",
  "parent": "content",
  "properties": {
    "label": "string",
    "caption": "caption", // contains the doi
  }
};


// This is used for the auto-generated docs
// -----------------
//

Supplement.description = {
  "name": "Supplement",
  "remarks": [
    "A Supplement entity.",
  ],
  "properties": {
    "label": "Supplement label",
  }
};

// Example Supplement
// -----------------
//

Supplement.example = {
  "id": "supplement_1",
  "type": "supplement",
  "label": "Supplementary file 1.",
  // "files": ["file_1", "file_2"],
  // "doi": "http://dx.doi.org/10.7554/eLife.00868.023",
  "caption": "paragraph_caption_supplement_1"
};


Supplement.Prototype = function() {

  this.getNodes = function() {
    var nodes = [];
    if (this.properties.caption) {
      nodes.push(this.properties.caption);
    }
    return nodes;
  };

  this.getCaption = function() {
    if (this.properties.caption) {
      return this.document.get(this.properties.caption);
    } else {
      return null;
    }
  };

};

Supplement.Prototype.prototype = Document.Composite.prototype;
Supplement.prototype = new Supplement.Prototype();
Supplement.prototype.constructor = Supplement;


// Generate getters
// --------

var getters = {};

_.each(Supplement.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});


// Get the header for resource header display
// --------

getters["header"] = {
  get: function() {
    return this.properties.label;
  }
};



Object.defineProperties(Supplement.prototype, getters);

module.exports = Supplement;
