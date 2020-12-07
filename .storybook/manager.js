import { create } from '@storybook/theming/create'
import { addons } from "@storybook/addons";

const cloudinaryTheme = create({
  base: "light",
  colorPrimary: "#3448c5",
  brandTitle: "Cloudinary Vue SDK Storybook",
  brandUrl: "https://cloudinary.com",
  brandImage:
    "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1595456749/creative_source/Logo/PNG/cloudinary_logo_blue_0720_2x.png",
});

addons.setConfig(cloudinaryTheme)