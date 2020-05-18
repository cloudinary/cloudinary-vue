import { shallowMount, mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";



function getImageProps(extraProps) {
  return Object.assign({
    cloudName: "demo",
    publicId: "face_top"
  }, extraProps)
}

describe("CldImage", () => {
  it("renders", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps()
    }).find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("Renders with an unknown accessibility mode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'_____'})
    }).find('img');
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("Renders with accessibility mode - Darkmode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'darkmode'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_tint:75:black/face_top');
  });

  it("Renders with accessibility mode - Brightmode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'brightmode'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_tint:50:white/face_top');
  });

  it("Renders with accessibility mode - Monochrome", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'monochrome'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_grayscale/face_top');
  });

  it("Renders with accessibility mode - Colorblind", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'colorblind'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_assist_colorblind/face_top');
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
      propsData: getImageProps({
        loading:'lazy',
      })
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
      propsData: getImageProps({
        loading:'lazy',
        placeholder: 'color'
      })
    });

    expect(wrap.find('img').attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_1,w_1/c_scale,h_$nh,w_$nw/face_top`
    );

    global.IntersectionObserver = nativeIntersectionObserver;
  });
});
