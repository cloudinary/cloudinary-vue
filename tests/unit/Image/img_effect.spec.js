import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";

describe("CldImage", () => {
  it("allows transformation as props", () => {
    const wrapper = mount({
      template: `
        <cld-image 
          cloudName="demo"
          publicId="face_top"
          effect="sepia"
        />
      `,
      components: { CldImage }
    });
    const image = wrapper.find('img');

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia/face_top`
    );
  });
});
