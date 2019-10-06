import { Cloudinary } from "cloudinary-core";
import { merge } from "../utils";

const placeholderTransformations = {
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
  ],
  pixelate: [{ effect: "pixelate:100" }]
};

/** Get media URL with some transformations
 * that will make the image lighter
 * so it can serve as a placeholder
 * for an actual image
 *
 * @param {'lqip'|'color'|'pixelate'} mode How savings should be made
 * @param {Object} options All currently gathered options of the resource request
 */
export function getPlaceholderURL(
  mode,
  publicId,
  configuration,
  transformation
) {
  if (typeof mode === "string") {
    if (mode in placeholderTransformations) {
      return Cloudinary.new(configuration).url(
        publicId, {
          ...transformation,
          transformation: [
            ...(transformation.transformation || []),
            ...placeholderTransformations[mode]
          ]
        }
      );
    }
    return mode;
  }
  return "";
}
