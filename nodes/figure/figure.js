var _ = require('underscore');
var Node = require('../node');


// Lens.Figure
// -----------------
// 
// Abstract node type

var Figure = function(node) {
  Node.call(this, node);
};

Figure.Prototype = function() {

};

Figure.Prototype.prototype = Node.prototype;
Figure.prototype = new Figure.Prototype();


module.exports = Figure;