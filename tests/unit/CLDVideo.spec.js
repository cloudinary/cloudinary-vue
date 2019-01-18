import Vue from "vue";
import { mount } from "@vue/test-utils";
import CLDVideo from "../../src/components/CLDVideo.vue";

describe("CLDVideo", () => {
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
    const image = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top" />
      `,
      components: { CLDVideo }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(image.is("video")).toBe(true);
    expect(sourcesOfVideo(image)).toEqual({
      "video/webm": "http://res.cloudinary.com/demo/video/upload/face_top.webm",
      "video/mp4": "http://res.cloudinary.com/demo/video/upload/face_top.mp4",
      "video/ogg": "http://res.cloudinary.com/demo/video/upload/face_top.ogv"
    });
  });

  it("allows transformation as props", async () => {
    const image = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top" effect="sepia" />
      `,
      components: { CLDVideo }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(image.is("video")).toBe(true);
    expect(sourcesOfVideo(image)).toEqual({
      "video/webm":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.webm",
      "video/mp4":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.mp4",
      "video/ogg":
        "http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.ogv"
    });
  });

  it("bypasses non-cloudinary attributes", async () => {
    const image = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="face_top" aria-hidden="true" />
      `,
      components: { CLDVideo }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(image.is("video")).toBe(true);
    expect(image.attributes("aria-hidden")).toBe("true");
    expect(image.attributes("cloudName")).toBe(undefined);
  });

  it("should render a src property with an undefined value if a src is not defined", async () => {
    const image = mount({
      template: `
        <CLDVideo cloudName="demo" publicId="" />
      `,
      components: { CLDVideo }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(image.is("video")).toBe(true);
    expect(sourcesOfVideo(image)).toEqual({});
  });
});
