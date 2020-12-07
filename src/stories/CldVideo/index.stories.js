import CldVideo from "../../components/CldVideo/CldVideo.vue";
import { Cloudinary } from "cloudinary-core";
import { TransformationParams, TransformMixins } from "../helpers/helpers";

export default {
  title: "Video/CldVideo",
  component: CldVideo,
  argTypes: {
    publicId: {
      control: "text",
      defaultValue: "dog",
      table: {
        required: true,
      },
    },
    sourceTypes: {
      control: "object",
      defaultValue: Cloudinary.DEFAULT_VIDEO_SOURCE_TYPES.reduce(
        (types, type) => ({ ...types, [type]: {} }),
        {}
      ),
    },
    loading: {
      control: {
        type: "select",
        options: ["", "lazy"],
      },
    },
    lazy: {
      control: null,
      description: '**Deprecated** Using `loading="lazy"` instead.'
    },
    ...TransformationParams,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  mixins: [TransformMixins],
  components: { CldVideo },
  template: `
    <cld-video
      cloud-name="demo"
      v-bind="props"
      :border="border"
    />`,
});

export const Basic = Template.bind({});
