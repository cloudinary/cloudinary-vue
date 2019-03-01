import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo.vue";
import { sourcesOfVideo } from "./sourcesOfVideo";

describe("CldVideo", () => {
  it("respects poster object-attribute", async () => {
    const video = mount({
      template: `
        <cld-video
          cloudName="demo"
          publicId="face_top"
          :poster="{ publicId: 'small_dinosaur', effect: 'blur' }"
        />
      `,
      components: { CldVideo }
    });

    await Vue.nextTick();

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/e_blur/small_dinosaur.jpeg"
    );
  });
});
