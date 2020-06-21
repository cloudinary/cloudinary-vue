import Vue from 'vue';
import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage.vue";

describe("CldImage::responsive", () => {
  it("boolean true", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" :responsive="responsive" />
      `,
      components: { CldImage },
      data() {
        return { responsive: true };
      }
    });
    const image = wrapper.find('img');

    expect(image.attributes("src")).toEqual(undefined);

    wrapper.vm.$children[0].size = { width: 100, height: 100 };
    await Vue.nextTick();

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/c_scale,dpr_1.0,w_100/face_top`
    );
  });

  it("boolean false", async () => {
    const wrapper = mount({
      template: `
        <cld-image cloudName="demo" publicId="face_top" :responsive="responsive" />
      `,
      components: { CldImage },
      data() {
        return { responsive: false };
      }
    }).find('img');

    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
});
