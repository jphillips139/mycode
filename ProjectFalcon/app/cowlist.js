var dialogs = require("ui/dialogs");
var application = require("application");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var buttonModule = require("ui/button");
var observable = require("data/observable");
var httpModule = require("http");
var page;

exports.cowedit = function (args) {
     frameModule.topmost().navigate("./cowedit");
};

exports.cowtraits = function (args) {
     frameModule.topmost().navigate("./cowtraits");
};

exports.herdlist = function (args) {
     frameModule.topmost().navigate("./herdlist");
};
