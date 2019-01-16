import { shallowMount, mount } from "@vue/test-utils";
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

  it("allows transformation as props", () => {
    const wrapper = shallowMount(CLDImage, {
      propsData: {
        cloudName: "demo",
        publicId: "face_top",
        effect: "sepia"
      }
    });
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").element.getAttribute("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia/face_top`
    );
  });

  it("bypasses non-cloudinary attributes", () => {
    const wrapper = mount(
      {
        template: `
          <CLDImage
            cloudName="demo"
            publicId="face_top"
            aria-hidden="true"
          />
        `
      },
      {
        components: { CLDImage }
      }
    );
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
    expect(wrapper.find("img").attributes("aria-hidden")).toBe("true");
    expect(wrapper.find("img").attributes("cloudName")).toBe(undefined);
  });

  it("should render a src property with an undefined value if a src is not defined", () => {
    const wrapper = mount(
      {
        template: `
          <CLDImage
            cloudName="demo"
            publicId=""
          />
        `
      },
      {
        components: { CLDImage }
      }
    );
    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(undefined);
  });
});
