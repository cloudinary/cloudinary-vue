import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldSource from "../../src/components/CldSource.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldSource", () => {
  it("renders", async () => {
    const picture = mount({
      template: `
        <picture>
            <cld-source cloudName="demo" publicId="face_top" />
            <cld-source media="print" cloudName="demo" publicId="face_top2" effect="sepia" />
            <cld-source :media="{ screen: true, maxWidth: 600 }" cloudName="demo" publicId="face_top3" />
            <img />
        </picture>
      `,
      components: { CldSource }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(sourcesOfPicture(picture)).toEqual({
      all: "http://res.cloudinary.com/demo/image/upload/face_top",
      print: "http://res.cloudinary.com/demo/image/upload/e_sepia/face_top2",
      "screen and (max-width: 600px)":
        "http://res.cloudinary.com/demo/image/upload/face_top3"
    });
  });
});
