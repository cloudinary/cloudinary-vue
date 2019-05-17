import { State } from "./State";
import { merge } from "../utils";
/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * A complex observable state entity
 * which allows spawning partial state containers
 * that contents are then reactively combined
 * in an order of creating those spawns
 *
 * Does not contain next/error/complete methods
 * as those are in partial state containers
 * which are the only source of truth -
 * the combined state is only a conclusion
 * over partial states.
 */
export class CombinedState {
  /**
   * Constructor *may* be provided with a function
   * that will combine all partial states.
   * Otherwise it'll assume that all partial states are object
   * and combine it by overriding properties
   * in result state by every next partial state object
   * @param {Function} composition
   */
  constructor(composition) {
    this.partialComponentListState = new State([]);
    this.mergedComponentsState = new State({});

    // merging
    this.partialComponentListState.subscribe({
      next: partialComponentList => {
        const nextSum = (composition || merge).apply(
          null,
          partialComponentList
        );
        this.mergedComponentsState.next(nextSum);
      },
      error: e => this.mergedComponentsState.error(e),
      complete: () => this.mergedComponentsState.complete()
    });
  }

  /**
   * Creates new partial state
   * and returns State class to represent it
   * and to allow that state part modification
   */
  spawn() {
    const first = {};
    let last = first;
    const partialComponentState = new State(last);
    partialComponentState.subscribe({
      next: nextPartialComponent => {
        if (nextPartialComponent === first) {
          return;
        }
        const current = last;
        last = nextPartialComponent;
        this.partialComponentListState.next(partialComponentList =>
          partialComponentList.indexOf(current) >= 0
            ? partialComponentList.map(partialComponent =>
                partialComponent === current
                  ? nextPartialComponent
                  : partialComponent
              )
            : partialComponentList.concat([nextPartialComponent])
        );
      },
      error: () => {
        this.partialComponentListState.next(partialComponentList =>
          partialComponentList.filter(
            partialComponent => partialComponent !== last
          )
        );
      },
      complete: () => {
        this.partialComponentListState.next(partialComponentList =>
          partialComponentList.filter(
            partialComponent => partialComponent !== last
          )
        );
      }
    });
    return partialComponentState;
  }

  /**
   * Returns a current combined state
   */
  get() {
    return this.mergedComponentsState.get();
  }

  /**
   * Register a listener
   * @param {IListener} listener
   * @returns {Function}
   */
  subscribe(listener) {
    return this.mergedComponentsState.subscribe(listener);
  }
}
