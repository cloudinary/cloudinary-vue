import { State } from "./State";

export function install(Vue, options) {
  Vue.prototype.CLDGlobalContextState = new State(options);
}
