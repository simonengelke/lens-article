"use strict";

var Text = require("../text");

var Heading = function(node, document) {
  Text.call(this, node, document);
};

// Type definition
// -----------------
//

Heading.type = {
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
  "name": "An image figure",
  "remarks": [
    "References an image on the web."
  ],
  "properties": {
    "content": "Formula label (4)",
    "level": "Heading level. Ranges from 1..4"
  }
};

// Available focus modes
// -----------------
//

Heading.focusModes = {
  "node": {
    "icon": "icon-bookmark"
  }
};

Heading.Prototype = function() {

};

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
