/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * Message passing entity.
 * Allows registering listeners that are then triggered with a message, error or end signal.
 */
export class Channel {
  constructor() {
    this.listeners = [];
  }

  /**
   * Push a message to all active listeners
   * @param {*} message
   * @returns {undefined}
   */
  next(value) {
    this.listeners.forEach(sub =>
      "next" in sub && sub.next ? sub.next(value) : null
    );
  }

  /**
   * Push an error signal to all active listeners.
   * Completes all subscriptions.
   * @param {Error} error
   * @returns {undefined}
   */
  error(error) {
    this.listeners
      .splice(0)
      .forEach(sub => ("error" in sub && sub.error ? sub.error(error) : null));
  }

  /**
   * Push an end signal to all active listeners
   * @returns {undefined}
   */
  complete() {
    this.listeners
      .splice(0)
      .forEach(sub =>
        "complete" in sub && sub.complete ? sub.complete() : null
      );
  }

  /**
   * Register a listener
   * @param {IListener} listener
   * @returns {Function}
   */
  subscribe(listener) {
    if (listener && typeof listener === "object") {
      this.listeners.push(listener);
    }
    return () => {
      const pos = this.listeners.indexOf(listener);
      if (pos >= 0) {
        this.listeners.splice(pos, 1);
      }
    };
  }
}
