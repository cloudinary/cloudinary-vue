import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldSource from "../../src/components/CldSource.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldSource", () => {
  it("should render a picture with no sources if a publicId is not defined", async () => {
    const picture = mount({
      template: `
      <picture>
        <cld-source cloudName="demo" publicId="" />
        <img />
      </picture>
      `,
      components: { CldSource }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(1);
    expect(sourcesOfPicture(picture)).toEqual({ all: undefined });
  });
});
