import { Cloudinary } from "cloudinary-core";
import { combineOptions } from "./combineOptions";

/** Get media URL with some transformations
 * that will make the image lighter
 * so it can serve as a placeholder
 * for an actual image
 *
 * @param {'lqip'|'color'|'pixelate'} mode How savings should be made
 * @param {Object} options All currently gathered options of the resource request
 */
export function getPlaceholderURL(mode, options) {
  const placeholderOptions = combineOptions(
    options,
    {
      lqip: {
        transformation: {
          transformation: [
            {
              variables: [["$nh", "ih"], ["$nw", "iw"]],
              crop: "scale",
              width: "20",
              quality: "auto"
            },
            { crop: "scale", width: "$nw", height: "$nh" }
          ]
        }
      },
      color: {
        transformation: {
          transformation: [
            {
              variables: [["$nh", "ih"], ["$nw", "iw"]],
              crop: "scale",
              width: "1",
              quality: "1"
            },
            { crop: "scale", width: "$nw", height: "$nh" }
          ]
        }
      },
      pixelate: {
        transformation: {
          transformation: [{ effect: "pixelate:100" }]
        }
      }
    }[mode]
  );

  return Cloudinary.new(placeholderOptions.configuration).url(
    placeholderOptions.publicId,
    placeholderOptions.transformation
  );
}
