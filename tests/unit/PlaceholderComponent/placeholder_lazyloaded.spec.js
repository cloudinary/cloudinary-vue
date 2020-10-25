import {mount} from "@vue/test-utils";
import { PLACEHOLDER_CLASS, IMAGE_CLASSES } from '../../../src/constants'
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

    await Vue.nextTick()
    let cldImageEl = wrapper.find(`.${IMAGE_CLASSES.DEFAULT}`);
    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldImageEl.attributes("src")).toBe('');
    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_vectorize:3:0.1,f_svg/face_top`
    );

    // fake scroll
    intersectCallback([{
      target: wrapper.element,
      isIntersecting: true
    }]);

    await Vue.nextTick();

    // expect cloudinary image to be populated
    expect(cldImageEl.attributes().src).toBe('http://res.cloudinary.com/demo/image/upload/face_top');

    // fake image load
    cldImageEl.trigger('load');
    await Vue.nextTick();

    expect(wrapper.find('.cld-placeholder').exists()).toBe(false)
    expect(cldImageEl.classes()).toContain(IMAGE_CLASSES.LOADED)
    expect(cldImageEl.attributes('style')).toBe("");

    global.IntersectionObserver = nativeIntersectionObserver;
  });
});