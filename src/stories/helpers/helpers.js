export const TransformationParams = {
  width: {
    control: "text",
    description: "Width to resize",
    table: {
      category: "Resize",
    },
  },
  height: {
    type: "string",
    control: "text",
    description: "Height to resize",
    table: {
      category: "Resize",
    },
  },
  crop: {
    description: "Crop mode",
    control: {
      type: "select",
      options: ["thumb", "scale", "fill", "fit", "crop", "pad"],
    },
    table: {
      category: "Resize",
    },
    defaultValue: "scale",
  },
  aspectRatio: {
    type: "string",
    description: "Aspect ratio of the resizing",
    control: {
      type: "text",
    },
    table: {
      category: "Resize",
    },
  },
  gravity: {
    description: "Focus position to resize around",
    control: {
      type: "select",
      options: [
        "auto",
        "auto:subject",
        "face",
        "sink",
        "north_east",
        "north",
        "north_west",
        "west",
        "south_west",
        "south",
        "south_east",
        "east",
        "center",
        "face:center",
        "faces",
        "faces:center",
      ],
    },
    table: {
      category: "Resize",
    },
  },
  borderWidth: {
    name: "border.width",
    type: "number",
    description: "Width of border to apply to image",
    table: {
      category: "Border",
    },
    control: {
      type: "number",
    },
  },
  borderColor: {
    name: "border.color",
    type: "string",
    description: "Color of border to apply to image",
    table: {
      category: "Border",
      defaultColor: {
        summary: "black",
      },
    },
    control: {
      type: "color",
    },
    defaultValue: "black",
  },
  background: {
    type: "string",
    description: "The background color to apply when using pad crop mode or converting to .jpg format.",
    table: {
      category: "Transformations",
    },
    control: {
      type: "color",
    },
  },
  color: {
    type: "string",
    control: "color",
    description: "Color to use when text captions, shadow effect and colorize effect are in use.",
    table: {
      category: "Transformations"
    }
  },
  effect: {
    type: "string",
    description: "Effect to apply on the image",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  dpr: {
    type: "string",
    description: "The target device pixel ratio for the asset.\n\n `auto` means automatically matching the DPR settings in user's device.",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  radius: {
    type: "string",
    description:
      "Number of pixels or a mode for making the corner of the image rounded.",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  rotate: {
    type: "number",
    description: "How much degree to rotate the image.",
    control: {
      type: "range",
      min: -180,
      max: 180,
      step: 10,
    },
    table: {
      category: "Transformations",
    },
    defaultValue: 0,
  },
  opacity: {
    type: "number",
    control: {
      type: "range",
      min: 0,
      max: 100,
      step: 10,
    },
    table: {
      category: "Transformations",
    },
    description: "Opacity of the image",
    defaultValue: 100,
  },
  overlay: {
    type: "string",
    description: "Overlay to apply on the image",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  underlay: {
    type: "string",
    description: "Underlay to apply on the image",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  transformation: {
    type: "string",
    description: "Named transformation to apply",
    control: {
      type: "text",
    },
    table: {
      category: "Transformations",
    },
  },
  x: {
    description: "Horizontal coordinate for cropping, placing overlay and applying regional effects",
    control: {
      type: "number",
    },
    table: {
      category: "Position",
    },
  },
  y: {
    description: "Vertical coordinate for cropping, placing overlay and applying regional effects.",
    control: {
      type: "number",
    },
    table: {
      category: "Position",
    },
  },
  zoom: {
    description: "Use together with `crop: 'crop'` or `crop: 'thumb'` to decide how much of original image/video surronding the face to keep using face detection.",
    control: {
      type: "string",
    },
    table: {
      category: "Position",
    },
  },
  fetchFormat: {
    type: "string",
    description: "Target format to serve on delivery",
    control: {
      type: "text",
    },
    table: {
      category: "Delivery",
    },
  },
  quality: {
    type: "string",
    description: "Target quality to serve on delivery",
    control: {
      type: "text",
    },
    table: {
      category: "Delivery",
    },
  },
};

export const RGBAToHexA = (rgba, prefix = "rgb:") => {
  const sep = rgba.includes(",") ? "," : " ";
  const toHEXValue = (num) => num.toString(16);

  rgba = rgba
    .substr(5)
    .split(")")[0]
    .split(sep);

  // Strip the slash if using space-separated syntax
  if (rgba.includes("/")) rgba.splice(3, 1);

  for (let color in rgba) {
    let r = rgba[color];
    if (r.includes("%")) {
      let p = r.substr(0, r.length - 1) / 100;

      if (color < 3) {
        rgba[color] = Math.round(p * 255);
      } else {
        rgba[color] = p;
      }
    }
  }

  const colors = {
    r: toHEXValue(+rgba[0]),
    g: toHEXValue(+rgba[1]),
    b: toHEXValue(+rgba[2]),
    a: toHEXValue(Math.round(+rgba[3] * 255)),
  };

  if (colors.r.length == 1) {
    colors.r = `0${colors.r}`;
  }
  if (colors.g.length == 1) {
    colors.g = `0${colors.g}`;
  }
  if (colors.b.length == 1) {
    colors.b = `0${colors.b}`;
  }
  if (colors.a.length == 1) {
    colors.a = `0${colors.a}`;
  }

  return `${prefix}${colors.r}${colors.g}${colors.b}${colors.a}`;
};

export const TransformMixins = {
  computed: {
    border() {
      return this.borderWidth
        ? {
            width: this.borderWidth,
            color: this.borderColor.startsWith("rgba(")
              ? RGBAToHexA(this.borderColor)
              : this.borderColor,
          }
        : undefined;
    },
    props() {
      const { borderWidth, borderColor, ...props } = this.$props;

      if (props.color && props.color.startsWith("rgba(")) {
        props.color = RGBAToHexA(props.color);
      }

      if (props.background && props.background.startsWith("rgba(")) {
        props.background = RGBAToHexA(props.background);
      }

      return props;
    },
  }
}