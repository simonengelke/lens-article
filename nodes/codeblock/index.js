"use strict";

var SubstanceNodes = require("substance-nodes");

module.exports = {
  Model: SubstanceNodes["codeblock"].Model,
  View: require('./codeblock_view')
};
