"use strict";

var Node = require("../node");

var Image = function(node) {
  Node.call(this, node);
};

Image.type = {
  "parent": "figure",
  "properties": {
    "url": "string",
    "large_url": "string",
    "doi": "string",
    "caption": "string",
    "label": "string"
  }
};

// This is used for the auto-generated docs
// -----------------
//

Image.description = {
  "name": "An image figure",
  "remarks": [
    "References an image on the web."
  ],
  "properties": {
    "label": "Formula label (4)",
    "data": "Formula data, either MathML or image url",
    "format": ""
  }
};


// Example Image
// -----------------
//

Image.example = {
  "type": "image",
  "id": "image_fig2",
  "label": "Figure 2.",
  "doi": "http://dx.doi.org/10.7554/eLife.00311.005",
  "caption": "Ensemble refinement parameters and results as function of resolution of the datasets. (A) Gain in Rfree of ensemble refinement compared with re-refinement using phenix.refine, (B) number of structures in the final ensemble model, (C) optimum relaxation time, τx, (D) optimum pTLS and (E) optimum Tbath plotted as function of resolution of the dataset.",
  "url": "http://elife.elifesciences.org/content/elife/1/e00311/F2.medium.gif",
  "large_url": "http://elife.elifesciences.org/content/elife/1/e00311/F2.large.jpg"
};



Image.Prototype = function() {

};

Image.Prototype.prototype = Node.prototype;
Image.prototype = new Image.Prototype();


// Generate getters
// --------

var getters = {};

_.each(Image.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Image.prototype, getters);


module.exports = Image;