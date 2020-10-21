import Vue from 'vue';
import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage";

describe("CldImage::responsive", () => {
  it("as flag", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" responsive />
      `,
      components: { CldImage }
    });

    const image = wrapper.find('img');

    expect(image.attributes("src")).toEqual('');

    wrapper.vm.$children[0].size = { width: 100, height: 100 };

    await Vue.nextTick();

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,dpr_1.0,w_100/face_top`
    );
  });
});
