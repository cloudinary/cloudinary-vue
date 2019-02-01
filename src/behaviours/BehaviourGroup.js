import { assign, merge } from "../utils";
import { CombinedState } from "../reactive/CombinedState";

export class BehaviourGroup {
  /**
   *
   * @param {Array} behaviours
   * @param {Vue} vue
   */
  constructor(behaviours, vue) {
    const behavioursNames = behaviours ? Object.keys(behaviours) : [];

    const behaviourStates = new CombinedState(function() {
      const states = Array.prototype.slice.call(arguments, 0);
      return {
        ready:
          states.length != behavioursNames.length
            ? false
            : states
                .map(_ => !!_.ready)
                .reduce((result, ready) => (result ? ready : false), true),
        data: merge.apply(this, states.map(_ => _.data || {}))
      };
    });

    this.behaviourStatesSub = behaviourStates.subscribe({
      next: state => {
        vue.ready = state.ready;
        assign(vue, state.data);
        vue.$forceUpdate();
      }
    });

    this.behaviours = behavioursNames.length
      ? behavioursNames.map((name, i) => {
          const behaviourState = behaviourStates.spawn();
          return new behaviours[name](vue, behaviourState);
        })
      : {};

    this.behaviours.forEach((behaviour, i) => {
      this[behavioursNames[i]] = behaviour;
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
    this.behaviourStatesSub();
  }
}
