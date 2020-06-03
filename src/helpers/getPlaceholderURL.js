import { Cloudinary } from "cloudinary-core";

import {placeholderTransformations, predominantColorTransformPxl} from '../constants';

/** Get media URL with some transformations
 * that will make the image lighter
 * so it can serve as a placeholder
 * for an actual image
 *
 * @param {'lqip'|'color'|'pixelate'|'predominant-color'|'vectorize'|'blur'} type Placeholder size-saving strategy
 * @param {string} publicId
 * @param {object} configuration - Cloudianry delivery configuration, such as cloudName
 * @param {Object} transformation A cloudinary Transfomration Object
 */
export function getPlaceholderURL(
  type,
  publicId,
  configuration,
  transformation
) {
  // The default type is an empty string,
  // so we need to ensure something was passed for proper warnings later
  if (typeof type === "string" && type !== "") {
    if (type in placeholderTransformations) {
      let placeholderTransformation = {};
      let hasWidth = transformation.width;
      let hasHeight = transformation.height;
      let isPredominant = type === 'predominant-color';

      if (hasWidth && hasHeight && isPredominant) {
        placeholderTransformation = predominantColorTransformPxl;
      } else{
        placeholderTransformation = placeholderTransformations[type];
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
      console.warn('Unknown placeholder selected: ', type);
    }
    return type;
  }

  return "";
}
