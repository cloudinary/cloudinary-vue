import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage.vue";
import Sepia from "./Sepia.vue";

describe("CldImage with CldTransformation ", () => {
  it("in another component", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top">
          <Sepia />
        </cld-image>
      `,
      components: { Sepia, CldImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await Vue.nextTick();

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia:20/face_top`
    );
  });
});
