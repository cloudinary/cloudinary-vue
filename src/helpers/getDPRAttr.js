export function getDPRAttr() {
  return "devicePixelRatio" in window ? { dpr: window.devicePixelRatio } : {};
}
