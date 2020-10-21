import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import CldImage from "../../../src/components/CldImage";
import CldContext from "../../../src/components/CldContext";
import CldPlaceholder from "../../../src/components/CldPlaceholder";

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
      '<div cloudName="demo" data-server-rendered="true" class="cld-context">' +
        '<img src="http://res.cloudinary.com/demo/image/upload/small_dinosaur" class="cld-image cld-image-loading">' +
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
      '<div data-server-rendered="true" cloudName="demo" class="cld-image-wrapper">' +
        '<img cloudName="demo" src="http://res.cloudinary.com/demo/image/upload/face_top" class="cld-image cld-image-loading" style="opacity:0;position:absolute;height:0;width:0;">' +
        '<img src="http://res.cloudinary.com/demo/image/upload/e_blur:2000,f_auto,q_1/face_top" cloudName="demo" class="cld-placeholder" style="display:inline-block;">' +
      '</div>'
    );
  });
});
