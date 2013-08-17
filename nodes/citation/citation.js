var _ = require('underscore');
var Node = require('../node');

// Lens.Citation
// -----------------
//

var Citation = function(node) {
  Node.call(this, node);
};

// Type definition
// -----------------
//

Citation.type = {
  "id": "citation", // type name
  "parent": "content",
  "properties": {
    "description": "string",
    "doi": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Citation.description = {
  "name": "Citation",
  "descr": "A raw citation type that fits it all.",
  "remarks": [
    "Use the `citation` type when you're missing structured information."
  ],
  "properties": {
    "description": "Whatever you want to show up on the publication card.",
    "doi": "DOI reference",
  }
};


// Example ArticleCitation
// -----------------
//

Citation.example = {
  "id": "citation_1",
  "type": "citation",
  "description": "Meyer MJ, Fleming JM, Lin AF, Hussnain SA, Ginsburg E, Vonderhaar BK. CD44posCD49fhiCD133/2hi defines xenograft-initiating cells in estrogen receptor-negative breast cancer. Cancer Res 2010; 70: 4624 - 33",
  "doi": "http://dx.doi.org/10.1158/0008-5472.CAN-09-3619"
};



Citation.Prototype = function() {

};

Citation.Prototype.prototype = Node.prototype;
Citation.prototype = new Citation.Prototype();
Citation.prototype.constructor = Citation;

Object.defineProperties(Citation.prototype, {
  title: {
    get: function() {
      return this.properties.description;
    }
  },
  // Needed?
  name: {
    get: function () {
      return this.properties.title;
    }
  }
});

module.exports = Citation;