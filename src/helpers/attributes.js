import { Transformation, Util, Configuration } from "cloudinary-core";
import { formatObject, compact, pick, omit } from "../utils";

/** List of all configuration fields as they are needed in components attributes */
export const configuration = Configuration.CONFIG_PARAMS.map(Util.camelCase);

/** List of all transformation fields as they are needed in components attributes */
export const transformation = Transformation.PARAM_NAMES.map(
  Util.camelCase
).filter(name => configuration.indexOf(name) < 0);

/** Extract configuration options for provided object */
export function normalizeConfiguration(cfg) {
  return Util.withSnakeCaseKeys(
    formatObject(compact(pick(cfg, configuration)), {
      secure: v => (typeof v === "boolean" ? v : v === "true")
    })
  );
}

/** Extract transformation options for provided object */
export function normalizeTransformation(cfg) {
  return Util.withSnakeCaseKeys(compact(pick(cfg, transformation)));
}

/** Extract fields that are not used for configuration nor transformation in provided object */
export function normalizeRest(cfg) {
  return compact(omit(cfg, transformation.concat(configuration)));
}
