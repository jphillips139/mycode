var config = require("./shared/models/config");
var el = require("./shared/models/el");

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function(args) {
    var expandExp;
    var data = el.data("Cow");

    expandExp = {

    };
    
    var query = new el.Query();
    query.order("CowId");
    query.where().eq('Id', '9b560c70-cd00-11e5-9bf5-f3eed0dc9602');
    query.expand(expandExp)
    
    return data.get(query)
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

module.exports = new Service();