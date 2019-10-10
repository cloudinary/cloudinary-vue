import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";

describe("CldVideo", () => {
  it("respects poster object-attribute", async () => {
    const wrapper = mount({
      template: `
        <cld-video
          cloudName="demo"
          publicId="face_top"
          :poster="{ publicId: 'small_dinosaur', effect: 'blur' }"
        />
      `,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/e_blur/small_dinosaur"
    );
  });
});
