import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDImage from "../../src/components/CLDImage.vue";
import * as Plugin from "../../src/plugin";

describe("CLD plugin", () => {
  it("works", async () => {
    Vue.use(Plugin, { cloudName: "demo2" });

    const wrapper = mount(
      {
        template: `
          <CLDImage publicId="face_top" />
        `
      },
      {
        components: { CLDImage }
      }
    );

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo2/image/upload/face_top`
    );
  });
});
