import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";

describe("CldPicture", () => {
  function sourcesOfPicture(element) {
    const sources = element.findAll("source");
    const result = {};
    for (let i = 0; i < sources.length; i++) {
      result[sources.at(i).attributes("type")] = sources
        .at(i)
        .attributes("srcset");
    }
    return result;
  }

  it("renders", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" />
      `,
      components: { CldPicture }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(sourcesOfPicture(picture)).toEqual({
      "image/jpeg": "http://res.cloudinary.com/demo/image/upload/face_top.jpeg",
      "image/webp": "http://res.cloudinary.com/demo/image/upload/face_top.webp"
    });
  });

  it("allows transformation as props", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" effect="sepia" />
      `,
      components: { CldPicture }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(sourcesOfPicture(picture)).toEqual({
      "image/jpeg":
        "http://res.cloudinary.com/demo/image/upload/e_sepia/face_top.jpeg",
      "image/webp":
        "http://res.cloudinary.com/demo/image/upload/e_sepia/face_top.webp"
    });
  });

  it("allows transformation for each source", async () => {
    const picture = mount({
      template: `
        <cld-picture
            cloudName="demo" publicId="face_top"
            :sourceTypes="{
                webp: { effect: 'sepia' },
                jpeg: { effect: 'pixelate' }
            }"
        />
      `,
      components: { CldPicture }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(sourcesOfPicture(picture)).toEqual({
      "image/jpeg":
        "http://res.cloudinary.com/demo/image/upload/e_pixelate/face_top.jpeg",
      "image/webp":
        "http://res.cloudinary.com/demo/image/upload/e_sepia/face_top.webp"
    });
  });

  it("allows transformation from CldTransformation", async () => {
    const picture = mount({
      template: `
        <cld-picture
            cloudName="demo" publicId="face_top"
            :sourceTypes="{
                webp: { effect: 'sepia' },
                jpeg: { effect: 'pixelate' }
            }"
        >
            <cld-transformation
                effect="blur"
            />
        </cld-picture>
      `,
      components: { CldPicture, CldTransformation }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(sourcesOfPicture(picture)).toEqual({
      "image/jpeg":
        "http://res.cloudinary.com/demo/image/upload/e_blur/e_pixelate/face_top.jpeg",
      "image/webp":
        "http://res.cloudinary.com/demo/image/upload/e_blur/e_sepia/face_top.webp"
    });
  });

  it("bypasses non-cloudinary attributes", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" aria-hidden="true" />
      `,
      components: { CldPicture }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(picture.attributes("aria-hidden")).toBe("true");
    expect(picture.attributes("cloudName")).toBe(undefined);
  });

  it("should render a picture with no sources if a publicId is not defined", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="" />
      `,
      components: { CldPicture }
    });

    await new Promise(r => Vue.nextTick(() => r()));

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(0);
    expect(sourcesOfPicture(picture)).toEqual({});
  });
});
