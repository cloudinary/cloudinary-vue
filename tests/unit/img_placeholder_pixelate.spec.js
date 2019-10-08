import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";

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
      }).find("img");
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/e_pixelate:100/face_top`
      );

      await Vue.nextTick();
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });
  });
});
