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
    this.chunkedState = new State([]);
    this.solidState = new State({});
    this.chunkedState.subscribe({
      next: v => {
        const nextSum = (composition || merge).apply(null, v ? v : []);
        this.solidState.next(nextSum);
      },
      error: e => this.solidState.error(e),
      complete: () => this.solidState.complete()
    });
  }

  /**
   * Creates new partial state
   * and returns State class to represent it
   * and to allow that state part modification
   */
  spawn() {
    let last = {};
    let didStatePushedEmpty = false;
    const newSpawn = new State(last);
    newSpawn.subscribe({
      next: v => {
        if (!didStatePushedEmpty) {
          didStatePushedEmpty = true;
          return;
        }
        this.chunkedState.next(currentState =>
          currentState.indexOf(last) >= 0
            ? currentState.map(chunk => (chunk === last ? (last = v) : chunk))
            : currentState.concat([(last = v)])
        );
      },
      error: () => {
        this.chunkedState.next(p => p.filter(chunk => chunk !== last));
      },
      complete: () => {
        this.chunkedState.next(p => p.filter(chunk => chunk !== last));
      }
    });
    return newSpawn;
  }

  /**
   * Returns a current combined state
   */
  get() {
    return this.solidState.get();
  }

  /**
   * Register a listener
   * @param {IListener} listener
   * @returns {Function}
   */
  subscribe(listener) {
    return this.solidState.subscribe(listener);
  }
}
