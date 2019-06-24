import { Util } from "cloudinary-core";

export function merge(...parts) {
  return Util.assign({}, ...parts);
}
