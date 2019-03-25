import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";

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
    expect(picture.findAll("source").length).toBe(2);
    expect(picture.attributes("aria-hidden")).toBe("true");
    expect(picture.attributes("cloudName")).toBe(undefined);
  });
});
