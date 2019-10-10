import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";
import CldPoster from "../../src/components/CldVideo/CldPoster.vue";
import CldTransformation from "../../src/components/CldTransformation/CldTransformation.vue";

describe("CldPoster", () => {
  it("no publicId means video publicId is used", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top">
          <cld-transformation effect="sepia" />
          <cld-poster>
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
      "http://res.cloudinary.com/demo/video/upload/e_blur/face_top.jpeg"
    );
  });
});
