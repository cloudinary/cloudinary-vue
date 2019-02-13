import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDVideo from "../../src/components/CLDVideo.vue";
import CLDPoster from "../../src/components/CLDPoster.vue";
import CLDTransformation from "../../src/components/CLDTransformation.vue";

describe("CLDPoster", () => {
  function sourcesOfVideo(element) {
    const sources = element.findAll("source");
    const result = {};
    for (let i = 0; i < sources.length; i++) {
      result[sources.at(i).attributes("mimetype")] = sources
        .at(i)
        .attributes("src");
    }
    return result;
  }

  it("renders", async () => {
    const video = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top">
          <CLDPoster publicId="small_dinosaur" />
        </CLDVideo>
      `,
      components: { CLDVideo, CLDPoster }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/small_dinosaur"
    );
  });

  it("doesn't mix transformations", async () => {
    const video = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top">
          <CLDTransformation effect="sepia" />
          <CLDPoster publicId="small_dinosaur">
            <CLDTransformation effect="blur" />
          </CLDPoster>
        </CLDVideo>
      `,
      components: { CLDVideo, CLDPoster, CLDTransformation }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/e_blur/small_dinosaur"
    );
  });

  it("no publicId means video publicId is used", async () => {
    const video = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top">
          <CLDTransformation effect="sepia" />
          <CLDPoster>
            <CLDTransformation effect="blur" />
          </CLDPoster>
        </CLDVideo>
      `,
      components: { CLDVideo, CLDPoster, CLDTransformation }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(video.is("video")).toBe(true);
    expect(video.attributes("poster")).toBe(
      "http://res.cloudinary.com/demo/image/upload/e_blur/face_top"
    );
  });
});
