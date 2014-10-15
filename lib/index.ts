import mkmodule = require("mykoop-module");
import mykoop = require("mykoop");

class Module implements mkmodule.Module {
  moduleManager: mykoop.ModuleManager;

  init(moduleManager: mykoop.ModuleManager){
    this.moduleManager = moduleManager;
    //app.get("")
  }

  method1(par1: string): string{
    return "";
  }
}


class ModuleBridge implements mykoop.IModuleBridge {
  instance: Module;

  getInstance(): Module {
    return this.instance || (this.instance = new Module());
  }

  onAllModulesLoaded(moduleManager: mykoop.ModuleManager){
    this.getInstance().init(moduleManager);
  }

  getModule() : mykoop.IModule {
    return this.getInstance();
  }

  getStyles(): string[] {
    return null;
  }

  getReactComponents(): string[] {
    return null;
  }
}

var bridge: mykoop.IModuleBridge = new ModuleBridge();
export = bridge;
