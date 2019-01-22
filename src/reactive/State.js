import { Channel } from "./Channel";

export class State {
  constructor(value) {
    this.lastValue = value;
    this.channel = new Channel();
  }

  next(value) {
    if (this.lastValue === value) {
      return;
    }
    const computedValue =
      typeof value === "function" ? value(this.lastValue) : value;
    this.lastValue = computedValue;
    return this.channel.next(computedValue);
  }
  error(error) {
    return this.channel.error(error);
  }
  complete() {
    return this.channel.complete();
  }

  subscribe(listener) {
    if (listener && typeof listener === "object" && listener.next) {
      listener.next(this.lastValue);
    }
    return this.channel.subscribe(listener);
  }

  get() {
    return this.lastValue;
  }
}
