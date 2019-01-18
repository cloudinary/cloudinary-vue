import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDTransformation from "../../src/components/CLDTransformation.vue";
import CLDImage from "../../src/components/CLDImage.vue";
import Sepia from "./Sepia.vue";

describe("CLDImage", () => {
  it("with CLDTransformation", async () => {
    const wrapper = mount(
      {
        template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <CLDTransformation effect="sepia:20" />
          </CLDImage>
        `
      },
      {
        components: { CLDTransformation, CLDImage }
      }
    );

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia:20/face_top`
    );
  });

  it("with CLDTransformation nested", async () => {
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
        components: { CLDTransformation, CLDImage }
      }
    );

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,w_100/face_top`
    );
  });

  it("with CLDTransformation in another component", async () => {
    const wrapper = mount(
      {
        template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <Sepia />
          </CLDImage>
        `
      },
      {
        components: { Sepia, CLDImage }
      }
    );

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia:20/face_top`
    );
  });
});
