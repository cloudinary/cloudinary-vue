import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDTransformation from "../../src/components/CLDTransformation.vue";
import CLDImage from "../../src/components/CLDImage.vue";
import Sepia from "./Sepia.vue";

describe("CLDImage with CLDTransformation ", () => {
  it("renders", async () => {
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

  it(" nested", async () => {
    const wrapper = mount({
      template: `
          <CLDImage cloudName="demo" publicId="face_top">
            <CLDTransformation crop="scale" width="100">
              <CLDTransformation effect="sepia" />
            </CLDTransformation>
          </CLDImage>
        `,
      components: { CLDTransformation, CLDImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,w_100/e_sepia/face_top`
    );
  });

  it("in another component", async () => {
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

  it("should allow chained transformations", async () => {
    const wrapper = mount({
      template: `
        <CLDImage publicId="sample" cloudName="demo">
          <CLDTransformation width="100" crop="scale" />
          <CLDTransformation width="200" crop="pad">
            <CLDTransformation angle="30" />
          </CLDTransformation>
        </CLDImage>
      `,
      components: { CLDTransformation, CLDImage }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      "http://res.cloudinary.com/demo/image/upload/c_scale,w_100/c_pad,w_200/a_30/sample"
    );
  });
});
