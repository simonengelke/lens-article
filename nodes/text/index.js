"use strict";

// HACK: Substance TextView as of the version that is used here
// does not give enough control over the annotation process.
// This matter is an issue which is currently addressed and will be rolled out soon.
// Until then we monkey patch the TextView.
// This needs to be done as other node types (e.g., Headings) are derived from that.

var SubstanceNodes = require("substance-nodes");
var LensText = SubstanceNodes["text"];
var monkeyPatch = require("./text_view_patch");
monkeyPatch(LensText.View);

module.exports = LensText;
