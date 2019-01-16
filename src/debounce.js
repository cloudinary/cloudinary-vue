export function debounce(fn, timeout) {
  let forceUpdateTimeoutToken = null;
  return function() {
    const args = Array.prototype.slice.call(arguments, 0);
    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}
