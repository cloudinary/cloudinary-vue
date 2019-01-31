import { equal } from "../utils";
import { Behaviour } from "./Behaviour";

export class CombineWithOwn extends Behaviour {
  onCreated() {
    if (this.vueInstance.getOwnCLDAttrs === undefined) {
      throw new Error(
        "Component does not define required getOwnCLDAttrs method"
      );
    }
    this.setReady(true);

    this.ownState = this.vueInstance.attrsCombinedState.spawn();
    this.ownState.next(this.vueInstance.getOwnCLDAttrs());
  }

  onUpdated() {
    const prev = this.ownState.get();
    const current = this.vueInstance.getOwnCLDAttrs();
    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  }

  onDestroyed() {
    this.ownState.complete();
  }
}
