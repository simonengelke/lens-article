"use strict";

var NodeView = require("../node").View;
var $$ = require("substance-application").$$;


// Substance.Image.View
// ==========================================================================

var PublicationInfoView = function(node, viewFactory) {
  NodeView.call(this, node, viewFactory);

  this.$el.addClass('publication-info');
  this.$el.attr('id', this.node.id);
};

PublicationInfoView.Prototype = function() {

  // Rendering
  // =============================
  //


  // Render Markup
  // --------
  //

  this.render = function() {
    NodeView.prototype.render.call(this);

    var tableRows = [
      $$('tr', {
        children: [
          $$('td', {
            children: [
              $$('div.label', {text: "Subject"}),
              $$('div.value', {text: this.node.subjects.join(', ')})
            ]
          }),
          $$('td', {
            children: [
              $$('div.label', {text: "Organism"}),
              $$('div.value', {text: this.node.research_organisms.join(', ')})
            ]
          })
        ]
      }),
      $$('tr', {
        children: [
          $$('td', {
            colspan: 2,
            children: [
              $$('div.label', {text: "Keywords"}),
              $$('div.value', {text: this.node.keywords.join(', ')})
            ]
          })
        ]
      })
    ];
    
    var catTbl = $$('table.categorization', {
      children: [ $$('tbody', { children: tableRows }) ]
    });

    this.el.appendChild(catTbl);
    this.el.appendChild($$('.label.links', {text: "Links"}));
      
    // Prepare for download the JSON
    var json = JSON.stringify(this.node.document.toJSON(), null, '  ');
    var bb = new Blob([json], {type: "application/json"});

    var links = $$('.links', {
      children: [
        $$('a.link pdf-link', {
          href: this.node.pdf_link,
          html: '<i class="icon-download-alt"></i> PDF'
        }),
        $$('a.link.json-link', {
          href: window.URL.createObjectURL(bb),
          html: '<i class="icon-download-alt"></i> JSON'
        }),
        $$('a.link.xml-link', {
          href: this.node.xml_link,
          html: '<i class="icon-download-alt"></i> XML'
        }),
        $$('a.link.doi-link', {
          href: this.node.doi,
          html: '<i class="icon-external-link-sign"></i> DOI'
        })
      ]
    });

    this.el.appendChild(links);

    var dateRows = [
      $$('tr', {
        children: [
          $$('td', {
            children: [
              $$('div.label', {text: "Received"}),
              $$('div.value', {text: this.node.received_on})
            ]
          }),
          $$('td', {
            children: [
              $$('div.label', {text: "Accepted"}),
              $$('div.value', {text: this.node.accepted_on})
            ]
          }),
          $$('td', {
            children: [
              $$('div.label', {text: "Published"}),
              $$('div.value', {text: this.node.published_on})
            ]
          })
        ]
      })
    ];
    
    var datesTbl = $$('table.dates', {
      children: [ $$('tbody', { children: dateRows }) ]
    });

    this.el.appendChild(datesTbl);
    return this;
  };

  this.dispose = function() {
    NodeView.prototype.dispose.call(this);

  };
};

PublicationInfoView.Prototype.prototype = NodeView.prototype;
PublicationInfoView.prototype = new PublicationInfoView.Prototype();

module.exports = PublicationInfoView;
