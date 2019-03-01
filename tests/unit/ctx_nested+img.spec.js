import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldContext", () => {
  it("works when nested", async () => {
    const wrapper = mount({
      template: `
        <div class="test">
          <cld-context cloudName="demo" secure="false">
            <cld-context secure="true" quality="auto">
              <cld-image publicId="face_top" quality="80" />
            </cld-context>
          </cld-context>
        </div>
      `,
      components: { CldContext, CldImage }
    });

    await Vue.nextTick();

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `https://res.cloudinary.com/demo/image/upload/q_80/face_top`
    );
  });
});
