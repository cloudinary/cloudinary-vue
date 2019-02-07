import Vue from "vue";
import { shallowMount, mount } from "@vue/test-utils";
import CLDImage from "../../src/components/CLDImage.vue";

describe("CLDImage", () => {
  it("renders", () => {
    const image = shallowMount(CLDImage, {
      propsData: {
        cloudName: "demo",
        publicId: "face_top"
      }
    });
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
  });

  it("allows transformation as props", () => {
    const image = mount({
      template: `<CLDImage 
        cloudName="demo"
        publicId="face_top"
        effect="sepia"
      />`,
      components: { CLDImage }
    });
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/e_sepia/face_top`
    );
  });

  it("bypasses non-cloudinary attributes", () => {
    const image = mount(
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
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(
      `http://res.cloudinary.com/demo/image/upload/face_top`
    );
    expect(image.attributes("aria-hidden")).toBe("true");
    expect(image.attributes("cloudName")).toBe(undefined);
  });

  it("should render a src property with an undefined value if a src is not defined", () => {
    const image = mount({
      template: `
          <CLDImage
            cloudName="demo"
            publicId=""
          />
        `,
      components: { CLDImage }
    });
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(undefined);
  });

  it("respects progressive prop", () => {
    const image = mount({
      template: `
          <CLDImage
            cloudName="demo"
            publicId="face_top"
            progressive
          />
        `,
      components: { CLDImage }
    });
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toEqual(
      `http://res.cloudinary.com/demo/image/upload/fl_progressive/face_top`
    );
  });

  describe("handles placeholder attribute", () => {
    it("color", async () => {
      const image = mount({
        template: `
          <CLDImage
            cloudName="demo"
            publicId="face_top"
            placeholder="color"
          >
            <span /> <!-- this is to enforce async final image -->
          </CLDImage>
        `,
        components: { CLDImage }
      });
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_1,w_1/c_scale,h_$nh,w_$nw/face_top`
      );
      await new Promise(r => Vue.nextTick(r));
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });

    it("LQ", async () => {
      const image = mount({
        template: `
          <CLDImage
            cloudName="demo"
            publicId="face_top"
            placeholder="lqip"
          >
            <span /> <!-- this is to enforce async final image -->
          </CLDImage>
        `,
        components: { CLDImage }
      });
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/$nh_ih,$nw_iw,c_scale,q_auto,w_20/c_scale,h_$nh,w_$nw/face_top`
      );
      await new Promise(r => Vue.nextTick(r));
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });

    it("pixelate", async () => {
      const image = mount({
        template: `
          <CLDImage
            cloudName="demo"
            publicId="face_top"
            placeholder="pixelate"
          >
            <span /> <!-- this is to enforce async final image -->
          </CLDImage>
        `,
        components: { CLDImage }
      });
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/e_pixelate:100/face_top`
      );
      await new Promise(r => Vue.nextTick(r));
      expect(image.is("img")).toBe(true);
      expect(image.attributes("src")).toEqual(
        `http://res.cloudinary.com/demo/image/upload/face_top`
      );
    });
  });
});
