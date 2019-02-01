export class Behaviour {
  constructor(vue, state) {
    this.vue = vue;
    this.state = state;
  }

  next(value) {
    return this.state.next(value);
  }

  error(error) {
    return this.state.error(error);
  }

  complete() {
    return this.state.complete();
  }

  onCreated() {
    return;
  }

  onUpdated() {
    return;
  }

  onMounted() {
    return;
  }

  onDestroyed() {
    return;
  }
}
