import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo";

describe("CldVideo", () => {
  it("will contain default poster if no poster data is provided", async () => {
    const video = mount({
      template: `
        <cld-video
          cloudName="demo"
          publicId="face_top"
        />
      `,
      components: { CldVideo }
    });

    await Vue.nextTick();

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/video/upload/face_top.jpeg"
    );
  });
});
