import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldContext", () => {
  it("renders", () => {
    mount(
      {
        template: `
          <cld-context cloudName="demo" />`
      },
      {
        components: { CldContext }
      }
    );
  });

  it("bypasses non-cloudinary attributes", () => {
    const wrapper = mount(
      {
        template: `
          <cld-context cloudName="demo" aria-hidden="true" />`
      },
      {
        components: { CldContext }
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
            <cld-context cloudName="demo">
              <cld-image publicId="face_top"/>
            </cld-context>
          </div>`
      },
      {
        components: { CldContext, CldImage }
      }
    );

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("works when nested", async () => {
    const wrapper = mount(
      {
        template: `
          <div class="test">
            <cld-context cloudName="demo" secure="false">
              <cld-context secure="true" quality="auto">
                <cld-image publicId="face_top" quality="80" />
              </cld-context>
            </cld-context>
          </div>`
      },
      {
        components: { CldContext, CldImage }
      }
    );

    await new Promise(r => Vue.nextTick(() => r()));

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `https://res.cloudinary.com/demo/image/upload/q_80/face_top`
    );
  });
});
