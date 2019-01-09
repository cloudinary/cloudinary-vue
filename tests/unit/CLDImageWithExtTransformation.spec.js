import Vue from "vue";
import { shallowMount, mount } from "@vue/test-utils";
import CLDContext from "../../src/components/CLDContext.vue";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDImage with ext transformation", () => {
  it("renders", done => {
    const wrapper = mount(
      {
        template: `
          <div class="cld-image-with-ext-transformation">
            <CLDContext cloudName="demo">
              <CLDImage publicId="face_top"/>
            </CLDContext>
          </div>`
      },
      {
        components: { CLDContext, CLDImage },
        propsData: {}
      }
    );
    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
      done();
    });
  });
});
