var _ = require('underscore');
var Node = require('../node');

// Lens.Citation
// -----------------
//
// Abstract interface for all publication-like resources

var Citation = function(node) {
  Node.call(this, node);
};

Citation.Prototype = function() {

};

Citation.Prototype.prototype = Node.prototype;
Citation.prototype = new Citation.Prototype();

Object.defineProperties(Citation.prototype, {
  name: {
    get: function () {
      return this.properties.title;
    }
  }
});

module.exports = Citation;