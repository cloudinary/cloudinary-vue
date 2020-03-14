import { mount, createLocalVue } from "@vue/test-utils";
import Cloudinary, { CldImage } from "../../src";

describe("CLD plugin", () => {
  it("allows specifying Cloudinary configuration", async () => {
    const localVue = createLocalVue();
    localVue.use(Cloudinary, { configuration: { cloudName: "demo2" } });

    const wrapper = mount(
      {
        template: `<cld-image publicId="face_top" />`
      },
      { localVue }
    );

    expect(wrapper.contains("img")).toBe(true);
    expect(wrapper.find('img').attributes("src")).toEqual(
      `http://res.cloudinary.com/demo2/image/upload/face_top`
    );
  });

  describe("allows picking installed component", () => {
    it("empty array installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: [] });

      expect(Object.hasOwnProperty.call(localVue.options.components, 'CldImage')).toBe(false);
    });

    it("empty object installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: {} });

      expect(Object.hasOwnProperty.call(localVue.options.components, 'CldImage')).toBe(false);
    });

    it("array should contain cld component(s)", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: [CldImage] });

      expect(Object.hasOwnProperty.call(localVue.options.components, 'CldImage')).toBe(true);
      expect(Object.hasOwnProperty.call(localVue.options.components, 'CldVideo')).toBe(false);
    });

    it("object with a cld component specifies under what name a component should be installed", async () => {
      const componentName = 'CloudinaryImage';
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: { [componentName]: CldImage } });

      expect(Object.hasOwnProperty.call(localVue.options.components, componentName)).toBe(true);
      expect(Object.hasOwnProperty.call(localVue.options.components, 'CldImage')).toBe(false);
    });
  });
});
