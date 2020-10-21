import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage";

describe("CldImage", () => {
  it("respects progressive prop", () => {
    const image = mount({
      template: `
          <cld-image
            cloudName="demo"
            publicId="face_top"
            progressive
          />
        `,
      components: { CldImage }
    }).find('img');
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/fl_progressive/face_top`
    );
  });
});
