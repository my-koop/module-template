var metaData = require("../metadata/index");

// Controllers.
var controller1 = require("./controller1");

var endPoints = metaData.endpoints;

function attachControllers(binder) {
    binder.attach({ endPoint: endPoints.example.get1 }, controller1);
}
exports.attachControllers = attachControllers;
