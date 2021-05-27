export function getDevicePixelRatio(roundDpr) {
  roundDpr = roundDpr == null ? true : roundDpr;
  let dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;
  if (roundDpr) {
    dpr = Math.ceil(dpr);
  }
  if (dpr <= 0 || dpr === (0/0)) {
    dpr = 1;
  }
  let dprString = dpr.toString();
  if (dprString.match(/^\d+$/)) {
    dprString += '.0';
  }
  return dprString;
}
