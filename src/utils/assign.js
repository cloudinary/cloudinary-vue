export function assign(...args) {
  if (args.length === 0) {
    return undefined;
  }

  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 2) {
    const subject = args[0];
    const mod = args[1];
    Object.keys(mod).forEach(k => {
      subject[k] = mod[k];
    });
    return subject;
  }

  return assign.apply(this, [assign(args[0], args[1])].concat(args.slice(2)));
}
