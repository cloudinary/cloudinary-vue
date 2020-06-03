import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import CldImage from "../../../src/components/CldImage/CldImage.vue";
import CldContext from "../../../src/components/CldContext/CldContext.vue";
import CldPlaceholder from "../../../src/components/CldPlaceholder/CldPlaceholder";

describe('SSR Tests', () => {
  it("SSR", async () => {
    const output = await createRenderer({
      runInNewContext: true
    }).renderToString(
      new Vue({
        template: `
        <cld-context cloudName="demo">
          <cld-image publicId="small_dinosaur" />
        </cld-context>
      `,
        components: { CldContext, CldImage }
      })
    );
    expect(output).toBe(
      '<div data-server-rendered="true" class="cld-context">' +
      '<div class="cld-image">' +
      '<img src="http://res.cloudinary.com/demo/image/upload/small_dinosaur"> ' +
      '</div>' +
      '</div>'
    );
  });

  it("SSR with Placeholder", async () => {
    const output = await createRenderer({
      runInNewContext: true
    }).renderToString(
      new Vue({
        template: `
          <cld-image cloudName="demo" publicId="face_top">
            <cld-placeholder></cld-placeholder>
          </cld-image>
      `,
        components: { CldImage, CldPlaceholder }
      })
    );

    // This output was tested using a real Nuxt application to ensure it works correctly
    expect(output).toBe(
      '<div data-server-rendered="true" cloudName="demo" class="cld-image">' +
      '<img src="http://res.cloudinary.com/demo/image/upload/face_top"> ' +
      '<img src="http://res.cloudinary.com/demo/image/upload/e_blur:2000,f_auto,q_1/face_top" class="cld-placeholder">' +
      '</div>'
    );
  });
});
