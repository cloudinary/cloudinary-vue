import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDTransformation from "../../src/components/CLDTransformation.vue";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDImage with CLDTransformation", () => {
  it("renders", done => {
    const wrapper = mount(
      {
        template: `
          <div class="test">
            <CLDImage cloudName="demo" publicId="face_top">
              <CLDTransformation crop="scale" />
              <CLDTransformation width="100" />
              <CLDTransformation height="80" />
            </CLDImage>
          </div>`
      },
      {
        components: { CLDTransformation, CLDImage },
        propsData: {}
      }
    );

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(null);

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/c_scale,h_80,w_100/face_top`
      );
      done();
    });
  });
});
