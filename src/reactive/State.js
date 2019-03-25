import { Channel } from "./Channel";
/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * State broadcasting entity.
 * Like Channel, allows registering for updates,
 * but subscription is also notified immediately
 * of a last message passed through the entity
 */
export class State {
  constructor(value) {
    this.lastValue = value;
    this.channel = new Channel();
  }

  /**
   * Push a new state to all active listeners
   * @param {Function|*} state
   * @returns {undefined}
   */
  next(value) {
    if (this.lastValue === value) {
      return;
    }
    const computedValue =
      typeof value === "function" ? value(this.lastValue) : value;
    this.lastValue = computedValue;
    return this.channel.next(computedValue);
  }

  /**
   * Push an error signal to all active listeners
   * @param {Error} error
   * @returns {undefined}
   */
  error(error) {
    return this.channel.error(error);
  }

  /**
   * Push an end signal to all active listeners
   * @returns {undefined}
   */
  complete() {
    return this.channel.complete();
  }

  /**
   * Register a listener
   * @param {IListener} listener
   * @returns {Function}
   */
  subscribe(listener) {
    if (listener && typeof listener === "object" && listener.next) {
      listener.next(this.lastValue);
    }
    return this.channel.subscribe(listener);
  }

  /**
   * Returns a last pushed state
   */
  get() {
    return this.lastValue;
  }
}
