import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

export function install(Vue, options) {
  Vue.prototype.CLDGlobalContextState = new State(
    normalizeConfiguration(options)
  );
}
