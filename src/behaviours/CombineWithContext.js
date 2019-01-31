import { Behaviour } from "./Behaviour";

export class CombineWithContext extends Behaviour {
  onCreated() {
    this.setReady(true);

    if (this.vueInstance.CLDContextState) {
      this.contextState = this.vueInstance.attrsCombinedState.spawn();
      this.contextStateSub = this.vueInstance.CLDContextState.subscribe({
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
