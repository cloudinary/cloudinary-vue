import { Behaviour } from "./Behaviour";

export class Lazy extends Behaviour {
  onCreated() {
    if (this.vue.lazyMode === undefined) {
      throw new Error(
        "Lazy behaviour applied, yet the component does not have lazyMode field"
      );
    }

    this.visible = false;
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
    if (this.vue.lazyMode !== "none") {
      if (this.vue.$el && !this.cancelListener) {
        this.cancelListener = watchElementVisibility(this.vue.$el, visible => {
          if (visible && this.visible !== visible) {
            this.visible = true;
            this.next({ ready: true });
          }
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

function watchElementVisibility(element, listener) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === element) {
            listener(entry.isIntersecting);
          }
        });
      },
      { threshold: [0, 0.01] }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  } else {
    listener(true);
    return () => undefined;
  }
}
