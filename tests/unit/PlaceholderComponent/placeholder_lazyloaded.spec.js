import {mount} from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";
import Vue from "vue";

describe("CldPlaceholder", () => {
  it("Should remove placeholder once CldImage is loaded", async () => {
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

    let wrapper = mount(
      {
        template: `
          <cld-image loading="lazy" cloudName="demo" publicId="face_top">
            <cld-placeholder type="vectorize"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldImageVM = wrapper.vm.$children[0];
    let cldImage = wrapper.findAll("img").at(0);
    let cldPlaceholder = wrapper.findAll("img").at(1);

    await Vue.nextTick();

    expect(cldImage.attributes().src).toBe('');
    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_vectorize:3:0.1,f_svg/face_top`
    );

    // fake scroll
    intersectCallback([{
      target: wrapper.element,
      isIntersecting: true
    }]);

    // expect cloudinary image to be populated
    expect(cldImage.attributes().src).toBe('http://res.cloudinary.com/demo/image/upload/face_top');

    // fake image load
    cldImageVM.onImageLoad();

    // expect placeholder to be gone
    expect(wrapper.findAll("img").length).toBe(1);
    global.IntersectionObserver = nativeIntersectionObserver;
  });
});
