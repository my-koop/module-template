function controller1(req, res) {
    var self = this;

    if (!req.params.id) {
        res.status(400).send("Invalid id value");
    }

    var params = {
        id: parseInt(req.params.id) || 0,
        value: "Test"
    };

    self.method1(params, function (err, ret) {
        if (err) {
            return res.send(500);
        }

        res.send(ret);
    });
}
;

module.exports = controller1;
