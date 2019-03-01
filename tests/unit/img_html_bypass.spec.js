import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage.vue";

describe("CldImage", () => {
  it("bypasses non-cloudinary attributes", () => {
    const image = mount(
      {
        template: `
          <cld-image
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
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
    expect(image.attributes("aria-hidden")).toBe("true");
    expect(image.attributes("cloudName")).toBe(undefined);
  });
});
