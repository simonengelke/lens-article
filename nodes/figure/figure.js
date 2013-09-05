"use strict";

var Document = require("substance-document");

var Figure = function(node, document) {
  Document.Composite.call(this, node, document);
};


Figure.type = {
  "parent": "content",
  "properties": {
    "label": "string",
    "image": "image",
    "large_image": "image", // optional
    "caption": "caption"
  }
};

// This is used for the auto-generated docs
// -----------------
//

Figure.description = {
  "name": "Figure",
  "remarks": [
    "A figure is a figure is figure.",
  ],

  "properties": {
  }
};

// Example File
// -----------------
//

Figure.example = {
  "no_example": "yet"
};

Figure.Prototype = function() {

  this.insertOperation = function(startChar, text) {
    return null;
  };

  this.deleteOperation = function(startChar, endChar) {
    return null;
  };

  this.hasCaption = function() {
    return (!!this.properties.caption);
  };


  this.getLength = function() {
    return this.properties.items.length;
  };

  this.getNodes = function() {
    console.log('GETTING NOOODES');
    return [this.properties.caption];
    // return _.clone(this.items);
  };

  this.getItems = function() {
    return _.map(this.properties.items, function(id) {
      return this.document.get(id);
    }, this);
  };

  // this.getNodes = function() {
  //   var nodes = [];
  //   if (this.properties.image) nodes.push(this.properties.image);
  //   if (this.properties.large_image) nodes.push(this.properties.large_image);

  //   if (this.properties.caption) {
  //     nodes.push(this.properties.caption);
  //     console.log('YAY', this.properties.caption);
  //   }
  //   return nodes;
  // };

  this.getImage = function() {
    if (this.properties.image) return this.document.get(this.properties.image);
  };

  this.getCaption = function() {
    if (this.properties.caption) return this.document.get(this.properties.caption);
  };
};

Figure.Prototype.prototype = Document.Composite.prototype;
Figure.prototype = new Figure.Prototype();
Figure.prototype.constructor = Figure;

Document.Node.defineProperties(Figure.prototype, ["label", "image", "large_image", "caption"]);

module.exports = Figure;
