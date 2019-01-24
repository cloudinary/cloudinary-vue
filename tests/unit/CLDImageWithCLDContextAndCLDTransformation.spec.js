import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDTransformation from "../../src/components/CLDTransformation.vue";
import CLDImage from "../../src/components/CLDImage.vue";
import CLDContext from "../../src/components/CLDContext.vue";

describe("CLDImage", () => {
  it("with CLDTransformation and CLDContext", async () => {
    const wrapper = mount(
      {
        template: `
          <CLDContext cloudName="demo">
            <CLDImage publicId="face_top">
              <CLDTransformation effect="sepia" >
                <CLDTransformation effect="blur" />
              </CLDTransformation>
            </CLDImage>
            <CLDTransformation crop="scale" width="100" height="100" />
          </CLDContext>          
        `
      },
      {
        components: { CLDTransformation, CLDImage, CLDContext }
      }
    );

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(undefined);

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/e_sepia/e_blur/face_top`
    );
  });
});
