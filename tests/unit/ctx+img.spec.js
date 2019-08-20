import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldContext", () => {
  it("works single-layered", async () => {
    const wrapper = mount({
      template: `
        <cld-context cloudName="demo" effect="blur">
          <cld-image publicId="face_top" crop="scale" width="100" height="100"/>
        </cld-context>
      `,
      components: { CldContext, CldImage }
    });

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_blur/c_scale,h_100,w_100/face_top`
    );
  });
});
