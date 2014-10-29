var utils = require("mykoop-utils");
var routes = require("./routes");
var translations = require("../locales/index");
var endpoints = require("./endpoints");

var metaDataBuilder = new utils.MetaData();
routes.addRoutes(metaDataBuilder);

metaDataBuilder.addData("translations", translations);
metaDataBuilder.addData("endpoints", endpoints);

var metaData = metaDataBuilder.get();
module.exports = metaData;
