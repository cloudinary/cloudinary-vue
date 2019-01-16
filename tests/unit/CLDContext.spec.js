import { mount } from "@vue/test-utils";
import CLDContext from "../../src/components/CLDContext.vue";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDContext", () => {
  it("renders", () => {
    mount(
      {
        template: `
          <CLDContext cloudName="demo" />`
      },
      {
        components: { CLDContext }
      }
    );
  });

  it("bypasses non-cloudinary attributes", () => {
    const wrapper = mount(
      {
        template: `
          <CLDContext cloudName="demo" aria-hidden="true" />`
      },
      {
        components: { CLDContext }
      }
    );
    expect(wrapper.findAll("div").length).toBe(1);
    expect(wrapper.find("div").attributes("aria-hidden")).toBe("true");
    expect(wrapper.find("div").attributes("cloudName")).toBe(undefined);
  });

  it("works single-layered", () => {
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

  it("works when nested", () => {
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
