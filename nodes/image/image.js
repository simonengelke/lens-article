"use strict";

var Node = require("substance-document").Node;

var Image = function(node, doc) {
  Node.call(this, node, doc);
};

Image.type = {
  "id": "image",
  "parent": "content",
  "properties": {
    "source_id": "string",
    "data": "string",
    "url": "string"
  }
};

Image.config = {
  "zoomable": true
};

Image.description = {
  "name": "Image",
  "description": "An image",
  "remarks": [
    "This element can be used to describe images in your document."
  ],
  "properties": {
    "data": "Base64 encoded string of medium sized image version",
    "url": "URL to image resource",
  }
};


Image.example = {
  "type": "image",
  "id": "image_fig3",
  "url": "http://elife.elifesciences.org/content/elife/1/e00311/F3.medium.gif",
};



Image.Prototype = function() {

  // An image is ()
  this.getLength = function() {
    if (this.hasCaption()) {
      return this.document.get(this.properties.caption) + 1;
    } else {
      return 1;
    }
  };

  this.insertOperation = function(startChar, text) {
    if (startChar === 0) {
      throw new Error("The image char is not addressable.");
    }

    if (this.hasCaption()) {
      return this.caption.insertOperation(startChar-1, text);
    }

    return null;
  };

  this.deleteOperation = function(startChar, endChar) {
    if (startChar === 0) {
      console.log("Tried to delete the image char. Don't do that, hmmmkay?");
      return;
    }

    if (this.hasCaption()) {
      return this.caption.deleteOperation(startChar-1, endChar-1);
    }

    return null;
  };

  this.hasCaption = function() {
    return (!!this.properties.caption);
  };
};


Image.Prototype.prototype = Node.prototype;
Image.prototype = new Image.Prototype();
Image.prototype.constructor = Image;

Object.defineProperties(Image.prototype, {

  // Used as a resource header
  header: {
    get: function() { return this.properties.label; }
  },
  label: {
    get: function() { return this.properties.label; }
  },
  title: {
    get: function() { return this.properties.title; }
  },
  medium: {
    get: function() { return this.properties.medium; }
  },
  large: {
    get: function() { return this.properties.large; }
  },
  url: {
    get: function() { return this.properties.url; }
  },
  large_url: {
    get: function() { return this.properties.large_url; }
  },
  caption: {
    get: function() {
      // HACK: this is not yet a real solution
      if (this.properties.caption) {
        return this.document.get(this.properties.caption);
      } else {
        return "";
      }
    }
  }
});

module.exports = Image;
