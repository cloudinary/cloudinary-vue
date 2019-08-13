import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldSource from "../../src/components/CldSource.vue";

describe("CldSource", () => {
  describe("bypasses non-cloudinary attributes", () => {
    it("no ID", async () => {
      const source = mount({
        template: `
          <cld-source cloudName="demo" publicId="" aria-hidden="true" />
        `,
        components: { CldSource }
      });
      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);

      await Vue.nextTick();

      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);
    });

    it("not ready", async () => {
      const source = mount({
        template: `
        <cld-source cloudName="demo" publicId="face_top" aria-hidden="true">
          <span />
        </cld-source>
        `,
        components: { CldSource }
      });
      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);

      await Vue.nextTick();

      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);
    });

    it("final", async () => {
      const source = mount({
        template: `
        <cld-source cloudName="demo" publicId="face_top" aria-hidden="true">
        </cld-source>
        `,
        components: { CldSource }
      });
      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);

      await Vue.nextTick();

      expect(source.is("source")).toBe(true);
      expect(source.attributes("aria-hidden")).toBe("true");
      expect(source.attributes("cloudName")).toBe(undefined);
    });
  });
});
