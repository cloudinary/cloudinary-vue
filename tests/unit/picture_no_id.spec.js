import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("should render a picture with no sources if a publicId is not defined", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="" />
      `,
      components: { CldPicture }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(0);
    expect(sourcesOfPicture(picture)).toEqual({});
  });
});
