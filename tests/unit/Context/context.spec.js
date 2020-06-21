import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldContext from "../../../src/components/CldContext/CldContext.vue";
import CldImage from "../../../src/components/CldImage/CldImage.vue";
import CldTransformation from "../../../src/components/CldTransformation/CldTransformation";


const cloudinaryDomain = 'http://res.cloudinary.com';
function getImageSRC(wrapper) {
  return wrapper.find("img").attributes("src");
}

describe("Tests for CldContext", () => {
  it("Provides publicID to child cld-image", async () => {
    const wrapper = mount({
      template: `
        <cld-context cloudName="demo">
          <cld-image publicId="face_top"/>
        </cld-context>
      `,
      components: { CldContext, CldImage }
    });

    const expectedURL = `${cloudinaryDomain}/demo/image/upload/face_top`;
    expect(getImageSRC(wrapper)).toBe(expectedURL);
  });

  it ('Works correctly with a nested cld-transformation', async () => {
    const wrapper = mount(
      {
        template: `
          <cld-context cloudName="demo">
            <cld-image publicId="face_top">
              <cld-transformation crop="scale" width="100" height="100" />
            </cld-image>
          </cld-context>          
        `
      },
      {
        components: { CldTransformation, CldImage, CldContext }
      }
    );

    await Vue.nextTick();

    const expectedURL = `${cloudinaryDomain}/demo/image/upload/c_scale,h_100,w_100/face_top`;
    expect(getImageSRC(wrapper)).toBe(expectedURL);
  });

  it("Cascades down non-cloudinary attributes to the component to the HTML Div wrapper", () => {
    const wrapper = mount({
      template: `
        <cld-context cloudName="demo" aria-hidden="true">
          <cld-image publicId="face_top"></cld-image>
        </cld-context>
      `,
      components: { CldContext, CldImage }
    });

    // Non cloudinary, should exist on the wrapper
    expect(wrapper.find("div").attributes("aria-hidden")).toBe("true");

    // cloudinary-specific, should not exist on the wrapper
    expect(wrapper.find("div").attributes("cloudName")).toBe(undefined);
  });
});
