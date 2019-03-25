/** Generate DPR transformation if DPR information is available */
export function getDPRAttr() {
  return "devicePixelRatio" in window ? { dpr: window.devicePixelRatio } : {};
}
