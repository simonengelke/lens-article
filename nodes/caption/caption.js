"use strict";

var Document = require("substance-document");

var Caption = function(node, document) {
  Document.Composite.call(this, node, document);
};

Caption.type = {
  "parent": "content",
  "properties": {
    "title": "string",
    "children": ["array", "paragraph"]
  }
};

// This is used for the auto-generated docs
// -----------------
//

Caption.description = {
  "name": "Caption",
  "remarks": [
    "Container element for the textual description that is associated with a Figure, Table, Video node etc.",
    "This is the title for the figure or the description of the figure that prints or displays with the figure."
  ],
  "properties": {
    "title": "Caption title (optional)",
    "children": "0..n Paragraph nodes",
  }
};

// Example File
// -----------------
//

Caption.example = {
  "no_example": "yet"
};

Caption.Prototype = function() {

  // this.insertOperation = function(startChar, text) {
  //   return null;
  // };

  // this.deleteOperation = function(startChar, endChar) {
  //   return null;
  // };

  this.hasTitle = function() {
    return (!!this.properties.title);
  };

  // The nodes the composite should spit out
  this.getNodes = function() {
    var nodes = [];

    // if (this.properties.title) {
    //   nodes.push(this.properties.title);
    // }

    if (this.properties.children) {
      console.log('adding le children');
      nodes = nodes.concat(this.properties.children);
    }
    return nodes;
  };

  // this.getTitle = function() {
  //   if (this.properties.title) return this.document.get(this.properties.image);
  // };

  // this.getCaption = function() {
  //   if (this.properties.caption) return this.document.get(this.properties.caption);
  // };
};

Caption.Prototype.prototype = Document.Composite.prototype;
Caption.prototype = new Caption.Prototype();
Caption.prototype.constructor = Caption;

Document.Node.defineProperties(Caption.prototype, ["image", "caption"]);

module.exports = Caption;
