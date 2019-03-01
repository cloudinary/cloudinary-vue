import { mount } from "@vue/test-utils";
import CldContext from "../../src/components/CldContext.vue";

describe("CldContext", () => {
  it("bypasses non-cloudinary attributes", () => {
    const wrapper = mount({
      template: `
        <cld-context cloudName="demo" aria-hidden="true" />
      `,
      components: { CldContext }
    });
    expect(wrapper.findAll("div").length).toBe(1);
    expect(wrapper.find("div").attributes("aria-hidden")).toBe("true");
    expect(wrapper.find("div").attributes("cloudName")).toBe(undefined);
  });
});
