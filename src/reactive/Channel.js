export class Channel {
  constructor() {
    this.subs = [];
  }

  next(value) {
    this.subs.forEach(
      sub =>
        sub && typeof sub === "object" && "next" in sub && sub.next
          ? sub.next(value)
          : null
    );
  }

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

  subscribe(listener) {
    this.subs.push(listener);
    return () => {
      this.subs = this.subs.filter(sub => sub !== listener);
    };
  }
}
