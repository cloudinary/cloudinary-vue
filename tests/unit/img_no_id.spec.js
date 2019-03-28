import { mount } from "@vue/test-utils";
import CldImage from "../../src/components/CldImage";

describe("CldImage", () => {
  it("should render a src property with an undefined value if a src is not defined", () => {
    const image = mount({
      template: `
          <cld-image
            cloudName="demo"
            publicId=""
          />
        `,
      components: { CldImage }
    });
    expect(image.is("img")).toBe(true);
    expect(image.attributes("src")).toBe(undefined);
  });
});
