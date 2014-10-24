import utils = require("mykoop-utils");
export function addRoutes(metaData: utils.MetaData) {
  metaData.addRoute({
    idPath: ["public","example","somepage"],
    component: "Component1",
    name: "example",
    path: "/example"
  });
}
