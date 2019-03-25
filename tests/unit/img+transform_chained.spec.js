import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldTransformation from "../../src/components/CldTransformation.vue";
import CldImage from "../../src/components/CldImage.vue";

describe("CldImage with CldTransformation ", () => {
  it("should allow chained transformations", async () => {
    const wrapper = mount({
      template: `
        <cld-image publicId="sample" cloudName="demo">
          <cld-transformation width="100" crop="scale" />
          <cld-transformation width="200" crop="pad">
            <cld-transformation angle="30" />
          </cld-transformation>
        </cld-image>
      `,
      components: { CldTransformation, CldImage }
    });

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(undefined);

    await Vue.nextTick();

    expect(wrapper.is("img")).toBe(true);
    expect(wrapper.attributes("src")).toEqual(
      "http://res.cloudinary.com/demo/image/upload/c_scale,w_100/c_pad,w_200/a_30/sample"
    );
  });
});
