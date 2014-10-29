import express = require("express");

function controller1(req: express.Request, res: express.Response) {
  var self: mkmodule.Module = this;

  if (!req.params.id) {
    res.status(400).send("Invalid id value");
  }

  var params = {
    id: parseInt(req.params.id) || 0,
    value: "Test"
  };

  self.method1(params, function(err, ret: mkmodule.ModuleClass1) {
    if (err) {
      return res.send(500);
    }

    res.send(ret);
  });
};

export = controller1;
