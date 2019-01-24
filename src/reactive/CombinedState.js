import { State } from "./State";
import { merge } from "../utils";

export class CombinedState {
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

  get() {
    return this.solidState.get();
  }

  subscribe(listener) {
    return this.solidState.subscribe(listener);
  }
}
