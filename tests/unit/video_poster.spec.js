import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../src/components/CldVideo/CldVideo.vue";

describe("CldVideo", () => {
  it("respects simple poster attribute", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" poster="zxc" />
      `,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe("zxc");
  });
});
