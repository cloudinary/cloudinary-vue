import { Behaviour } from "./Behaviour";

export class MaterializeCombinedState extends Behaviour {
  onCreated() {
    if (this.vue.attrsCombinedState === undefined) {
      throw new Error(
        "Component does not contain required attrsCombinedState object"
      );
    }
    this.next({ ready: true });

    this.attrsCombinedStateSub = this.vue.attrsCombinedState.subscribe({
      next: v => {
        this.vue.attrsCombined = v;
      }
    });
  }

  onDestroyed() {
    this.attrsCombinedStateSub();
  }
}
