import { Behaviour } from "./Behaviour";

export class Mounting extends Behaviour {
  onCreated() {
    // hold "ready" until mounting only in case of
    // potential CLDTransformations
    // not created yet
    if (
      !this.vue.CLDContextState &&
      (!this.vue.$slots ||
        !this.vue.$slots.default ||
        !this.vue.$slots.default.length)
    ) {
      this.next({ ready: true });
    }
  }

  onMounted() {
    this.next({ ready: true });
  }
}
