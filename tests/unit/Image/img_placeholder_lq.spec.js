import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";

describe("CldImage", () => {
  describe("handles placeholder attribute", () => {
    it("LQ", async () => {
      const image = mount({
        template: `
          <cld-image
            cloudName="demo"
            publicId="face_top"
            lazy
            placeholder="lqip"
          />
        `,
        components: { CldImage }
      }).find('img');
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_auto,w_20/c_scale,h_$nh,w_$nw/face_top`
      );
      await new Promise(r => Vue.nextTick(r));
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });
  });
});
