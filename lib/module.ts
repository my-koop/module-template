import utils = require("mykoop-utils");
import ModuleClass1 = require("../classes/ModuleClass1");
import controllerList = require("../controllers/index");

class Module extends utils.BaseModule implements mkmodule.Module {
  init() {
    controllerList.attachControllers(new utils.ModuleControllersBinder(this));
  }

  method1(
    inParam: {id:number; value:string},
    callback: (err: Error, res ?: mkmodule.ModuleClass1) => void
  ) {
    if (!inParam.id) {
      return callback(new Error("Wrong id"));
    }
    var res = new ModuleClass1();
    res.iMember = inParam.id + 1;
    res.sMember = inParam.value;
    callback(null, res);
  }
}

export = Module;
