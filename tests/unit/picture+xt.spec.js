import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
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

    await Vue.nextTick();

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
});
