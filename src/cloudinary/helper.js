import { progressive, PLACEHOLDER_TRANSFORMATIONS, COMPONENTS, predominantColorTransformPxl } from '../constants';

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
 * @param {Object} object contains accessibility, withProgressive, cldTransforms and baseOptions
 * @returns {Object} options for generating delivery URL of a media component 
 */
export const computeOptions = ({ accessibility, withProgressive, baseOptions = {}, extra = [] }) => {
  const transformation = [...extra]
  const progressive = addProgressive(withProgressive)

  transformation.push(progressive)

  const res = {
    ...baseOptions,
    transformation
  }

  if (accessibility) {
    res.accessibility = accessibility
  }

  return res
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
  const placeholder = isPredominantWithSize ? predominantColorTransformPxl : (PLACEHOLDER_TRANSFORMATIONS[type] || {})

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