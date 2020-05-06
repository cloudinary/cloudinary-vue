import { shallowMount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";



function getImageProps(extraProps) {
  return Object.assign({
    cloudName: "demo",
    publicId: "face_top"
  }, extraProps)
}

describe("CldImage", () => {
  it("renders", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps()
    }).find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("Renders with an unknown accessibility mode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'_____'})
    }).find('img');
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("Renders with accessibility mode - Darkmode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'darkmode'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_tint:75:black/face_top');
  });

  it("Renders with accessibility mode - Brightmode", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'brightmode'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_tint:50:white/face_top');
  });

  it("Renders with accessibility mode - Monochrome", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'monochrome'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_grayscale/face_top');
  });

  it("Renders with accessibility mode - Colorblind", () => {
    const image = shallowMount(CldImage, {
      propsData: getImageProps({ accessibility:'colorblind'})
    }).find('img');
    expect(image.attributes("src")).toContain('e_assist_colorblind/face_top');
  });
});
