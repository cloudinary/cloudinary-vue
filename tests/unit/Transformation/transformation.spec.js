import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldTransformation from "../../../src/components/CldTransformation";

describe("CldTransformation ", () => {
  it("renders", async () => {
    const chained = []
    
    mount({
      template: `
        <div cloudName="demo" publicId="face_top">
          <cld-transformation effect="sepia:20" />
        </div>
      `,
      components: { CldTransformation }
    }, {
      provide: {
        registerTransformation(options) {
          chained.push(options)
        }
      }
    });

    expect(chained).toEqual([{ effect: 'sepia:20' }])
  });

  it('should allow chained transformations', async () => {
    const chained = []

    mount({
      template: `
        <div publicId="sample" cloudName="demo">
          <cld-transformation width="100" crop="scale" />
          <cld-transformation width="200" crop="pad" />
          <cld-transformation angle="30" />
        </div>
      `,
      components: { CldTransformation }
    }, {
      provide: {
        registerTransformation(options) {
          chained.push(options)
        }
      }
    })

    expect(chained).toEqual([{
      width: "100",
      crop: 'scale'
    }, {
      width: "200",
      crop: "pad"
    }, {
      angle: "30"
    }])
  })
});
