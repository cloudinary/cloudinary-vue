import { Cloudinary } from "cloudinary-core";
import { combineOptions } from "./combineOptions";

export function getPlaceholderURL(options, mode) {
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
