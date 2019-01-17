import Vue from "vue";
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

  it("works single-layered", async () => {
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
        components: { CLDContext, CLDImage }
      }
    );

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });

    await new Promise(r => Vue.nextTick(() => r()));
  });

  it("works when nested", async () => {
    const wrapper = mount(
      {
        template: `
          <div class="test">
            <CLDContext cloudName="demo" secure="false">
              <CLDContext secure="true" quality="auto">
                <CLDImage publicId="face_top" quality="80" />
              </CLDContext>
            </CLDContext>
          </div>`
      },
      {
        components: { CLDContext, CLDImage }
      }
    );

    Vue.nextTick(() => {
      expect(wrapper.contains("img")).toBe(true);
      expect(wrapper.find("img").element.getAttribute("src")).toEqual(
        `https://res.cloudinary.com/demo/image/upload/q_80/face_top`
      );
    });

    await new Promise(r => Vue.nextTick(() => r()));
  });
});
