var _ = require('underscore');
var Node = require('../node');

// Lens.Video
// -----------------
//

var Person = function(node, doc) {
  Node.call(this, node, doc);
};


// Type definition
// -----------------
//

Person.type = {
  "id": "video",
  "parent": "content",
  "properties": {
    "name": "string", // full author name
    "affiliations": ["array", "institution"],
    "image": "string", // optional
    "emails": ["array", "string"],
    "contribution": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Person.description = {
  "name": "Person",
  "remarks": [
    "A person entity.",
  ],
  "properties": {
    "name": "Full name.",
  }
};

// Example Video
// -----------------
//

Person.example = {
  "id": "person_1",
  "type": "person",
  "name": "John Doe"
};


Person.Prototype = function() {

};

Person.Prototype.prototype = Node.prototype;
Person.prototype = new Person.Prototype();
Person.prototype.constructor = Person;


// Generate getters
// --------

var getters = {};

_.each(Person.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Person.prototype, getters);


module.exports = Person;
