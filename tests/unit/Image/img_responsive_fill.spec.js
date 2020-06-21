import Vue from 'vue';
import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";

describe("CldImage::responsive=fill", async () => {
  it("renders", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" responsive="fill" />
      `,
      components: { CldImage }
    });

    const image = wrapper.find('img');

    expect(image.attributes("src")).toEqual(undefined);

    wrapper.vm.$children[0].size = { width: 100, height: 100 };

    await Vue.nextTick();

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_fill,dpr_1.0,h_100,w_100/face_top`
    );
  });
});
