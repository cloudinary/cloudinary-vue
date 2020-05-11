import { shallowMount, mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";

describe("CldImage", () => {
  it("renders", () => {
    const image = shallowMount(CldImage, {
      propsData: {
        cloudName: "demo",
        publicId: "face_top"
      }
    }).find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it('Loads an image with lazyload', () => {
    let intersectCallback = null;
    let nativeIntersectionObserver = global.IntersectionObserver;

    // Mock InterscetionObserver
    global.IntersectionObserver = class {
      constructor(cb) {
        // This is the callback the notifieis when an intersection occures
        // We'll store it to use it later
        intersectCallback = cb;
      }
      observe() {}
    };

    // Create an instance
    const wrap = mount(CldImage, {
      propsData: {
        loading:'lazy',
        cloudName: "demo",
        publicId: "face_top"
      }
    });

    // Since we're lazy loading, we expect not to be visible
    expect(wrap.vm.visible).toBe(false);

    // Mock an intersection call, this should turn the component visible
    intersectCallback([{
      target: wrap.element,
      isIntersecting: true
    }]);

    // We should now be visible
    expect(wrap.vm.visible).toBe(true);

    // restore
    global.IntersectionObserver = nativeIntersectionObserver;
  });

  it ('Lazyloads with a placeholder', () => {
    let nativeIntersectionObserver = global.IntersectionObserver;
    let intersectCallback = null;

    // Mock InterscetionObserver
    global.IntersectionObserver = class {
      constructor(cb) {
        // This is the callback the notifieis when an intersection occures
        // We'll store it to use it later
        intersectCallback = cb;
      }
      observe() {}
    };

    // Mock InterscetionObserver
    global.IntersectionObserver = class {
      constructor(cb) {
        // This is the callback the notifieis when an intersection occures
        // We'll store it to use it later
        intersectCallback = cb;
      }
      observe() {}
    };

    const wrap = mount(CldImage, {
      propsData: {
        loading:'lazy',
        cloudName: "demo",
        publicId: "face_top",
        placeholder:"color"
      }
    });

    expect(wrap.find('img').attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_1,w_1/c_scale,h_$nh,w_$nw/face_top`
    );

    global.IntersectionObserver = nativeIntersectionObserver;
  });
});
