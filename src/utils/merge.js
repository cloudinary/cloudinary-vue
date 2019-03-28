export function merge(...args) {
  if (args.length === 0) {
    return {};
  }
  if (args.length === 1) {
    return args[0];
  }
  if (args.length === 2) {
    const result = {};
    if (args[0] != null) {
      Object.keys(args[0]).forEach(k => {
        if (args[0][k] !== undefined) {
          result[k] = args[0][k];
        }
      });
    }
    if (args[1] != null) {
      Object.keys(args[1]).forEach(k => {
        if (args[1][k] !== undefined) {
          result[k] = args[1][k];
        }
      });
    }
    return result;
  }
  return merge(args[0], merge(...args.slice(1)));
}
