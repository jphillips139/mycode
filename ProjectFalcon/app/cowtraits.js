var dialogs = require("ui/dialogs");
var application = require("application");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var buttonModule = require("ui/button");
var observable = require("data/observable");
var observableModule = require("data/observable");
var httpModule = require("http");
var page;

exports.cowlist = function (args) {
     frameModule.topmost().navigate("./cowlist");
};
