import { Transformation, Util, Configuration } from "cloudinary-core";
import { pick } from "../utils";
import { find } from '../utils';

export const hasZeroSizeTransformation = (transformations) => find(transformations, t => t.width === 0 || t.height === 0);

/** List of all configuration fields as they are needed in components attributes */
export const configuration = Configuration.CONFIG_PARAMS.map(Util.camelCase);

/** List of all transformation fields as they are needed in components attributes */
export const transformation = Transformation.methods;

const mappedCfgMethods = transformation.concat(configuration);

/** Extract configuration options for provided object */
export function normalizeConfiguration(cfg = {}) {
  const formattedConfigs = Util.withSnakeCaseKeys(cfg);

  if (formattedConfigs.secure) {
    formattedConfigs.secure = formattedConfigs.secure === true || formattedConfigs.secure === 'true'
  }

  return pick(formattedConfigs, Configuration.CONFIG_PARAMS);
}

/** Extract transformation options for provided object */
export function normalizeTransformation(cfg = {}) {
  return Util.withSnakeCaseKeys(pick(cfg, transformation));
}

/** Extract fields that are not used for configuration nor transformation in provided object */
export const normalizeNonCloudinary = (currConfig = {}) => {
  const cleanCfgs = {};

  Object.keys(currConfig).forEach(key => {
    if (mappedCfgMethods.indexOf(key) === -1) {
      cleanCfgs[key] = currConfig[key];
    } 
  });
  return cleanCfgs;
}

export const getHTMLAttributes = (options) => Transformation.new(
  options
).toHtmlAttributes();
