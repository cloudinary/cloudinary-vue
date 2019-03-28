import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext";
import CldImage from "../../src/components/CldImage";

describe("CldContext", () => {
  it("works single-layered", async () => {
    const wrapper = mount({
      template: `
        <cld-context cloudName="demo">
          <cld-image publicId="face_top"/>
        </cld-context>
      `,
      components: { CldContext, CldImage }
    });

    await Vue.nextTick();

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
});
