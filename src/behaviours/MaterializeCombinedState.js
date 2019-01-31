import { Behaviour } from "./Behaviour";

export class MaterializeCombinedState extends Behaviour {
  onCreated() {
    this.setReady(true);

    this.attrsCombinedStateSub = this.vueInstance.attrsCombinedState.subscribe({
      next: v => {
        this.vueInstance.attrsCombined = v;
      }
    });
  }

  onDestroyed() {
    this.attrsCombinedStateSub();
  }
}
