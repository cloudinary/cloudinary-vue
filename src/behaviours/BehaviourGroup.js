export class BehaviourGroup {
  /**
   *
   * @param {Array} behaviours
   * @param {Vue} vueInstance
   * @param {Function} setState
   */
  constructor(behaviours, vueInstance, setState) {
    const behavioursNames = Object.keys(behaviours);

    const readySwitches = behavioursNames
      ? behavioursNames.map(() => false)
      : [];

    this.behaviours = behaviours
      ? behavioursNames.map(
          (name, i) =>
            new behaviours[name](vueInstance, update => {
              if (update.ready !== undefined) {
                readySwitches[i] = update.ready;
              }

              setState({
                ready: readySwitches.reduce(
                  (result, ready) => (result ? ready : false),
                  true
                ),
                data: update.data === undefined ? {} : update.data
              });
            })
        )
      : {};

    this.behaviours.forEach((behaviour, i) => {
      this[behavioursNames[i]] = behaviour;
    });

    setState({
      ready: readySwitches.reduce(
        (result, ready) => (result ? ready : false),
        true
      ),
      data: {}
    });
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
