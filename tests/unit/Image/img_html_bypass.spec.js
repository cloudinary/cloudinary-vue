import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";

describe("CldImage", () => {
  it("bypasses non-cloudinary attributes", () => {
    const wrapper = mount(
      {
        template: `
          <cld-image
            class="x"
            cloudName="demo"
            publicId="face_top"
            aria-hidden="true"
          />
        `
      },
      {
        components: { CldImage }
      }
    );
    const image = wrapper.find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
    expect(new Set(wrapper.classes())).toEqual(new Set(["cld-image", "x"]));
    expect(image.attributes("aria-hidden")).toBe("true");
    expect(image.attributes("cloudName")).toBe(undefined);
  });

  it("bypasses width", () => {
    const image = mount(
      {
        template: `
          <cld-image
            cloudName="demo"
            publicId="face_top"
            width="100"
          />
        `
      },
      {
        components: { CldImage }
      }
    ).find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
    expect(image.attributes("width")).toBe("100");
  });
});
