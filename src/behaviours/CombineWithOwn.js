import { equal } from "../utils";
import { Behaviour } from "./Behaviour";

export class CombineWithOwn extends Behaviour {
  onCreated() {
    if (this.vue.getOwnCLDAttrs === undefined) {
      throw new Error(
        "Component does not define required getOwnCLDAttrs method"
      );
    }
    if (this.vue.attrsCombinedState === undefined) {
      throw new Error(
        "Component does not contain required attrsCombinedState object"
      );
    }
    this.next({ ready: true });

    this.ownState = this.vue.attrsCombinedState.spawn();
    this.ownState.next(this.vue.getOwnCLDAttrs());
  }

  onUpdated() {
    const prev = this.ownState.get();
    const current = this.vue.getOwnCLDAttrs();
    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  }

  onDestroyed() {
    this.ownState.complete();
  }
}
