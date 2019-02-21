import { Behaviour } from "./Behaviour";

export class CombineWithContext extends Behaviour {
  onCreated() {
    if (this.vue.attrsCombinedState === undefined) {
      throw new Error(
        "Component does not contain required attrsCombinedState object"
      );
    }
    this.next({ ready: true });

    if (this.vue.CldContextState) {
      this.contextState = this.vue.attrsCombinedState.spawn();
      this.contextStateSub = this.vue.CldContextState.subscribe({
        next: v => {
          this.contextState.next(v);
        }
      });
    }
  }

  onDestroyed() {
    if (this.contextStateSub) {
      this.contextStateSub();
    }
    if (this.contextState) {
      this.contextState.complete();
    }
  }
}
