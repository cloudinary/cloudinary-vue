import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldSource from "../../src/components/CldSource.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldSource", () => {
  it("allows transformation from CldTransformation", async () => {
    const picture = mount({
      template: `
        <picture>
          <cld-source cloudName="demo" publicId="face_top">
            <cld-transformation effect="sepia" />
          </cld-source>
          <img  />
        </picture>
      `,
      components: { CldSource, CldTransformation }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(sourcesOfPicture(picture)).toEqual({
      all: "http://res.cloudinary.com/demo/image/upload/e_sepia/face_top"
    });
  });
});
