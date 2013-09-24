var _ = require('underscore');
var Node = require('substance-document').Node;

// Lens.Person
// -----------------
//

var Person = function(node, doc) {
  Node.call(this, node, doc);
};


// Type definition
// -----------------
//

Person.type = {
  "id": "person",
  "parent": "content",
  "properties": {
    "source_id": "string",
    "name": "string", // full author name
    "role": "string",
    "affiliations": ["array", "affiliation"],
    "fundings": ["array", "string"],
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
  this.getAffiliations = function() {
    return _.map(this.properties.affiliations, function(affId) {
      return this.document.get(affId);
    }, this);
  }
};

Person.Prototype.prototype = Node.prototype;
Person.prototype = new Person.Prototype();
Person.prototype.constructor = Person;


// Generate getters
// --------

var getters = {};

var getters = {
  header: {
    get: function() {
      return this.properties.name;
    }
  }
};

_.each(Person.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});




Object.defineProperties(Person.prototype, getters);


module.exports = Person;
