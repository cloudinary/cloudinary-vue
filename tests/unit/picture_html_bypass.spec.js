import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("bypasses non-cloudinary attributes", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" aria-hidden="true" />
      `,
      components: { CldPicture }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.find("img").attributes("src")).toBe(
      "http://res.cloudinary.com/demo/image/upload/face_top"
    );
    expect(sourcesOfPicture(picture)).toEqual({});
    expect(picture.attributes("aria-hidden")).toBe("true");
    expect(picture.attributes("cloudName")).toBe(undefined);
  });
});
