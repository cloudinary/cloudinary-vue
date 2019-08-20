import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo.vue";

describe("CldVideo", () => {
  it("bypasses non-cloudinary attributes", async () => {
    const video = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" aria-hidden="true" />
      `,
      components: { CldVideo }
    });

    expect(video.is("video")).toBe(true);
    expect(video.attributes("aria-hidden")).toBe("true");
    expect(video.attributes("cloudName")).toBe(undefined);
  });
});
