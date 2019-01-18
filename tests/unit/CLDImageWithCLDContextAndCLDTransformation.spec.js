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
              <CLDTransformation width="100">
                <CLDTransformation height="100" />
              </CLDTransformation>
            </CLDImage>
            <CLDTransformation crop="scale" />
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
      `http://res.cloudinary.com/demo/image/upload/c_scale,h_100,w_100/face_top`
    );
  });
});
