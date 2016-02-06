var config = require("./shared/models/config");
var el = require("./shared/models/el");
var observable = require("data/observable");
var observableArray = require("data/observable-array");

var ViewModelItem = (function () {
    function ViewModelItem(id, herdNumber, name) {
        this.id = id;
        this.herdNumber = herdNumber;
        this.name = name;
    }
    return ViewModelItem;
})();

exports.ViewModelItem = ViewModelItem;
var items = new observableArray.ObservableArray();

el.data("Herd").get().then(function (data) {
    data.result.forEach(function (herd) {
        items.push({
            id: herd.Id,
            herdNumber: herd.HerdNumber,
            name: herd.Name
        });
    });
});

exports.herdListViewModel = new observable.Observable();
exports.herdListViewModel.set("items", items);