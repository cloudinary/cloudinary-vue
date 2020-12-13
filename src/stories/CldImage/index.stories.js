import CldImage from "../../components/CldImage/CldImage.vue";
import {
  ACCESSIBILITY_TRANSFORMATIONS,
} from "../../constants";
import { range } from "../../utils/range";
import { TransformationParams, TransformMixins } from "../helpers/helpers";

export default {
  title: "Image/CldImage",
  component: CldImage,
  argTypes: {
    publicId: {
      control: "text",
      defaultValue: "puppy_cute",
      description:
        "Path to image stored in Cloudinary (including folder), or image url",
      table: {
        required: true,
      },
    },
    accessibility: {
      control: {
        type: "select",
        options: ["", ...Object.keys(ACCESSIBILITY_TRANSFORMATIONS)],
      },
      defaultValue: "",
    },
    lazy: {
      control: null,
      description: "**Deprecated**.\n\n Use `loading` instead.",
      type: "boolean",
    },
    placeholder: {
      control: null,
    },
    loading: {
      control: {
        type: "select",
        options: ["", "lazy"],
      },
    },
    responsive: {
      control: {
        type: "select",
        options: [false, true, "auto", "width", "fill", "height"],
      },
      defaultValue: false,
    },
    breakpoints: {
      defaultValue: range(100, 1500, 100),
      description: "Breakpoints for responsive mode"
    },
    ...TransformationParams,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  mixins: [TransformMixins],
  components: { CldImage },
  template: `
    <cld-image
      cloud-name="demo"
      v-bind="props"
      :border="border"
    />`,
});

export const Basic = Template.bind({});

Basic.args = {
  width: 500,
  crop: 'scale'
}

export const WithAccessibility = Template.bind({});

WithAccessibility.args = {
  width: 500,
  accessibility: "monochrome",
};

export const WithResponsive = Template.bind({})

WithResponsive.args = {
  responsive: true,
  breakpoints: range(100, 1500, 100),
  width: 'auto'
};

export const AsThumbnail = Template.bind({})

AsThumbnail.args = {
  crop: "thumb",
  width: 300,
  height: 300
}

export const WithBorder = Template.bind({})

WithBorder.args = {
  borderWidth: 2,
  borderColor: 'black',
  crop: "thumb",
  width: 300,
  height: 300
}

export const WithGravity = Template.bind({})

WithGravity.args = {
  gravity: "auto:subject",
  crop: "crop",
  width: 500,
};

export const WithColor = Template.bind({})

WithColor.args = {
  effect: 'colorize:50',
  color: 'red',
  crop: 'scale',
  width: 500,
}