import {mount} from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";
import Vue from "vue";

describe("CldPlaceholder", () => {
  it("Should remove placeholder once CldImage is loaded", async () => {
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

    let cldPlaceholder = wrapper.findAll("img").at(1);

    await Vue.nextTick();

    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/$currWidth_w,$currHeight_h/ar_1,b_auto,c_pad,w_iw_div_2/c_crop,g_north_east,h_10,w_10/c_fill,h_$currHeight,w_$currWidth/f_auto,q_auto/face_top`
    );
  });
});

