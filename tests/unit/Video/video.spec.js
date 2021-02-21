import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldVideo from "../../../src/components/CldVideo/CldVideo.vue";
import { sourcesOfVideo } from "../TestUtils/sourcesOfVideo";
import CldPoster from "../../../src/components/CldVideo/CldPoster";
import CldTransformation from "../../../src/components/CldTransformation/CldTransformation";

describe("CldVideo Component tests", () => {
  it("renders with correct sources", async () => {
    const wrapper = mount({
      template: `<cld-video cloudName="demo" publicId="face_top" />`,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(sourcesOfVideo(video)).toEqual({
      "video/webm": "http://res.cloudinary.com/demo/video/upload/face_top.webm",
      "video/mp4": "http://res.cloudinary.com/demo/video/upload/face_top.mp4",
      "video/ogg": "http://res.cloudinary.com/demo/video/upload/face_top.ogv"
    });
  });

  it("should render a video without sources if publicId is not defined", async () => {
    const wrapper = mount({
      template: `<cld-video cloudName="demo" publicId="" />`,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(video.exists()).toBe(false);
  });

  it("allows transformation as props", async () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" effect="sepia" />
      `,
      components: { CldVideo }
    });

    expect(sourcesOfVideo(wrapper)).toEqual({
      "video/webm":"http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.webm",
      "video/mp4":"http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.mp4",
      "video/ogg":"http://res.cloudinary.com/demo/video/upload/e_sepia/face_top.ogv"
    });
  });

  it("passes non-cloudinary props down to video element", () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" aria-hidden="true" />
      `,
      components: { CldVideo }
    });

    const video = wrapper.find('video');

    expect(video.attributes("aria-hidden")).toBe("true");
    expect(video.attributes("cloudName")).toBe(undefined);
  });

  it("Exposes the video element ref", () => {
    const wrapper = mount({
      template: `
        <cld-video cloudName="demo" publicId="face_top" aria-hidden="true" ref="cldVideo"/>
      `,
      components: {CldVideo}
    });

    const endUserComponent = wrapper.vm;
    // Access the cloudinary video component from within the user component
    const cldVideoComponent = endUserComponent.$refs.cldVideo;
    // Access the videoElement
    const videoElementFromRef = cldVideoComponent.$videoElement;

    // Ensure that ref exposes the same video element that's found by a document selector
    // sort-of equiv to document.getElementByTag(...)
    const videoWrapperFromSelector = wrapper.find('video');
    // The result is a test wrapper, so we need to access the element first
    expect(videoWrapperFromSelector.element).toBe(videoElementFromRef);

    ['play', 'pause', 'canPlayType', 'addTextTrack'].forEach((funcName) => {
      expect(typeof videoElementFromRef[funcName]).toBe('function');
    });
  });
});
