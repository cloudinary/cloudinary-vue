import CldTransformation from "../../components/CldTransformation/CldTransformation.vue";
import CldImage from "../../components/CldImage/CldImage.vue";
import CldVideo from "../../components/CldVideo/CldVideo.vue";
import { TransformationParams, TransformMixins } from "../helpers/helpers";

export default {
  title: "Support/CldTransformation",
  component: CldTransformation,
  argTypes: {
    ...TransformationParams,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldTransformation, CldImage },
  mixins: [TransformMixins],
  template: `
    <cld-image
      cloud-name="demo"
      public-id="kitten"
    >
      <cld-transformation v-bind="props" :border="border" />
    </cld-image>`,
});

export const WithCldImage = Template.bind({});
WithCldImage.args = {
  width: 500,
  crop: 'scale'
}
export const WithCldVideo = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldTransformation, CldVideo },
  mixins: [ TransformMixins ],
  template: `
    <cld-video
      cloud-name="demo"
      public-id="dog"
    >
      <cld-transformation v-bind="props" :border="border" />
    </cld-video>`,
});

WithCldVideo.args = {
  width: 500,
  crop: "scale",
};


