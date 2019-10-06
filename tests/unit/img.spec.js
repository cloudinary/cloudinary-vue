import { shallowMount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage/CldImage.vue";

describe("CldImage", () => {
  it("renders", () => {
    const image = shallowMount(CldImage, {
      propsData: {
        cloudName: "demo",
        publicId: "face_top"
      }
    }).find('img');
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
});
