import Vue from "vue";
import {mount} from "@vue/test-utils";
import { IMAGE_CLASSES } from '../../../src/constants'
import CldTransformation from "../../../src/components/CldTransformation";
import CldImage from "../../../src/components/CldImage";
import CldPlaceholder from "../../../src/components/CldPlaceholder";

describe("CldPlaceholder", () => {
  it("Should remove placeholder once CldImage is loaded", async () => {
    let wrapper = mount(
      {
        template: `
          <cld-image cloudName="demo" publicId="face_top" width="500" height="200">
            <cld-transformation crop="scale" width="100" height="100" />
            <cld-transformation effect="sepia" />
            <cld-transformation effect="blur" />
            <cld-placeholder type="pixelate"></cld-placeholder>
          </cld-image>
        `
      },
      {
        components: {CldTransformation, CldImage, CldPlaceholder}
      }
    );

    expect(wrapper.exists()).toBe(true)
    await Vue.nextTick()

    let cldImageEl = wrapper.find(`.${IMAGE_CLASSES.DEFAULT}`);
    let cldPlaceholderEl = wrapper.find('.cld-placeholder');

    expect(cldImageEl.exists()).toBe(true)
    expect(cldImageEl.classes()).toContain(IMAGE_CLASSES.LOADING)
    expect(cldImageEl.attributes('style')).toBe('opacity: 0; position: absolute;');

    expect(cldPlaceholderEl.exists()).toBe(true)
    expect(cldPlaceholderEl.attributes('src')).toBe('http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/e_pixelate,f_auto,q_1/face_top')
    
    cldImageEl.trigger('load');
    await Vue.nextTick()

    expect(wrapper.find('.cld-placeholder').exists()).toBe(false)
    expect(cldImageEl.classes()).toContain(IMAGE_CLASSES.LOADED)
    expect(cldImageEl.attributes('style')).toBe("");

    expect(cldImageEl.attributes('src')).toBe('http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/face_top')
  });
});
