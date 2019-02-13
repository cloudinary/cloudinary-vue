import { Behaviour } from "./Behaviour";

export class Visible extends Behaviour {
  static data() {
    return { visible: false };
  }

  onCreated() {
    this.next({ ready: true, data: { visible: false } });
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
    if (this.vue.$el && !this.cancelListener) {
      this.cancelListener = watchElementVisibility(this.vue.$el, visible => {
        this.next({ ready: true, data: { visible: true } });
      });
    }
  }
}

function watchElementVisibility(element, listener) {
  if (typeof window === "object" && "IntersectionObserver" in window) {
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
