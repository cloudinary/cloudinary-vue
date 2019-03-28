import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage";

describe("CldImage", () => {
  describe("handles placeholder attribute", () => {
    it("pixelate", async () => {
      const image = mount({
        template: `
          <cld-image
            cloudName="demo"
            publicId="face_top"
            lazy
            placeholder="pixelate"
          />
        `,
        components: { CldImage }
      });
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/e_pixelate:100/face_top`
      );
      await new Promise(r => Vue.nextTick(r));
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });
  });
});
