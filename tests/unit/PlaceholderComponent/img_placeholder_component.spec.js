import Vue from "vue";
import {mount} from "@vue/test-utils";
import CldTransformation from "../../../src/components/CldTransformation/CldTransformation.vue";
import CldImage from "../../../src/components/CldImage/CldImage.vue";
import CldContext from "../../../src/components/CldContext/CldContext.vue";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";

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
        components: {CldTransformation, CldImage, CldContext, CldPlaceholder}
      }
    );

    let cldImageEl = wrapper.findAll("img").at(0).element;
    let cldImageVM = wrapper.vm.$children[0];
    let CldImageWrapper = wrapper.findAll("img").at(0);
    let renderedImages = wrapper.findAll("img");
    let cldPlaceholder = wrapper.findAll("img").at(1);

    // Step 1 - Image should be visible as the placeholder did not have time to register yet
    expect(cldImageEl.style.opacity).toBe('');
    expect(cldImageEl.style.position).toBe('');

    await Vue.nextTick();

    // Step 2 - Image should be opaque
    expect(cldImageEl.style.opacity).toBe('0');
    expect(cldImageEl.style.position).toBe('absolute');

    // Step 3 - Before onload, we expect both the image and the placeholder to exist
    expect(renderedImages.length).toBe(2);

    // Step 3.1 - Valid image src - Img component exists with transformation
    expect(CldImageWrapper.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/face_top`
    );

    // Step 3.2 - Valid placeholder src - Placeholder component exists with placeholder-transformation
    expect(cldPlaceholder.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/e_pixelate,f_auto,q_1/face_top`
    );

    // load the image (as if time has passed)
    cldImageVM.onImageLoad();

    // Step 4 - Placeholder component should not exist
    expect(wrapper.findAll('.cld-placeholder').length).toBe(0);
    expect(wrapper.findAll("img").length).toBe(1);

    // Step 5 - Image position and opacity should be reverted back
    expect(cldImageEl.style.opacity).toBe('');
    expect(cldImageEl.style.position).toBe('');
  });
});
