import { Behaviour } from "./Behaviour";
import { watchElementSize } from "../helpers/watchElementSize";
import { equal, pick } from "../utils";

export class Resizing extends Behaviour {
  onCreated() {
    Behaviour.prototype.onCreated.call(this);
    this.size = { width: -1, height: -1 };
    this.fix();
  }

  onMounted() {
    Behaviour.prototype.onMounted.call(this);
    this.fix();
  }

  onDestroyed() {
    Behaviour.prototype.onDestroyed.call(this);
    this.fix();
  }

  fix() {
    if (this.shouldListen()) {
      if (this.mounted && !this.cancelListener) {
        this.cancelListener = watchElementSize(this.vueInstance.$el, size => {
          if (equal(this.size, size)) {
            return;
          }
          this.size = pick(size, ["width", "height"]);
          this.setState({ ready: true, data: { size: this.size } });
        });
      }
    } else {
      this.setReady(true);
      if (this.cancelListener) {
        this.cancelListener();
      }
    }
  }

  shouldListen() {
    if (this.vueInstance.responsiveMode === undefined) {
      console.warn(
        "Resizing behaviour applied, yet the component does not have responsiveMode field"
      );
    }
    return this.mounted && this.vueInstance.responsiveMode !== "none";
  }
}
