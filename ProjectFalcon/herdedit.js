var dialogs = require("ui/dialogs");
var application = require("application");
var config = require("../shared/models/config");
var frameModule = require("ui/frame");
var el = require("../shared/models/el");
var viewModule = require("ui/core/view");
var buttonModule = require("ui/button");
var observable = require("data/observable");
var observableModule = require("data/observable");
var httpModule = require("http");
var observableArray = require("data/observable-array");
var page;

exports.cowlist = function (args) {
     frameModule.topmost().navigate("./cowlist");
};

exports.herdlist = function (args) {
     frameModule.topmost().navigate("./herdlist");
};