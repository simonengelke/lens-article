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
  "id": "video",
  "parent": "content",
  "properties": {
    "name": "string",
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
  "id": "Supplement_1",
  "type": "Supplement",
  "name": "John Doe"
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


module.exports = Supplement;
