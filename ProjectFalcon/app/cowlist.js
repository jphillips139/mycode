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
var herdListVM = require("./herdlist-view-model");

function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = herdListVM.herdListViewModel.get("selectedItem");
}
exports.pageNavigatedTo = pageNavigatedTo;

//var page;
//var pageData = new observableModule.Observable();
//var cows = new observableArray.ObservableArray([]);

/*
exports.load = function (args) {
    page = args.object;
    pageData.set("cow", "");
    pageData.set("cows", cows);
    page.bindingContext = pageData;
    // Empty the array for subsequent visits to the page
    while (cows.length) {
        cows.pop();
    }
    loadCow();
};
*/

function loadCow() {
    el.data("Cow").get().then(function (data) {
        data.result.forEach(function (cow) {
            cows.push({
                name: cow.CowID
            });
        });
    });
}

exports.cowTraitNavigate = function (args) {
 var navigationEntry = {
      moduleName : "./cowtrait",
      context : {
              cowId : args.object.bindingContext.id
      }
};

frameModule.topmost().navigate(navigationEntry);
};

exports.addCow = function () {
    // Dismiss the keyboard before adding to the list
    viewModule.getViewById(page, "cow").dismissSoftInput();

    addCow(pageData.get("cow"));

    // Clear the text field
    pageData.set("cow", "");
};

function addCow(cow) {
    el.data("Cow").create({
        Name: cow
    }).then(function (result) {
        cows.push({
            name: cow.CowID
        });
    });
}

exports.cowedit = function (args) {
     frameModule.topmost().navigate("./cowedit");
};

exports.cowtraits = function (args) {
     frameModule.topmost().navigate("./cowtraits");
};

exports.herdlist = function (args) {
     frameModule.topmost().navigate("./herdlist");
};