"use strict";

var Text = require("../text");

var Paragraph = function(node, document) {
  Text.call(this, node, document);
};

Paragraph.type = {
  "id": "paragraph",
  "parent": "content",
  "properties": {
    "content": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Paragraph.description = {
  "name": "Paragraph",
  "description": "A paragraph of text.",
  "remarks": [
    "A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.",
    "A paragraph consists of one or more sentences.",
    "Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."
  ],
  "properties": {
    "content": "Content",
  }
};


// Example Paragraph
// -----------------
//

Paragraph.example = {   
  "type": "paragraph",
  "id": "paragraph_1",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};


Paragraph.Prototype = function() {
  
};

Paragraph.Prototype.prototype = Text.prototype;
Paragraph.prototype = new Paragraph.Prototype();
Paragraph.prototype.constructor = Paragraph;

module.exports = Paragraph;
