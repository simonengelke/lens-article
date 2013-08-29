"use strict";

var Text = require("../text");

var Heading = function(node, document) {
  Text.call(this, node, document);
};

// Type definition
// -----------------
//

Heading.type = {
  "id": "heading",
  "parent": "content",
  "properties": {
    "content": "string",
    "level": "number"
  }
};

// Example Heading
// -----------------
//

Heading.example = {
  "type": "heading",
  "id": "heading_1",
  "content": "Introduction",
  "level": 1
};

// This is used for the auto-generated docs
// -----------------
//


Heading.description = {
  "name": "Heading",
  "remarks": [
    "Denotes a section or sub section in your article."
  ],
  "properties": {
    "content": "Heading content",
    "level": "Heading level. Ranges from 1..4"
  }
};

Heading.Prototype = function() {};

Heading.Prototype.prototype = Text.prototype;
Heading.prototype = new Heading.Prototype();
Heading.prototype.constructor = Heading;

Object.defineProperties(Heading.prototype, {
  level: {
    get: function () {
      return this.properties.level;
    }
  }
});

module.exports = Heading;
