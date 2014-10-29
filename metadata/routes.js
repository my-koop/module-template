function addRoutes(metaData) {
    metaData.addRoute({
        idPath: ["public", "example", "somepage"],
        component: "Component1",
        name: "example",
        path: "/example"
    });
}
exports.addRoutes = addRoutes;
