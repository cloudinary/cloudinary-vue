import Vue from "vue";
import {mount} from "@vue/test-utils";
import { IMAGE_CLASSES, PLACEHOLDER_CLASS } from '../../../src/constants'
import CldImage from "../../../src/components/CldImage/CldImage.vue";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";

describe("CldPlaceholder", () => {
  it('should pass down non cloudinary attributes', async () => {
    const ALT_TEXT = 'Test Alt';

    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top" alt="${ALT_TEXT}">
            <cld-placeholder />
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldPlaceholder.attributes('alt')).toBe(ALT_TEXT);
  });

  it("Placeholder should have default type blur", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder />
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_blur:2000,f_auto,q_1/face_top`
    );
  });

  it("Should remove placeholder once CldImage is loaded", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder type="blur"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldImageEl = wrapper.find(`.${IMAGE_CLASSES.DEFAULT}`);
    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldImageEl.exists()).toBe(true)
    expect(cldImageEl.classes()).toContain(IMAGE_CLASSES.LOADING)
    expect(cldImageEl.attributes('style')).toBe('opacity: 0; position: absolute;');

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_blur:2000,f_auto,q_1/face_top`
    );

    cldImageEl.trigger('load');
    await Vue.nextTick()

    expect(wrapper.find(`.${PLACEHOLDER_CLASS}`).exists()).toBe(false)
    expect(cldImageEl.classes()).toContain(IMAGE_CLASSES.LOADED)
    expect(cldImageEl.attributes('style')).toBe("");
  });
});
