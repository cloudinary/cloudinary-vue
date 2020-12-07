import CldContext from "../../components/CldContext/CldContext.vue";
import CldImage from "../../components/CldImage/CldImage.vue";
import {
  TransformationParams,
  TransformMixins,
} from "../helpers/helpers";

export default {
  title: "Support/CldContext",
  argTypes: {
    cloudName: {
      type: 'string',
      defaultValue: 'demo',
      control: 'text',
      description: 'Cloudinary cloud name associated with your account'
    },
    ...TransformationParams
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldContext, CldImage },
  mixins: [ TransformMixins ],
  template: `
    <cld-context v-bind="props" :border="border">
      <cld-image
        public-id="kitten"
      />
    </cld-context>`,
});

export const SingleImage = Template.bind({});
export const MultipleImages = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldContext, CldImage },
  mixins: [ TransformMixins ],
  template: `
    <cld-context cloud-name="demo" v-bind="props" :border="border">
      <cld-image
        public-id="puppy_cute"
      />
      <cld-image
        public-id="kitten"
      />
    </cld-context>`,
});

MultipleImages.args = {
  width: 500,
  height: 500,
  crop: 'thumb',
  radius: 'max'
}
