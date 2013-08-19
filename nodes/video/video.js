var _ = require('underscore');
var Node = require('../node');

// Lens.Video
// -----------------
//

var Video = function(node, doc) {
  Node.call(this, node, doc);
};

// Type definition
// -----------------
//

Video.type = {
  "id": "video",
  "parent": "content",
  "properties": {
    "label": "string",
    "title": "string",
    "doi": "string",
    "url": "string",
    "url_webm": "string",
    "url_ogv": "string",
    "caption": "paragraph",
    "poster": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Video.description = {
  "name": "Video",
  "remarks": [
    "A video type intended to refer to video resources.",
    "MP4, WebM and OGV formats are supported."
  ],
  "properties": {
    "label": "Label shown in the resource header.",
    "title": "Full title of the video.",
    "doi": "Optional DOI url.",
    "url": "URL to mp4 version of the video.",
    "url_webm": "URL to WebM version of the video.",
    "url_ogv": "URL to OGV version of the video.",
    "poster": "Video poster image.",
    "caption": "A paragraph id that has the caption."
  }
};

// Example Video
// -----------------
//

Video.example = {
  "id": "video_1",
  "type": "video",
  "label": "Video 1.",
  "title": "Introduction to Lens",
  "url": "http://cdn.elifesciences.org/video/eLifeLensIntro2.mp4",
  "url_webm": "http://cdn.elifesciences.org/video/eLifeLensIntro2.webm",
  "url_ogv": "http://cdn.elifesciences.org/video/eLifeLensIntro2.ogv",
  "doi": "http://dx.doi.org/10.7554/Fake.doi.003",
  "caption": "paragraph_video_caption",
  "poster": "http://cdn.elifesciences.org/video/eLifeLensIntro2.png"
}

Video.Prototype = function() {

};

Video.Prototype.prototype = Node.prototype;
Video.prototype = new Video.Prototype();
Video.prototype.constructor = Video;


// Generate getters
// --------

var getters = {};

_.each(Video.type.properties, function(prop, key) {
  getters[key] = {
    get: function() {
      return this.properties[key];
    }
  };
});


Object.defineProperties(Video.prototype, _.extend(getters, {
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
}));

module.exports = Video;
