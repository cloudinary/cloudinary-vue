export function format(subject, instructions) {
  if (keysCount(instructions) === 0) {
    return subject;
  }
  return reduce(keys(subject), (result, key) =>
    key in instructions
      ? merge(result, kv(key, instructions[key](subject[key])))
      : merge(result, kv(key, subject[key]))
  );
}

export function normalize(subject) {
  return reduce(keys(subject), (result, key) =>
    subject[key] == undefined ? result : merge(result, kv(key, subject[key]))
  );
}

export function shallowEqual(subjectA, subjectB) {
  const allKeys = uniq(keys(subjectA), keys(subjectB));
  for (let i = 0; i < allKeys.length; i++) {
    if (subjectA[allKeys[i]] !== subjectB[allKeys[i]]) {
      return false;
    }
  }
  return true;
}

export function pick(subject, allowed) {
  return reduce(
    allowed,
    (result, key) =>
      key in subject ? merge(result, kv(key, subject[key])) : result,
    {}
  );
}

export function kv(k, v) {
  const result = {};
  result[k] = v;
  return result;
}

export function keysCount(subject) {
  return keys(subject).length;
}

export function uniq(subjectA, subjectB) {
  return keys(
    merge.apply(
      {},
      []
        .concat(subjectA.map(k => ({ [k]: true })))
        .concat(subjectB.map(k => ({ [k]: true })))
    )
  );
}

export function merge() {
  const args = Array.prototype.slice.call(arguments, 0);
  if (args.length === 0) {
    return {};
  }
  if (args.length === 1) {
    return args[0];
  }
  if (args.length === 2) {
    const result = {};
    forEach(keys(args[0]), k => {
      if (args[0][k] !== undefined) {
        result[k] = args[0][k];
      }
    });
    forEach(keys(args[1]), k => {
      if (args[1][k] !== undefined) {
        result[k] = args[1][k];
      }
    });
    return result;
  }
  return merge(args[0], merge.apply(null, args.slice(1)));
}

export function keys(subject) {
  const result = [];
  for (let k in subject) {
    if (Object.prototype.hasOwnProperty.call(subject, k)) {
      result.push(k);
    }
  }
  return result;
}

export function reduce(subject, folder, init) {
  let result = init;
  forEach(subject, (v, i) => {
    result = folder(result, v, i);
  });
  return result;
}

export function forEach(subject, actor) {
  const subjectCopy = subject ? [].concat(subject) : subject;
  const length = subjectCopy.length;
  for (let i = 0; i < length; i++) {
    actor(subjectCopy[i], i);
  }
}
