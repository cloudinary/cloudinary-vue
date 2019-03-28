export function debounce(fn, timeout) {
  let forceUpdateTimeoutToken = null;
  return function debounced(...args) {
    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}
