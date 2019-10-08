import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldTransformation from "../../src/components/CldTransformation/CldTransformation.vue";
import CldImage from "../../src/components/CldImage/CldImage.vue";
import CldContext from "../../src/components/CldContext/CldContext.vue";

describe("CldImage", () => {
  it("with CldTransformation and CldContext", async () => {
    const wrapper = mount(
      {
        template: `
          <cld-context cloudName="demo">
            <cld-image publicId="face_top">
              <cld-transformation crop="scale" width="100" height="100" />
              <cld-transformation effect="sepia" />
              <cld-transformation effect="blur" />
            </cld-image>
          </cld-context>          
        `
      },
      {
        components: { CldTransformation, CldImage, CldContext }
      }
    );

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/face_top`
    );
  });
});
