function testWithMockedIntersectionObserver(cb) {
  let intersectCallback = () => {}; // will be populated later
  let nativeIntersectionObserver = global.IntersectionObserver;

  // Mock IntersectionObserver
  global.IntersectionObserver = class {
    constructor(cb) {
      // This is the callback that notifies when an intersection occurs
      // We'll store it to use it later
      intersectCallback = cb;
    }
    observe() {}
  };

  cb((...args) => {
    intersectCallback(...args);
  });

  // restore
  global.IntersectionObserver = nativeIntersectionObserver;
}

export default testWithMockedIntersectionObserver;
