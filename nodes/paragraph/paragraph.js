"use strict";

var Text = require("../text");

var Paragraph = function(node) {
  Text.call(this, node);
};

Paragraph.type = {
  "parent": "content",
  "properties": {
    "content": "string"
  }
}

// Defines available focus modes
// --------

Paragraph.focusModes = {
  "figure": {
    "icon": "icon-camera"
  },
  "citation": {
    "icon": "icon-link"
  }
};


Paragraph.Prototype = function() {
  
};

Paragraph.Prototype.prototype = Text.prototype;
Paragraph.prototype = new Paragraph.Prototype();
Paragraph.prototype.constructor = Paragraph;

module.exports = Paragraph;