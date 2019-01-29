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
    this.subs = [];
  }

  /**
   * Push a message to all active listeners
   * @param {*} message
   * @returns {undefined}
   */
  next(value) {
    this.subs.forEach(
      sub =>
        sub && typeof sub === "object" && "next" in sub && sub.next
          ? sub.next(value)
          : null
    );
  }

  /**
   * Push an error signal to all active listeners
   * @param {Error} error
   * @returns {undefined}
   */
  error(error) {
    this.subs
      .splice(0)
      .forEach(
        sub =>
          sub && typeof sub === "object" && "error" in sub && sub.error
            ? sub.error(error)
            : null
      );
  }

  /**
   * Push an end signal to all active listeners
   * @returns {undefined}
   */
  complete() {
    this.subs
      .splice(0)
      .forEach(
        sub =>
          sub && typeof sub === "object" && "complete" in sub && sub.complete
            ? sub.complete()
            : null
      );
  }

  /**
   * Register a listener
   * @param {IListener} listener
   * @returns {Function}
   */
  subscribe(listener) {
    this.subs.push(listener);
    return () => {
      this.subs = this.subs.filter(sub => sub !== listener);
    };
  }
}
