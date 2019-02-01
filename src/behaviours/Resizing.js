import { Behaviour } from "./Behaviour";
import { watchElementSize } from "../helpers/watchElementSize";
import { equal, pick } from "../utils";

export class Resizing extends Behaviour {
  onCreated() {
    this.size = { width: -1, height: -1 };
    this.fix();
  }

  onMounted() {
    this.fix();
  }

  onDestroyed() {
    if (this.cancelListener) {
      this.cancelListener();
    }
  }

  fix() {
    if (this.vue.responsiveMode === undefined) {
      throw new Error(
        "Resizing behaviour applied, yet the component does not have responsiveMode field"
      );
    }

    if (this.vue.responsiveMode !== "none") {
      if (this.vue.$el && !this.cancelListener) {
        this.cancelListener = watchElementSize(this.vue.$el, size => {
          if (equal(this.size, size)) {
            return;
          }
          this.size = pick(size, ["width", "height"]);
          this.next({ ready: true, data: { size: this.size } });
        });
      }
    } else {
      this.next({ ready: true });
      if (this.cancelListener) {
        this.cancelListener();
      }
    }
  }
}
