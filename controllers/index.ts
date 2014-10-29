import metaData = require("../metadata/index");
import utils = require("mykoop-utils");

// Controllers.
import controller1 = require ("./controller1");

var endPoints = metaData.endpoints;

export function attachControllers(binder) {
  binder.attach(
    {endPoint: endPoints.example.get1},
    controller1
  );
}
