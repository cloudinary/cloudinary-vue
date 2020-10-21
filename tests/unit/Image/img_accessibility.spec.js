import Vue from "vue";
import mountImageComponent from './utils/mountImageComponent';

describe('CldImage::accessibility', () => {
  it("Ignores an unknown accessibility mode", () => {
    const consoleSpy = jest.spyOn(global.console, 'error').mockImplementation(() => {})
    let {imgSrc} = mountImageComponent({
      accessibility: 'UNSUPPORTED_ACCESSIBILITY_MODE'
    });

    expect(consoleSpy).toBeCalled()

    expect(imgSrc).toBe(`http://res.cloudinary.com/demo/image/upload/face_top`);
  });

  it("Renders accessibility mode with darkmode", () => {
    let {imgSrc} = mountImageComponent({
      accessibility: 'darkmode'
    });
    expect(imgSrc).toContain(`http://res.cloudinary.com/demo/image/upload/e_tint:75:black/face_top`);
  });

  it("Renders accessibility mode with brightmode", () => {
    let {imgSrc} = mountImageComponent({
      accessibility: 'brightmode'
    });
    expect(imgSrc).toContain(`http://res.cloudinary.com/demo/image/upload/e_tint:50:white/face_top`);
  });

  // TODO Move to acessibility file
  it("Renders accessibility mode with monochrome", () => {
    let {imgSrc} = mountImageComponent({
      accessibility: 'monochrome'
    });
    expect(imgSrc).toContain(`http://res.cloudinary.com/demo/image/upload/e_grayscale/face_top`);
  });
})