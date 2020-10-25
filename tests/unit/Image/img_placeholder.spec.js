import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldImage from "../../../src/components/CldImage/CldImage";

describe('CldImage::placeholder', () => {
  it("pixelate", async () => {
    const wrapper = mount({
      template: `
        <cld-image
          cloudName="demo"
          publicId="face_top"
          lazy
          placeholder="pixelate"
        />
      `,
      components: { CldImage }
    });

    const placeholder = wrapper.find('.cld-placeholder')

    expect(placeholder.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_pixelate,f_auto,q_1/face_top`
    );

    await new Promise(r => Vue.nextTick(r));
    const image = wrapper.find('.cld-image')

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("LQ", async () => {
    const wrapper = mount({
      template: `
        <cld-image
          cloudName="demo"
          publicId="face_top"
          lazy
          placeholder="lqip"
        />
      `,
      components: { CldImage }
    });

    const placeholder = wrapper.find('.cld-placeholder')

    expect(placeholder.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_auto,w_20/c_scale,h_$nh,w_$nw/face_top`
    );
    await new Promise(r => Vue.nextTick(r));
    const image = wrapper.find('.cld-image')

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("color", async () => {
    const wrapper = mount({
      template: `
        <cld-image
          cloudName="demo"
          publicId="face_top"
          placeholder="color"
        />
      `,
      components: { CldImage }
    });

    const placeholder = wrapper.find('.cld-placeholder')
    expect(placeholder.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_1,w_1/c_scale,h_$nh,w_$nw/face_top`
    );

    await Vue.nextTick();
    const image = wrapper.find('img');

    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
}) 