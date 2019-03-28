/** Generate DPR transformation if DPR information is available */
export function getDPRAttr() {
  return typeof window !== "undefined" && "devicePixelRatio" in window
    ? { dpr: window.devicePixelRatio }
    : {};
}
