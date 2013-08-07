"use strict";

var Document = require("substance-document");
var Controller = require("substance-application").Controller;
var ArticleView = require('./article_view');
var util = require('substance-util');


// Article.Controller
// -----------------
//
// Controls the Article.View

var ArticleController = function(document) {

  // Private reference to the document
  this.__document = document;
};

ArticleController.Prototype = function() {

  this.createView = function() {
    // Remove when transition has completed
    this.writer = new Document.Writer(this.__document);

    this.content = new Document.Writer(this.__document, {view: "content"});
    this.figures = new Document.Writer(this.__document, {view: "figures"});
    this.citations = new Document.Writer(this.__document, {view: "citations"});

    var view = new ArticleView(this);
    this.view = view;
    var surface = view.surface;

    return view;
  };

  this.getActiveControllers = function() {
    var result = [];
    result.push(["article", this]);
    result.push(["writer", this.writer]);
    return result;
  };
};

ArticleController.Prototype.prototype = Controller.prototype;
ArticleController.prototype = new ArticleController.Prototype();

module.exports = ArticleController;
