var _ = require('underscore');
var Node = require('../node');

// Lens.Supplement
// -----------------
//

var Supplement = function(node, doc) {
  Node.call(this, node, doc);
};

// Type definition
// -----------------
//

Supplement.type = {
  "id": "supplement",
  "parent": "content",
  "properties": {
    "label": "string",
    "caption": "paragraph",
    "files": ["array", "file"], // elife doesn't use them yet
    "doi": "string" // optional (used by eLife atm)
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
    "name": "Full name.",
  }
};

// Example Video
// -----------------
//

Supplement.example = {
  "id": "supplement_1",
  "type": "supplement",
  "label": "Supplementary file 1.",
  "files": ["file_1", "file_2"],
  "doi": "http://dx.doi.org/10.7554/eLife.00868.023",
  "caption": "paragraph_caption_supplement_1"
};


Supplement.Prototype = function() {

};

Supplement.Prototype.prototype = Node.prototype;
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

// Get full caption node
// --------

getters["caption"] = {
  get: function() {
    // HACK: this is not yet a real solution
    if (this.properties.caption) {
      return this.document.get(this.properties.caption);
    } else {
      return "";
    }
  }
};

// Get the header for resource header display
// --------

getters["header"] = {
  get: function() {
    return this.properties.label;
  }
};

// Get files nodes
// --------

getters["files"] = {
  get: function() {
    if (this.properties.files) {
      return _.map(this.properties.files, function(fileId) {
          return this.document.get(fileId);
        }, this);
    } else {
      return [];
    }
  }
};   

Object.defineProperties(Supplement.prototype, getters);



module.exports = Supplement;
