import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage.vue";

describe("CldImage::responsive", () => {
  it("renders", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" responsive />
      `,
      components: { CldImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    wrapper.vm.$children[0].size = { width: 100, height: 100 };

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,dpr_1.0,w_100/face_top`
    );
  });
});
