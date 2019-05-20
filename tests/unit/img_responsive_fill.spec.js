import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage.vue";

describe("CldImage::responsive=fill", () => {
  it("renders", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" responsive="fill" />
      `,
      components: { CldImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    wrapper.vm.$children[0].size = { width: 100, height: 100 };
    wrapper.vm.$children[0].markReadyCheck("size");
    await Vue.nextTick();

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_crop,dpr_1.0,h_100,w_100/face_top`
    );
  });
});
