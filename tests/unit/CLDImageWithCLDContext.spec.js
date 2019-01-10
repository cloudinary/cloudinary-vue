import { mount } from "@vue/test-utils";
import CLDContext from "../../src/components/CLDContext.vue";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDImage", () => {
  it("with CLDContext", () => {
    const wrapper = mount(
      {
        template: `
          <div class="test">
            <CLDContext cloudName="demo">
              <CLDImage publicId="face_top"/>
            </CLDContext>
          </div>`
      },
      {
        components: { CLDContext, CLDImage },
        propsData: {}
      }
    );
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("with CLDContext nested", () => {
    const wrapper = mount(
      {
        template: `
          <div class="test">
            <CLDContext cloudName="demo">
              <CLDContext secure="true">
                <CLDImage publicId="face_top"/>
              </CLDContext>
            </CLDContext>
          </div>`
      },
      {
        components: { CLDContext, CLDImage },
        propsData: {}
      }
    );
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `https://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
});
