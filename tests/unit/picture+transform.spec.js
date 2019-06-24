import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import CldTransformation from "../../src/components/CldTransformation.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("allows transformation from CldTransformation", async () => {
    const picture = mount({
      template: `
        <cld-picture
          cloudName="test123"
          publicId="sample.jpg"
          :width="399"
          :height="399"
          crop="fill"
          :sources="sources"
        >
        </cld-picture>
      `,
      data() {
        return {
          sources: [
            {
              max_width: 100,
              transformation: {
                crop: "scale",
                effect: "sepia",
                angle: 17,
                width: 100
              }
            },
            {
              min_width: 100,
              max_width: 399,
              transformation: {
                crop: "scale",
                effect: "colorize",
                angle: 18,
                width: 399
              }
            },
            {
              min_width: 399,
              transformation: {
                crop: "scale",
                effect: "blur",
                angle: 19,
                width: 399
              }
            }
          ]
        };
      },
      components: { CldPicture, CldTransformation }
    });

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.find("img").attributes("src")).toBe(
      "http://res.cloudinary.com/test123/image/upload/c_fill,h_399,w_399/sample.jpg"
    );
    expect(picture.find("img").attributes("width")).toBe("399");
    expect(picture.find("img").attributes("height")).toBe("399");
    expect(sourcesOfPicture(picture)).toEqual({
      "(max-width: 100px)":
        "http://res.cloudinary.com/test123/image/upload/c_fill,h_399,w_399/a_17,c_scale,e_sepia,w_100/sample.jpg",
      "(min-width: 100px) and (max-width: 399px)":
        "http://res.cloudinary.com/test123/image/upload/c_fill,h_399,w_399/a_18,c_scale,e_colorize,w_399/sample.jpg",
      "(min-width: 399px)":
        "http://res.cloudinary.com/test123/image/upload/c_fill,h_399,w_399/a_19,c_scale,e_blur,w_399/sample.jpg"
    });
  });
});
