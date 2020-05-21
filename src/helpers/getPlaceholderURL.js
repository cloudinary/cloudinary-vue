import { Cloudinary } from "cloudinary-core";

import {placeholderTransformations, predominantColorTransformPxl} from '../constants';

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
      let placeholderTransformation = {};
      let hasWidth = transformation.width;
      let hasHeight = transformation.height;
      let isPredominant = mode === 'predominant-color';

      if (hasWidth && hasHeight && isPredominant) {
        placeholderTransformation = predominantColorTransformPxl;
      } else{
        placeholderTransformation = placeholderTransformations[mode];
      }

      return Cloudinary.new(configuration).url(
        publicId, {
          ...transformation,
          transformation: [
            ...(transformation.transformation || []),
            ...placeholderTransformation
          ]
        }
      );
    } else {
      // eslint-disable-next-line
      console.warn('Unknown placeholder selected: ', mode);
    }
    return mode;
  }

  return "";
}
