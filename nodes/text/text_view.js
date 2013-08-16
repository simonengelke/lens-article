var NodeView = require('../node').View;
var Document = require("substance-document");
var Annotator = Document.Annotator;



// Substance.Text.View
// -----------------
//
// Manipulation interface shared by all textish types (paragraphs, headings)
// This behavior can overriden by the concrete node types

var LAST_CHAR_HACK = false;

var TextView = function(node) {
  NodeView.call(this, node);

  this.$el.addClass('content-node text');
  this.$el.attr('id', this.node.id);
};

TextView.Prototype = function() {

  // Rendering
  // =============================
  //

  this.render = function() {
    // Initial node render
    // DocumentNode.View.prototype.render.call(this);

    // var $content = $('<div class="content"></div>');
    // this.content = $content[0];
    // this.$el.append($content);

    NodeView.prototype.render.call(this);

    this.renderContent();
    return this;
  };


  this.dispose = function() {
    NodeView.prototype.dispose.call(this);
    console.log('disposing paragraph view');
  };

  this.renderContent = function() {
    var el = document.createTextNode(this.node.content)
    this.content.appendChild(el);

    // EXPERIMENTAL HACK: adding an extra space for better soft-break behavior
    if (LAST_CHAR_HACK) {
      this.content.appendChild(document.createTextNode(" "));
    }
  };

  this.insert = function(pos, str) {
    var range = this.getDOMPosition(pos);
    var textNode = range.startContainer;
    var offset = range.startOffset;
    var text = textNode.textContent;
    text = text.substring(0, offset) + str + text.substring(offset);
    textNode.textContent = text;
  };

  this.delete = function(pos, length) {
    var range = this.getDOMPosition(pos);
    var textNode = range.startContainer;
    var offset = range.startOffset;
    var text = textNode.textContent;
    text = text.substring(0, offset) + text.substring(offset+length);
    textNode.textContent = text;
  };

  this.onNodeUpdate = function(op) {
    if (op.path[1] !== "content") {
      return;
    }
    if (op.type === "update") {
      var update = op.diff;
      if (update.isInsert()) {
        this.insert(update.pos, update.str);
      } else if (update.isDelete()) {
        this.delete(update.pos, update.str.length);
      }
    }
  };

  this.getCharPosition = function(el, offset) {
    // TODO: this is maybe too naive
    // lookup the given element and compute a
    // the corresponding char position in the plain document
    var range = document.createRange();
    range.setStart(this.content.childNodes[0], 0);
    range.setEnd(el, offset);
    var str = range.toString();
    var charPos = Math.min(this.node.content.length, str.length);

    // console.log("Requested char pos: ", charPos, this.node.content[charPos]);

    return charPos;
  };

  // Returns the corresponding DOM element position for the given character
  // --------
  //
  // A DOM position is specified by a tuple of element and offset.
  // In the case of text nodes it is a TEXT element.

  this.getDOMPosition = function(charPos) {
    if (this.content === undefined) {
      throw new Error("Not rendered yet.");
    }

    var range = document.createRange();

    if (this.node.content.length === 0) {
      range.setStart(this.content.childNodes[0], 0);
      return range;
    }

    // otherwise look for the containing node in DFS order
    // TODO: this could be optimized using some indexing or caching?
    var stack = [this.content];
    while(stack.length > 0) {
      var el = stack.pop();
      if (el.nodeType === Node.TEXT_NODE) {
        var text = el;
        if (text.length >= charPos) {
          range.setStart(el, charPos);
          return range;
        } else {
          charPos -= text.length;
        }
      } else if (el.childNodes.length > 0) {
        // push in reverse order to have a left bound DFS
        for (var i = el.childNodes.length - 1; i >= 0; i--) {
          stack.push(el.childNodes[i]);
        }
      }
    }

    console.log("Bug-Alarm: the model and the view are out of sync.")
    console.log("The model as "+charPos+" more characters");
    console.log("Returning the last available position... but please fix me. Anyone?");

    var children = this.content.childNodes;
    var last = children[children.length-1];
    range.setStart(last, last.length);

    return range;
  };

  var createAnnotationElement = function(entry) {
    var el = document.createElement("SPAN");
    el.classList.add("annotation");
    el.classList.add(entry.type);
    el.setAttribute("id", entry.id);
    return el;
  };

  this.renderAnnotations = function(annotations) {
    var text = this.node.content;
    var fragment = document.createDocumentFragment();


    var fragmenter = new Annotator.Fragmenter(fragment, text, annotations);

    fragmenter.onText = function(context, text) {
      context.appendChild(document.createTextNode(text));
    };

    fragmenter.onEnter = function(entry, parentContext) {
      var el = createAnnotationElement(entry);
      parentContext.appendChild(el);
      return el;
    };

    // this calls onText and onEnter in turns...
    fragmenter.start(fragment, text, annotations);

    // EXPERIMENTAL HACK:
    // append a trailing white-space to improve the browser's behaviour with softbreaks at the end
    // of a node.
    if (LAST_CHAR_HACK) {
      fragment.appendChild(document.createTextNode(" "));
    }

    // set the content
    this.content.innerHTML = "";
    this.content.appendChild(fragment);
  };

  // Free the memory
  // --------

  this.dispose = function() {
    this.stopListening();
  };
};

TextView.Prototype.prototype = NodeView.prototype;
TextView.prototype = new TextView.Prototype();

module.exports = TextView;
