import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import CldImage from "../../src/components/CldImage/CldImage.vue";
import CldContext from "../../src/components/CldContext/CldContext.vue";
import CldTransformation from "../../src/components/CldTransformation/CldTransformation.vue";

it("SSR", async () => {
  const output = await createRenderer({
    runInNewContext: true
  }).renderToString(
    new Vue({
      template: `
        <cld-context cloudName="demo">
          <cld-image publicId="small_dinosaur">
            <cld-transformation effect="sepia" />
          </cld-image>
        </cld-context>
      `,
      components: { CldContext, CldImage, CldTransformation }
    })
  );
  expect(output).toBe(
    '<div data-server-rendered="true" class="cld-context">' +
      '<div class="cld-image">' +
      '<img src="http://res.cloudinary.com/demo/image/upload/e_sepia/small_dinosaur"> ' +
      "</div>" +
      "</div>"
  );
});
