var _ = require('underscore');
var Node = require('substance-document').Node;

// Lens.Box
// -----------------
//

var Box = function(node, doc) {
  Node.call(this, node, doc);
};


// Type definition
// -----------------
//

Box.type = {
  "id": "box",
  "parent": "content",
  "properties": {
    "source_id": "string",
    "label": "string", // full author name
    "children": ["array", "paragraph"]
  }
};

// This is used for the auto-generated docs
// -----------------
//

Box.description = {
  "name": "Box",
  "remarks": [
    "A box type.",
  ],
  "properties": {
    "label": "string",
    "children": "0..n Paragraph nodes",
  }
};


// Example Box
// -----------------
//

Box.example = {
  "id": "box_1",
  "type": "box",
  "name": "Box 1",
  "children": ["paragraph_1", "paragraph_2"]
};

Box.Prototype = function() {

};

Box.Prototype.prototype = Node.prototype;
Box.prototype = new Box.Prototype();
Box.prototype.constructor = Box;


// Generate getters
// --------

var getters = {};

var getters = {
  header: {
    get: function() {
      return this.properties.label;
    }
  }
};

_.each(Box.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});


Object.defineProperties(Box.prototype, getters);

module.exports = Box;
