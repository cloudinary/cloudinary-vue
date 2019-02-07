import { merge, omit, flatten } from "../utils";

export function combineOptions(...options) {
  const publicId = merge.apply(this, options).publicId;

  const configuration = merge.apply(
    this,
    options.map(_ => _.configuration).filter(isObjectWithKeys)
  );

  const transformation = combineTransformations.apply(
    this,
    options.map(_ => _.transformation).filter(isObjectWithKeys)
  );

  return {
    publicId,
    configuration,
    transformation
  };
}

export function combineTransformations(...transformations) {
  return transformations.reduce((result, item) => {
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
