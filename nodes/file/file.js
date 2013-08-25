var _ = require('underscore');
var Node = require('../node');


// Lens.File
// -----------------
//

var File = function(node) {
  Node.call(this, node);
};

// Type definition
// -----------------
//

File.type = {
  "id": "file",
  "parent": "content",
  "properties": {
    "name": "string",
    "description": "string",
    "size": "string",
    "extension": "string",
    "doi": "string",
    "url": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

File.description = {
  "name": "File",
  "remarks": [
    "A file reference to an external resource.",
    "Files are currently only used in conjunction with supplment nodes."
  ],
  "properties": {
    "name": "The file name",
    "description": "File description",
    "size": "The file size",
    "extension": "The file extension",
    "doi": "DOI URL",
    "url": "File URL"
  }
};

// Example File
// -----------------
//

File.example = {
  "id": "file_1",
  "type": "file",
  "name": "PDF",
  "description": "Describes how bla works",
  "size": "3",
  "extension": ".pdf",
  "doi": "http://dx.doi.org/10.7554/eLife.00868.023",
  "url": "http://www.landesbioscience.com/bla.pdf"
};


File.Prototype = function() {

};

File.Prototype.prototype = Node.prototype;
File.prototype = new File.Prototype();
File.prototype.constructor = File;


// Generate getters
// --------

var getters = {};

_.each(File.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});


// URL falls back to doi
// --------

getters["url"] = {
  get: function() {
    return this.properties.url || this.properties.doi;
  }
};

Object.defineProperties(File.prototype, getters);

module.exports = File;