import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("allows transformation for each source", async () => {
    const picture = mount({
      template: `
        <cld-picture
            cloudName="demo" publicId="face_top"
            :sources="[
                { media: { screen: true, maxWidth: 600 }, transformation: { effect: 'e1' } },
                { media: { screen: true, minWidth: '60vw' }, transformation: { effect: 'e2' } },
                { media: { screen: true }, transformation: { effect: 'e3' } },
                { media: 'print', transformation: { effect: 'e4' } },
            ]"
        />
      `,
      components: { CldPicture }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.find("img").attributes("src")).toBe(
      "http://res.cloudinary.com/demo/image/upload/face_top"
    );
    expect(sourcesOfPicture(picture)).toEqual({
      "screen and (max-width: 600px)":
        "http://res.cloudinary.com/demo/image/upload/e_e1/face_top",
      "screen and (min-width: 60vw)":
        "http://res.cloudinary.com/demo/image/upload/e_e2/face_top",
      screen: "http://res.cloudinary.com/demo/image/upload/e_e3/face_top",
      print: "http://res.cloudinary.com/demo/image/upload/e_e4/face_top"
    });
  });
});
