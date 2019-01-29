import { merge, omit } from "../utils";

export function combineOptions(...options) {
  const publicId = merge.apply(this, options).publicId;
  const configuration = merge.apply(
    this,
    options.map(_ => _.configuration || {})
  );
  const transformation = combineTransformations.apply(
    this,
    options.map(option => option.transformation)
  );
  return {
    publicId,
    configuration,
    transformation
  };
}

export function combineTransformations(...transformations) {
  return transformations
    .filter(option => option != null)
    .reduce((result, item) => result.concat(item), [])
    .reduce(
      (result, item) =>
        "transformation" in item
          ? result
              .concat(omit(item, ["transformation"]))
              .concat(item.transformation)
          : result.concat(item),
      []
    )
    .filter(option => Object.keys(option).length > 0);
}
