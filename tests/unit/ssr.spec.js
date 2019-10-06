import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import CldImage from "../../src/components/CldImage/CldImage.vue";
import CldContext from "../../src/components/CldContext/CldContext.vue";

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
