import { State } from "./State";
import { merge } from "./utils";

export class CompoundState {
  constructor() {
    this.chunkedState = new State([]);
    this.solidState = new State({});
    this.chunkedState.subscribe({
      next: v => {
        const nextSum = merge.apply(null, [{}].concat(v));
        this.solidState.next(nextSum);
      },
      error: e => this.solidState.error(e),
      complete: () => this.solidState.complete()
    });
  }

  spawn() {
    let last = {};
    this.chunkedState.next(p => p.concat([last]));
    const newSpawn = new State(last);
    newSpawn.subscribe({
      next: v => {
        this.chunkedState.next(currentState =>
          currentState.map(chunk => (chunk === last ? (last = v) : chunk))
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

  get() {
    return this.solidState.get();
  }

  subscribe(listener) {
    return this.solidState.subscribe(listener);
  }
}
