import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDTransformation from "../../src/components/CLDTransformation.vue";
import CLDImage from "../../src/components/CLDImage.vue";
import Sepia from "./Sepia.vue";

describe("CLDImage", () => {
  it("with CLDTransformation", done => {
    const wrapper = mount(
      {
        template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <CLDTransformation effect="sepia:20" />
          </CLDImage>
        `
      },
      {
        components: { CLDTransformation, CLDImage },
        propsData: {}
      }
    );

    expect(wrapper.contains("img")).toBe(false);

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/e_sepia:20/face_top`
      );
      done();
    });
  });

  it("with CLDTransformation nested", done => {
    const wrapper = mount(
      {
        template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <CLDTransformation crop="scale">
              <CLDTransformation width="100" />
            </CLDTransformation>
          </CLDImage>
        `
      },
      {
        components: { CLDTransformation, CLDImage },
        propsData: {}
      }
    );

    expect(wrapper.contains("img")).toBe(false);

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/c_scale,w_100/face_top`
      );
      done();
    });
  });

  it("with CLDTransformation in another component", done => {
    const wrapper = mount(
      {
        template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <Sepia />
          </CLDImage>
        `
      },
      {
        components: { Sepia, CLDImage },
        propsData: {}
      }
    );

    expect(wrapper.contains("img")).toBe(false);

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/e_sepia:20/face_top`
      );
      done();
    });
  });
});
