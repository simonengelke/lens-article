var _ = require('underscore');
var Node = require('substance-document').Node;

// Lens.MixedCitation
// -----------------
//

var MixedCitation = function(node) {
  Node.call(this, node);
};

// Type definition
// -----------------
//

MixedCitation.type = {
  "id": "citation", // type name
  "parent": "content",
  "properties": {
    "source_id": "string",
    "citation": "string",
    "doi": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

MixedCitation.description = {
  "name": "MixedCitation",
  "remarks": [
    "A mixed citation type that fits it all.",
    "Use the mixed_citation type when you're missing structured information."
  ],
  "properties": {
    "citation": "Whatever you want to show up on the citation card.",
    "doi": "DOI reference",
  }
};

// Example MixedCitation
// -----------------
//

MixedCitation.example = {
  "id": "mixed_citation_1",
  "type": "mixed_citation",
  "citation": "Meyer MJ, Fleming JM, Lin AF, Hussnain SA, Ginsburg E, Vonderhaar BK. CD44posCD49fhiCD133/2hi defines xenograft-initiating cells in estrogen receptor-negative breast cancer. Cancer Res 2010; 70: 4624 - 33",
  "doi": "http://dx.doi.org/10.1158/0008-5472.CAN-09-3619"
};


MixedCitation.Prototype = function() {

};


MixedCitation.Prototype.prototype = Node.prototype;
MixedCitation.prototype = new MixedCitation.Prototype();
MixedCitation.prototype.constructor = MixedCitation;

Object.defineProperties(MixedCitation.prototype, {
  source_id: {
    get: function() {
      return this.properties.source_id;
    }    
  },
  // Header is used by the resource card headers
  header: {
    get: function() {
      return this.properties.citation;
    }
  },
  citation: {
    get: function() {
      return this.properties.citation;
    }
  }
});


module.exports = MixedCitation;
