import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo.vue";
import CldPoster from "../../src/components/CldPoster.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";

describe("CldPoster", () => {
  it("renders", async () => {
    const video = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top">
          <cld-poster publicId="small_dinosaur" />
        </cld-video>
      `,
      components: { CldVideo, CldPoster }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/small_dinosaur.jpeg"
    );
  });

  it("doesn't mix transformations", async () => {
    const video = mount({
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

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/e_blur/small_dinosaur.jpeg"
    );
  });

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

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/e_blur/face_top.jpeg"
    );
  });
});
