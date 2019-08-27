import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";

describe("CldImage::responsive=width", () => {
  it("renders", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" responsive="width" />
      `,
      components: { CldImage }
    });
    const image = wrapper.find('img');

    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(undefined);

    wrapper.vm.$children[0].size = { width: 100, height: 100 };

    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,dpr_1.0,w_100/face_top`
    );
  });
});
