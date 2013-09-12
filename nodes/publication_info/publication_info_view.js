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
  // div.content

  // <div id="node_publication_info" class="content-node publication_info" style="display: block;"> 
  //   <table class="categorization">
  //     <tbody><tr>
  //       <td>
  //         <div class="label">Subject</div>
  //         <div class="value">Biochemistry, Biophysics and structural biology</div>
  //       </td>
  //       <td>
  //         <div class="label">Organism</div>
  //         <div class="value">Mouse</div>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td colspan="2">
  //         <div class="label">Keywords</div>
  //         <div class="value">Arp2/3, actin, WASP, cortactin, single molecule, N-WASP</div>
  //       </td>
  //       <td></td>
  //     </tr>
  //   </tbody></table>

  //   <div class="label links">
  //     Links
  //   </div>

  //   <div class="links">
  //     <a href="http://elife.elifesciences.org/content/2/e00884.full-text.pdf" class="link pdf-link"><i class="icon-download-alt"></i> PDF</a>
  //     <a href="http://cdn.elifesciences.org/documents/elife/00884.json" class="link json-link"><i class="icon-download-alt"></i> JSON</a>
  //     <a href="https://s3.amazonaws.com/elife-cdn/elife-articles/00884/elife00884.xml" class="link xml-link"><i class="icon-download-alt"></i> XML</a>
  //     <a href="http://dx.doi.org/10.7554/eLife.00884#" class="link doi-link"><i class="icon-external-link-sign"></i> DOI</a>
  //   </div>

  //   <table class="dates">
  //     <tbody><tr>
  //       <td>
  //         <div class="label">Received</div>
  //         <div class="value">2013-04-29</div>
  //       </td>
  //       <td>
  //         <div class="label">Accepted</div>
  //         <div class="value">2013-07-31</div>
  //       </td>
  //       <td>
  //         <div class="label">Published</div>
  //         <div class="value">2013-09-03</div>
  //       </td>
  //     </tr>
  //   </tbody></table>
  // </div>

  this.render = function() {
    NodeView.prototype.render.call(this);

    var tableRows = [
      $$('tr', {
        children: [
          $$('td', {
            children: [
              $$('div.label', {text: "Subject"}),
              $$('div.value', {text: "Biochemistry, Biophysics and structural biology"})
            ]
          }),
          $$('td', {
            children: [
              $$('div.label', {text: "Organism"}),
              $$('div.value', {text: "Mouse"})
            ]
          })
        ]
      })
    ];

    this.el.innerHTML = "under_construction";
    var catTbl = $$('table.categorization', {
      children: [ $$('tbody', { children: tableRows }) ]
    });

    this.el.appendChild(catTbl);
    // this._imgPos = _indexOf.call(imgChar.childNodes, img);

    return this;
  };

  this.dispose = function() {
    NodeView.prototype.dispose.call(this);

  };

};

PublicationInfoView.Prototype.prototype = NodeView.prototype;
PublicationInfoView.prototype = new PublicationInfoView.Prototype();

module.exports = PublicationInfoView;
