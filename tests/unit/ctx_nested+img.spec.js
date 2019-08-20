import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldContext", () => {
  it("works when nested", async () => {
    const wrapper = mount({
      template: `
        <div class="test">
          <cld-context cloudName="demo" secure="false" effect="blur">
            <cld-context secure="true" quality="auto" effect="sepia">
              <cld-image publicId="face_top" quality="80" :transformation="[{effect:'grayscale'}]" />
            </cld-context>
          </cld-context>
        </div>
      `,
      components: { CldContext, CldImage }
    });

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `https://res.cloudinary.com/demo/image/upload/e_blur/e_sepia,q_auto/e_grayscale/q_80/face_top`
    );
  });
});
