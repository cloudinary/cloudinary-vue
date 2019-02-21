import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldTransformation from "../../src/components/CldTransformation.vue";
import CldImage from "../../src/components/CldImage.vue";
import Sepia from "./Sepia.vue";

describe("CldImage with CldTransformation ", () => {
  it("renders", async () => {
    const wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-transformation effect="sepia:20" />
          </cld-image>
        `
      },
      {
        components: { CldTransformation, CldImage }
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

  it("nested", async () => {
    const wrapper = mount({
      template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-transformation crop="scale" width="100">
              <cld-transformation effect="sepia" />
            </cld-transformation>
          </cld-image>
        `,
      components: { CldTransformation, CldImage }
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
          <cld-image cloudName="demo" publicId="face_top">
            <Sepia />
          </cld-image>
        `
      },
      {
        components: { Sepia, CldImage }
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
        <cld-image publicId="sample" cloudName="demo">
          <cld-transformation width="100" crop="scale" />
          <cld-transformation width="200" crop="pad">
            <cld-transformation angle="30" />
          </cld-transformation>
        </cld-image>
      `,
      components: { CldTransformation, CldImage }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      "http://res.cloudinary.com/demo/image/upload/c_scale,w_100/c_pad,w_200/a_30/sample"
    );
  });
});
