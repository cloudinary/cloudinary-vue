import { shallowMount } from "@vue/test-utils";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDImage", () => {
  it("renders", () => {
    const wrapper = shallowMount(CLDImage, {
      propsData: {
        cloudName: "demo",
        publicId: "face_top"
      }
    });
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });
});
