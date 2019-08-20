import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo.vue";
import { sourcesOfVideo } from "./sourcesOfVideo";

describe("CldVideo", () => {
  it("allows transformation as props", async () => {
    const video = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" effect="sepia" />
      `,
      components: { CldVideo }
    });

    expect(video.is("video")).toBe(true);
    expect(sourcesOfVideo(video)).toEqual({
      "video/webm":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.webm",
      "video/mp4":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.mp4",
      "video/ogg":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.ogv"
    });
  });
});
