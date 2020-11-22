import {mount} from "@vue/test-utils";
import { PLACEHOLDER_CLASS } from '../../../src/constants'
import CldImage from "../../../src/components/CldImage/CldImage";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";
import Vue from "vue";

describe("CldPlaceholder", () => {
  it("Should remove placeholder once CldImage is loaded", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder type="vectorize"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/e_vectorize:3:0.1,f_svg/face_top`
    );
  });
});