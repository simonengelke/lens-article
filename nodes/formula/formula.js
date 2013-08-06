var _ = require('underscore');
var Node = require('../node');


// Lens.Formula
// -----------------
//

var Formula = function(node) {
  Node.call(this, node);
};


// Type definition
// -----------------
//

Formula.type = {
  "parent": "content",
  "properties": {
    "label": "string",
    "data": "string",
    "format": "string" // MathML, LaTeX, image
  }
};


// This is used for the auto-generated docs
// -----------------
//

Formula.description = {
  "name": "A formula",
  "remarks": [
    "Can either be in mathml format or an image url"
  ],
  "properties": {
    "label": "Formula label (4)",
    "data": "Formula data, either MathML or image url",
    "format": ""
  }
};


// Example Formula
// -----------------
//

Formula.example = {   
  "type": "formula",
  "id": "formula_eqn1",
  "label": "(1)",
  "content": "<mml:mrow>...</mml:mrow>",
  "format": "mathml"
};

Formula.Prototype = function() {
  // Returns the citation URLs if available
  // Falls back to the DOI url
  // Always returns an array;
  this.urls = function() {
    return this.properties.citation_urls.length > 0
            ? this.properties.citation_urls
            : [this.properties.doi]
  }
};

Formula.Prototype.prototype = Node.prototype;
Formula.prototype = new Formula.Prototype();


// Generate getters
// --------

var getters = {};

_.each(Formula.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});

Object.defineProperties(Formula.prototype, getters);


module.exports = Formula;