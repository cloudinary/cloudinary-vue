export const debounce = (fn, timeout) => {
  let forceUpdateTimeoutToken = null;
  return (...args) => {
    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(() => fn(...args), timeout)
  }
}
