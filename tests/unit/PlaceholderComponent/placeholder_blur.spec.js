import Vue from "vue";
import {mount} from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";

describe("CldPlaceholder", () => {
  it('should pass down non cloudinary attributes', async () => {
    const ALT_TEXT = 'Test Alt';

    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top" alt="${ALT_TEXT}">
            <cld-placeholder></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.findAll("img").at(1);
    await Vue.nextTick();

    expect(cldPlaceholder.attributes('alt')).toBe(ALT_TEXT);
  });

  it("Placeholder should have default type blur", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.findAll("img").at(1);

    await Vue.nextTick();

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

    let cldPlaceholder = wrapper.findAll("img").at(1);

    await Vue.nextTick();
    cldPlaceholder.setProps({
      type: 'bar'
    });

    await Vue.nextTick();

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_blur:2000,f_auto,q_1/face_top`
    );
  });
});
