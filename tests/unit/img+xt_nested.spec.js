import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldTransformation from "../../src/components/CldTransformation.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldImage with CldTransformation ", () => {
  it("nested", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top">
          <cld-transformation crop="scale" width="100">
            <cld-transformation effect="sepia" />
          </cld-transformation>
        </cld-image>
      `,
      components: { CldTransformation, CldImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await Vue.nextTick();

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,w_100/e_sepia/face_top`
    );
  });
});
