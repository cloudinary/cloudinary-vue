import { merge, normalizeObject } from "../utils";

export function combineOptions(...options) {
  const publicId = merge.apply(this, options).publicId;

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
    publicId: publicId ? publicId : undefined,
    configuration: isObjectWithKeys(configuration) ? configuration : undefined,
    transformation: isObjectWithKeys(transformation)
      ? transformation
      : undefined
  });
}

export function combineTransformations(...transformations) {
  return transformations.filter(isObjectWithKeys).reduce((result, item) => {
    const transformation = []
      .concat(result.transformation)
      .concat(item.transformation)
      .filter(isObjectWithKeys);
    return merge(
      result,
      item,
      transformation.length
        ? {
            transformation
          }
        : {}
    );
  }, {});
}

function isObjectWithKeys(subject) {
  return (
    typeof subject === "object" && subject && Object.keys(subject).length > 0
  );
}
