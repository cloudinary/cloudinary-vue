import CldPlaceholder from "../../components/CldPlaceholder/CldPlaceholder.vue";
import CldImage from "../../components/CldImage/CldImage.vue";
import { PLACEHOLDER_TRANSFORMATIONS } from "../../constants";

export default {
  title: "Image/CldPlaceholder",
  argTypes: {
    type: {
      type: "string",
      control: {
        type: "select",
        options: Object.keys(PLACEHOLDER_TRANSFORMATIONS),
      },
      defaultValue: "blur",
      description: "The placeholder image to use while the image is loading.",
      table: {
        defaultValue: {
          summary: 'blur'
        }
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CldPlaceholder, CldImage },
  template: `
    <cld-image
      cloud-name="demo"
      public-id="sample"
    >
      <cld-placeholder :type="type"/>
    </cld-image>`,
});

export const Blur = Template.bind({});

export const Pixelate = Template.bind({});
Pixelate.args = {
  type: 'pixelate'
}
export const Dominant = Template.bind({});
Dominant.args = {
  type: "predominant-color",
};
export const Vectorize = Template.bind({});
Vectorize.args = {
  type: 'vectorize'
}

export const Color = Template.bind({});
Color.args = {
  type: "vectorize",
};

export const Liquidate = Template.bind({});
Liquidate.args = {
  type: "vectorize",
};