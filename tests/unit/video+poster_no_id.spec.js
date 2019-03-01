import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo.vue";
import CldPoster from "../../src/components/CldPoster.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";

describe("CldPoster", () => {
  it("no publicId means video publicId is used", async () => {
    const video = mount({
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

    await Vue.nextTick();

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/e_blur/face_top.jpeg"
    );
  });
});
