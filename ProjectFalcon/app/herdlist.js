var config = require("./shared/models/config");
var el = require("./shared/models/el");
var httpModule = require("http");
var dialogs = require("ui/dialogs");
var application = require("application");
var frameModule = require("ui/frame");
var viewModule = require("ui/core/view");
var buttonModule = require("ui/button");
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");

var page;

exports.herdedit = function (args) {
     frameModule.topmost().navigate("./herdedit");
};

exports.cowlist = function (args) {
     frameModule.topmost().navigate("./cowlist");
};



var herds = new observableArray.ObservableArray([]);
var pageData = new observableModule.Observable();

exports.load = function (args) {
    page = args.object;
    pageData.set("herd", "");
    pageData.set("herds", herds);
    page.bindingContext = pageData;
    // Empty the array for subsequent visits to the page
    while (herds.length) {
        herds.pop();
    }
    loadHerd();
};

exports.add = function () {
    // Dismiss the keyboard before adding to the list
    viewModule.getViewById(page, "herd").dismissSoftInput();

    addHerd(pageData.get("herd"));

    // Clear the text field
    pageData.set("herd", "");
};

function loadHerd() {
    el.data("Herd").get().then(function (data) {
        data.result.forEach(function (herd) {
            herds.push({
                name: herd.Name,
                id: herd.Id
            });
        });
    });
}

function addHerd(herd) {
    el.data("Herd").create({
        Name: herd
    }).then(function (result) {
        herds.push({
            name: herd
        });
    });
}