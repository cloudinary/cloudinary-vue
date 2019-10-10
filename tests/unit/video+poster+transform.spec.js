import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";
import CldPoster from "../../src/components/CldVideo/CldPoster.vue";
import CldTransformation from "../../src/components/CldTransformation/CldTransformation.vue";

describe("CldPoster", () => {
  it("doesn't mix up transformations", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top">
          <cld-transformation effect="sepia" />
          <cld-poster publicId="small_dinosaur">
            <cld-transformation effect="blur" />
          </cld-poster>
        </cld-video>
      `,
      components: { CldVideo, CldPoster, CldTransformation }
    });

    const video = wrapper.find('video');
    await Vue.nextTick();

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/e_blur/small_dinosaur"
    );
  });
});
