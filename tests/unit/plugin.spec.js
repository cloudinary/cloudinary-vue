import { mount, createLocalVue } from "@vue/test-utils";
import Cloudinary, { CldImage } from "../../src";

describe("CLD plugin", () => {
  it('already installed', async () => {
    const localVue = createLocalVue();
    localVue.CldInstalled = true

    let error = ''

    try {
      localVue.use(Cloudinary)
    } catch (e) {
      error = e.message
    }

    expect(error).toBe('Cloudinary plugin already installed')
  })

  it('display warning when default configurations passed with falsy value', async () => {
    const localVue = createLocalVue();

    const consoleSpy = jest.spyOn(global.console, 'warn').mockImplementation(() => {})

    await localVue.use(Cloudinary, { components: '', configuration: '' })


    expect(consoleSpy).toBeCalledWith('🛑 There is no default configuration for Cloudinary found!')
  })

  it('not installing illegal component', async () => {
    const localVue = createLocalVue();
    const vueComponentSpy = jest.spyOn(localVue, 'component').mockImplementation(() => {})

    localVue.use(Cloudinary, { components: {
      CldImage,
      CldVideo: undefined

    }, configuration: '' })

    expect(vueComponentSpy).toBeCalledTimes(1)
  })

  it('will run component.data() if present', async () => {
    const localVue = createLocalVue();
    const vueComponentSpy = jest.spyOn(localVue, 'component').mockImplementation(() => {})
    const mockData = jest.fn(() => ({}))

    localVue.use(Cloudinary, { 
      components: {
        CldVideo: {
          data: mockData,
          template: '<div class="cld-video" />'
        }
      },
      configuration: { 
        cloudName: "demo2" 
      }
    })

    expect(vueComponentSpy).toBeCalled()
    expect(mockData).toBeCalled()
  })

  it("allows specifying Cloudinary configuration", async () => {
    const localVue = createLocalVue();
    localVue.use(Cloudinary, { configuration: { cloudName: "demo2" } });

    const wrapper = mount(
      {
        template: `<cld-image publicId="face_top" />`
      },
      { localVue }
    );

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find('img').attributes("src")).toEqual(
      `http://res.cloudinary.com/demo2/image/upload/face_top`
    );
  });

  describe("allows picking installed component", () => {
    it("empty array installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: [] });

      const isComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, 'CldImage');

      expect(isComponentInstalled).toBe(false);
    });

    it("empty object installs no component", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: {} });

      const isComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, 'CldImage');

      expect(isComponentInstalled).toBe(false);
    });

    it("array should contain cld component(s)", async () => {
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: [CldImage] });

      const isImageComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, 'CldImage');
      const isVideoComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, 'CldVideo');

      expect(isImageComponentInstalled).toBe(true);
      expect(isVideoComponentInstalled).toBe(false);
    });

    it("object with a cld component specifies under what name a component should be installed", async () => {
      const componentName = 'CloudinaryImage';
      const localVue = createLocalVue();
      localVue.use(Cloudinary, { components: { [componentName]: CldImage } });

      const isNamedComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, componentName);
      const isImageComponentInstalled = Object.hasOwnProperty.call(localVue.options.components, 'CldImage');

      expect(isNamedComponentInstalled).toBe(true);
      expect(isImageComponentInstalled).toBe(false);
    });
  });
});
