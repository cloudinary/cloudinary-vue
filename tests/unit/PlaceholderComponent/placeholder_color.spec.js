import {mount} from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";
import { PLACEHOLDER_CLASS } from '../../../src/constants'
import Vue from "vue";

describe("CldPlaceholder", () => {
  it("Should add a color placeholder", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder type="predominant-color"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/$currWidth_w,$currHeight_h/ar_1,b_auto,c_pad,w_iw_div_2/c_crop,g_north_east,h_10,w_10/c_fill,h_$currHeight,w_$currWidth/f_auto,q_auto/face_top`
    );
  });

  it("Should have a stretched single pixel when possible", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top" width="100" height="200">
            <cld-placeholder type="predominant-color"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldImage, CldPlaceholder}
      }
    );

    let cldPlaceholder = wrapper.find(`.${PLACEHOLDER_CLASS}`);

    expect(cldPlaceholder.attributes().width).toBe('100');
    expect(cldPlaceholder.attributes().height).toBe('200');
    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/ar_1,b_auto,c_pad,w_iw_div_2/c_crop,g_north_east,h_1,w_1/f_auto,q_auto/face_top`
    );
  });
});

