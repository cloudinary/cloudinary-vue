import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDImage from "../../src/components/CLDImage.vue";
import * as Plugin from "../../src/plugin";

describe("CLD plugin", () => {
  it("works", done => {
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

    Vue.nextTick(() => {
      try {
        expect(wrapper.find("img").element.getAttribute("src")).toEqual(
          `http://res.cloudinary.com/demo2/image/upload/face_top`
        );
        done();
      } catch (e) {
        done(e);
      }
    });
    Vue.nextTick(() => {});
  });
});
