import { COMPONENTS } from '../constants'

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