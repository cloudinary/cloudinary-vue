import { kv } from "../utils";

const defaultNaiveBreakpoints = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  1600,
  1700,
  1800,
  1900,
  2000
];

export const hundredsIterator =
  "Symbol" in window && Symbol.iterator
    ? kv(Symbol.iterator, () => {
        let last = 0;
        return {
          next: () => {
            last += 100;
            return { value: last - 100, done: false };
          },
          throw: () => ({ value: null, done: true }),
          return: () => ({ value: null, done: true })
        };
      })
    : defaultNaiveBreakpoints;
