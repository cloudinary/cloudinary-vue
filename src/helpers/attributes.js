import { Transformation, Util, Configuration } from "cloudinary-core";
import { formatObject, normalizeObject, pick, omit } from "../utils";

export const configuration = Configuration.CONFIG_PARAMS.map(Util.camelCase);
export const transformation = Transformation.PARAM_NAMES.map(Util.camelCase);

export function normalizeConfiguration(cfg) {
  return Util.withSnakeCaseKeys(
    formatObject(normalizeObject(pick(cfg, configuration)), {
      secure: v => (typeof v === "boolean" ? v : v === "true")
    })
  );
}

export function normalizeTransformation(cfg) {
  return Util.withSnakeCaseKeys(normalizeObject(pick(cfg, transformation)));
}

export function normalizeRest(cfg) {
  return normalizeObject(omit(cfg, transformation.concat(configuration)));
}
