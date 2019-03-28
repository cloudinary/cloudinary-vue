import { merge, normalizeObject } from "../utils";

/** Combines many objects
 * { publicId, configuration, transformation }
 * provided as arguments into one
 * @param  {...{ publicId, configuration, transformation }} transformations
 */
export function combineOptions(...options) {
  const { publicId } = merge.apply(this, options);

  const configuration = normalizeObject(
    merge.apply(
      this,
      options
        .filter(isObjectWithKeys)
        .map(_ => _.configuration)
        .filter(isObjectWithKeys)
    )
  );

  const transformation = normalizeObject(
    combineTransformations.apply(
      this,
      options
        .filter(isObjectWithKeys)
        .map(_ => _.transformation)
        .filter(isObjectWithKeys)
    )
  );

  return normalizeObject({
    publicId,
    configuration: isObjectWithKeys(configuration) ? configuration : undefined,
    transformation: isObjectWithKeys(transformation)
      ? transformation
      : undefined
  });
}

/**
 * Combines many transformations
 * provided as arguments
 * into one
 * @param  {...object} transformations
 */
export function combineTransformations(...transformations) {
  return transformations.filter(isObjectWithKeys).reduce((result, item) => {
    const transformation = []
      .concat(result.transformation)
      .concat(item.transformation)
      .filter(isObjectWithKeys);
    return merge(
      result,
      item,
      transformation.length === 0 ? {} : { transformation }
    );
  }, {});
}

function isObjectWithKeys(subject) {
  return (
    typeof subject === "object" && subject && Object.keys(subject).length > 0
  );
}
