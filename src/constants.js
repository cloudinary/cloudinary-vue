export const predominantColorTransform  = [
  {variables: [['$currWidth', 'w'], ['$currHeight', 'h']]},
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 10, height: 10, gravity: 'north_east'},
  {width: '$currWidth', height: '$currHeight', crop: 'fill'},
  {fetch_format: 'auto', quality: 'auto'}];

export const A11Y_TYPES = {
  DARK_MODE: 'darkmode',
  BRIGHT_MODE: 'brightmode',
  MONOCHROME: 'monochrome',
  COLOR_BLIND: 'colorblind'
}

export const PLACEHOLDER_TYPES = {
  VECTORIZE: 'vectorize',
  PIXELATE: 'pixelate',
  BLUR: 'blur',
  PREDOMINANT: 'predominant-color',
  LQIP: 'lqip',
  COLOR: 'color'
}

export const RESPONSIVE_TYPES = {
  HEIGHT: 'height',
  WIDTH: 'width',
  FILL: 'fill',
  AUTO: true
}

export const A11Y_TRANSFORMS = {
  [A11Y_TYPES.DARK_MODE]: { effect: 'tint:75:black' },
  [A11Y_TYPES.BRIGHT_MODE]: { effect: 'tint:50:white' },
  [A11Y_TYPES.MONOCHROME]: { effect: 'grayscale' },
  [A11Y_TYPES.COLOR_BLIND]: { effect: 'assist_colorblind' }
};

export const LAZY_LOADING = 'lazy'

export const PLACEHOLDER_OPTIONS = {
  [PLACEHOLDER_TYPES.VECTORIZE]: {
    effect: 'vectorize:3:0.1', fetch_format: 'svg'
  },
  [PLACEHOLDER_TYPES.PIXELATE]: {
    effect: 'pixelate', quality: 1, fetch_format: 'auto'
  },
  [PLACEHOLDER_TYPES.BLUR]: {
    effect: 'blur:2000', quality: 1, fetch_format: 'auto'
  },
  [PLACEHOLDER_TYPES.PREDOMINANT]: predominantColorTransform,
  [PLACEHOLDER_TYPES.LQIP]: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      crop: "scale",
      width: "20",
      quality: "auto"
    },
    { crop: "scale", width: "$nw", height: "$nh" }
  ],
  [PLACEHOLDER_TYPES.COLOR]: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      crop: "scale",
      width: "1",
      quality: "1"
    },
    { crop: "scale", width: "$nw", height: "$nh" }
  ],
}

export const progressive = { flags: ["progressive"] }

export const predominantColorTransformPxl = [
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 1, height: 1, gravity: 'north_east'},
  {fetch_format: 'auto', quality: 'auto'}];

/**TO DO - remove in next PR */
export const placeholderTransformations = {
  lqip: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      crop: 'scale',
      width: "20",
      quality: "auto"
    },
    { crop: "scale", width: "$nw", height: "$nh" }
  ],
  color: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      crop: "scale",
      width: "1",
      quality: "1"
    },
    { crop: "scale", width: "$nw", height: "$nh" }
  ],
  'vectorize': [{effect: 'vectorize:3:0.1', fetch_format: 'svg'}],
  'pixelate': [{effect: 'pixelate', quality: 1, fetch_format: 'auto'}],
  'blur': [{effect: 'blur:2000', quality: 1, fetch_format: 'auto'}],
  'predominant-color': predominantColorTransform
}

export const COMPONENTS = {
  CldImage: 'cld-image',
  CldPlaceholder: 'cld-placeholder',
  CldVideo: 'cld-video',
  CldPoster: 'cld-poster',
  CldTransformation: 'cld-transformation',
  CldContext: 'cld-context'
}

export const RESPONSIVE_CSS_DEFAULT = Object.freeze({
  display: "block",
  width: "100%"
})

export const RESPONSIVE_CSS = {
  [RESPONSIVE_TYPES.HEIGHT]: {
    display: "block",
    height: "100%",
    width: "auto"
  },
  [RESPONSIVE_TYPES.AUTO]: RESPONSIVE_CSS_DEFAULT,
  [RESPONSIVE_TYPES.WIDTH]: RESPONSIVE_CSS_DEFAULT,
  [RESPONSIVE_TYPES.FILL]: {
    ...RESPONSIVE_CSS_DEFAULT,
    height: "100%"
  },
}

export const IMAGE_CLASSES = {
  LOADING: 'cld-image-loading',
  LOADED: 'cld-image-loaded',
  DEFAULT: 'cld-image'
}

export const PLACEHOLDER_CLASS = 'cld-placeholder'

export const IMAGE_WITH_PLACEHOLDER_CSS = {
  [IMAGE_CLASSES.LOADING]: {
    opacity: 0,
    position: 'absolute',
  }, 
  [PLACEHOLDER_CLASS]: {
    display: 'inline-block'
  }
}

export const CLD_IMAGE_WRAPPER_CLASS = "cld-image-wrapper"