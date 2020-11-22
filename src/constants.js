export const ACCESSIBILITY_TRANSFORMATIONS = {
  'darkmode': {effect: 'tint:75:black'},
  'brightmode': {effect: 'tint:50:white'},
  'monochrome': {effect: 'grayscale'},
  'colorblind': {effect: 'assist_colorblind'}
};

export const predominantColorTransformPxl = [
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 1, height: 1, gravity: 'north_east'},
  {fetch_format: 'auto', quality: 'auto'}];

export const predominantColorTransform  = [
  {variables: [['$currWidth', 'w'], ['$currHeight', 'h']]},
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 10, height: 10, gravity: 'north_east'},
  {width: '$currWidth', height: '$currHeight', crop: 'fill'},
  {fetch_format: 'auto', quality: 'auto'}];

export const PLACEHOLDER_TRANSFORMATIONS = {
  vectorize: [{effect: 'vectorize:3:0.1', fetch_format: 'svg'}],
  pixelate: [{effect: 'pixelate', quality: 1, fetch_format: 'auto'}],
  blur: [{effect: 'blur:2000', quality: 1, fetch_format: 'auto'}],
  'predominant-color': predominantColorTransform,
  lqip: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      crop: "scale",
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
  ]
};

export const progressive = { flags: ["progressive"] }

export const COMPONENTS = {
  CldImage: 'CldImage',
  CldPlaceholder: 'CldPlaceholder',
  CldVideo: 'CldVideo',
  CldPoster: 'CldPoster',
  CldTransformation: 'CldTransformation',
  CldContext: 'CldContext'
}

export const RESPONSIVE_CSS_DEFAULT = Object.freeze({
  display: "block",
  width: "100%"
})

export const RESPONSIVE_CSS = {
  height: {
    display: "block",
    height: "100%",
    width: "auto"
  },
  true: RESPONSIVE_CSS_DEFAULT,
  auto: RESPONSIVE_CSS_DEFAULT,
  width: RESPONSIVE_CSS_DEFAULT,
  fill: {
    ...RESPONSIVE_CSS_DEFAULT,
    height: "100%"
  },
}

export const LAZY_LOADING = 'lazy'

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