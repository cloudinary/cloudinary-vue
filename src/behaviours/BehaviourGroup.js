import { assign } from "../utils";

export class BehaviourGroup {
  /**
   *
   * @param {Array} behaviours
   * @param {Vue} vueInstance
   * @param {Function} setState
   */
  constructor(behaviours, vueInstance) {
    const behavioursNames = Object.keys(behaviours);

    const readySwitches = behavioursNames
      ? behavioursNames.map(() => false)
      : [];

    const ready = () =>
      readySwitches.reduce((result, ready) => (result ? ready : false), true);

    this.behaviours = behaviours
      ? behavioursNames.map(
          (name, i) =>
            new behaviours[name](vueInstance, update => {
              if (update.ready !== undefined) {
                readySwitches[i] = update.ready;
              }

              if (vueInstance.ready !== ready()) {
                vueInstance.ready = ready();
              }
              assign(vueInstance, update.data === undefined ? {} : update.data);
              vueInstance.$forceUpdate();
            })
        )
      : {};

    this.behaviours.forEach((behaviour, i) => {
      this[behavioursNames[i]] = behaviour;
    });

    if (vueInstance.ready !== ready()) {
      vueInstance.ready = ready();
      vueInstance.$forceUpdate();
    }
  }

  onCreated() {
    this.behaviours.forEach(behaviour => behaviour.onCreated());
  }

  onUpdated() {
    this.behaviours.forEach(behaviour => behaviour.onUpdated());
  }

  onMounted() {
    this.behaviours.forEach(behaviour => behaviour.onMounted());
  }

  onDestroyed() {
    this.behaviours.forEach(behaviour => behaviour.onDestroyed());
  }
}
