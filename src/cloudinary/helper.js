import { A11Y_TRANSFORMS, progressive, PLACEHOLDER_OPTIONS, COMPONENTS, predominantColorTransformPxl } from '../constants';

/**
 * 
 * @param {Boolean} enable 
 * @returns {Object} transformation object for progressive effect
 */
const addProgressive = (enable = false) => {
  return enable ? progressive : {}
}

/**
 * 
 * @param {'darkmode'|'brightmode'|'monochrome'|'colorblind'} type 
 * @returns {Object} transformation effect for a11y support based on type
 */
const addA11y = (type) => {
  return A11Y_TRANSFORMS[type] || {}
}

/**
 * 
 * @param {Object} object contains accessibility, withProgressive, cldTransforms and baseOptions
 * @returns {Object} options for generating delivery URL of a media component 
 */
export const computeOptions = ({ accessibility, withProgressive, baseOptions = {}, extra = [] }) => {
  const transformation = [...extra]
  const a11y = addA11y(accessibility)
  const progressive = addProgressive(withProgressive)

  transformation.push(progressive)
  transformation.push(a11y)

  return {
    ...baseOptions,
    transformation,
  }
}

/**
 * 
 * @param {Object} baseOptions 
 * @param {Object} extra 
 * @returns {Object} new options Object with extra inside transformation
 */
export const extendOptions = (baseOptions = {}, extra) => {
  let transformation = baseOptions.transformation ? [...baseOptions.transformation] : []

  if (Array.isArray(extra)) {
    extra.forEach(effect => transformation.push(effect))
  } else if (extra) {
    transformation.push(extra)
  }

  return {
    ...baseOptions,
    transformation
  }
}

/**
 * 
 * @param {'lqip'|'color'|'pixelate'|'predominant-color'|'vectorize'|'blur'} type 
 * @param {Option} imgOptions 
 * @returns {Object} options for generating delivery URL of a placeholder image
 */
export const computePlaceholder = (type, imgOptions = {}) => {
  const isPredominantWithSize = type === 'predominant-color' && imgOptions.width && imgOptions.height
  const placeholder = isPredominantWithSize ? predominantColorTransformPxl : (PLACEHOLDER_OPTIONS[type] || {})

  return extendOptions(imgOptions, placeholder)
}

/**
 * 
 * @param {Array<VNode>} children - nested Vue components
 * @returns {Object | null} cld-placeholder component if found.
 */
export const getCldPlaceholder = (children = []) => {
  return children?.find(child => isCldPlaceholder(child))
}

export const getCldPoster = (children = []) => {
  return children?.find(child => isCldPoster(child))
}

/**
 * @param {VNode} component 
 * @returns {Boolean} true if component is CldPlaceholder
 */
export const isCldPlaceholder = (component) => component.componentOptions?.Ctor?.extendOptions?.name === COMPONENTS.CldPlaceholder

export const isCldPoster = (component) => component.componentOptions?.Ctor?.extendOptions?.name === COMPONENTS.CldPoster