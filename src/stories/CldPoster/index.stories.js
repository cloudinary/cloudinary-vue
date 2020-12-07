import CldPoster from "../../components/CldVideo/CldPoster.vue";
import CldVideo from "../../components/CldVideo/CldVideo.vue";
import { TransformationParams, TransformMixins } from "../helpers/helpers";

export default {
  title: "Video/CldPoster",
  argTypes: {
    publicId: {
      type: 'string',
      description: 'Public id for the poster (path to asset in Cloudinary storage, or image url)',
      control: 'text'
    },
    ...TransformationParams,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldPoster, CldVideo },
  mixins: [ TransformMixins ],
  template: `
    <cld-video
      cloud-name="demo"
      public-id="dog"
    >
      <cld-poster v-bind="props" :border="border" />
    </cld-video>`,
});
export const Basic = Template.bind({});

export const WithPublicId = Template.bind({});

WithPublicId.args = {
  publicId: "kitten",
};
