export class Behaviour {
  constructor(vueInstance, setState) {
    this.vueInstance = vueInstance;
    this.setState = setState;
    this.mounted = false;
  }

  setReady(ready) {
    this.setState({ ready });
  }

  setData(data) {
    this.setState({ data });
  }

  onCreated() {
    return;
  }

  onUpdated() {
    return;
  }

  onMounted() {
    this.mounted = true;
  }

  onDestroyed() {
    this.mounted = false;
  }
}
