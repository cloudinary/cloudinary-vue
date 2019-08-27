import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import CldImage from "../components/CldImage/CldImage.vue";

storiesOf("CldImage", module).add("simple", () => ({
  components: { CldImage },
  template: `
      <cld-image 
        cloudName="demo" 
        publicId="small_dinosaur"
        @click.native="action"
      />`,
  methods: { action: action("clicked") }
}));
