// import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import * as Cloudinary from "../../src/plugin";

describe("CLD plugin", () => {
  it("allows specifying Cloudinary configuration", async () => {
    const localVue = createLocalVue();
    localVue.use(Cloudinary, { configuration: { cloudName: "demo2" } });

    const wrapper = mount(
      {
        template: `<CLDImage publicId="face_top" />`
      },
      { localVue }
    );

    await new Promise(r => localVue.nextTick(() => r()));

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo2/image/upload/face_top`
    );
  });

  describe("allows picking installed component", () => {
    it("empty array installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: [] });

      const wrapper = mount(
        {
          template: `<CLDImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper.is("img")).toBe(false);
    });

    it("empty object installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: {} });

      const wrapper = mount(
        {
          template: `<CLDImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper.is("img")).toBe(false);
    });

    it("array should contain component names", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: ["CLDImage"] });

      const wrapper = mount(
        {
          template: `<CLDImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper.is("img")).toBe(true);

      const wrapper2 = mount(
        {
          template: `<CLDVideo cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper2.is("video")).toBe(false);
    });

    it("object specifies if component should be installed", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: { CLDImage: true } });

      const wrapper = mount(
        {
          template: `<CLDImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper.is("img")).toBe(true);

      const wrapper2 = mount(
        {
          template: `<CLDVideo cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper2.is("video")).toBe(false);
    });

    it("object with a string specifies under what name a component should be installed", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: { CLDImage: "CloudinaryImage" } });

      const wrapper = mount(
        {
          template: `<CloudinaryImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper.is("img")).toBe(true);

      const wrapper2 = mount(
        {
          template: `<CLDImage cloudName="demo" publicId="face_top" />`
        },
        { localVue }
      );
      expect(wrapper2.is("img")).toBe(false);
    });
  });
});
