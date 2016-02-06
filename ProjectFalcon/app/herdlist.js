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
var vmModule = require("./herdlist-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.herdListViewModel;
}
exports.load = pageLoaded;

exports.cowListNavigate = function (args) {
 var navigationEntry = {
      moduleName : "./cowlist",
      context : {
              herdId : args.object.bindingContext.id
      }
};

frameModule.topmost().navigate(navigationEntry);
};

exports.addHerd = function () {
    // Dismiss the keyboard before adding to the list
    viewModule.getViewById(page, "herd").dismissSoftInput();

    addHerd(pageData.get("herd"));

    // Clear the text field
    pageData.set("herd", "");
};

function addHerd(herd) {
    el.data("Herd").create({
        Name: herd
    }).then(function (result) {
        herds.push({
            name: herd
        });
    });
}

exports.editHerd = function (args) {
     frameModule.topmost().navigate("./herdedit");
};