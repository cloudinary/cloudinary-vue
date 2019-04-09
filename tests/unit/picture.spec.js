import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("renders", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" />
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
  });
});
