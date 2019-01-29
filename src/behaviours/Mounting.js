import { Behaviour } from "./Behaviour";

export class Mounting extends Behaviour {
  onCreated() {
    // hold "ready" until mounting only in case of
    // potential CLDTransformations
    // not created yet
    if (
      !this.vueInstance.CLDContextState &&
      (!this.vueInstance.$slots ||
        !this.vueInstance.$slots.default ||
        !this.vueInstance.$slots.default.length)
    ) {
      this.setReady(true);
    }
  }
  onMounted() {
    this.setReady(true);
  }

  onDestroyed() {
    this.setReady(false);
  }
}
