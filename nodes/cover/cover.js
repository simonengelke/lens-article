var _ = require('underscore');
var Node = require('substance-document').Node;


// Lens.Cover
// -----------------
//

var Cover = function(node, doc) {
  Node.call(this, node, doc);
};

// Type definition
// -----------------
//

Cover.type = {
  "id": "cover",
  "parent": "content",
  "properties": {
    "source_id": "string"
    // No properties as they are all derived from the document node
  }
};

// This is used for the auto-generated docs
// -----------------
//

Cover.description = {
  "name": "Cover",
  "remarks": [
    "Virtual view on the title and authors of the paper."
  ],
  "properties": {
  }
};

// Example Cover
// -----------------
//

Cover.example = {
  "id": "cover",
  "type": "cover"
};

Cover.Prototype = function() {

};

Cover.Prototype.prototype = Node.prototype;
Cover.prototype = new Cover.Prototype();
Cover.prototype.constructor = Cover;


// Generate getters
// --------

var getters = {};


Object.defineProperties(Cover.prototype, {
  title: {
    get: function() {
      return this.document.title;
    }
  },
  authors: {
    // Expand author id's to corresponding person nodes
    get: function() {
      return this.document.authors;
    }
  }
});

module.exports = Cover;
