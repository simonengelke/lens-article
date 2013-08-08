"use strict";

var Text = require("../text");


var Heading = function(node) {
  Text.call(this, node);
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
  "type": "image",
  "id": "image_fig2",
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

module.exports = Heading;
