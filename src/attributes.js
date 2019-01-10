import { Transformation, Util, Configuration } from "cloudinary-core";
import { format, normalize, pick } from "./utils";

export const configuration = Configuration.CONFIG_PARAMS.map(Util.camelCase);
export const transformation = Transformation.PARAM_NAMES.map(Util.camelCase);

export function normalizeConfiguration(cfg) {
  return format(normalize(pick(cfg, configuration)), {
    secure: v => (typeof v === "boolean" ? v : v === "true")
  });
}

export function normalizeTransformation(cfg) {
  return format(normalize(pick(cfg, transformation)), {});
}
