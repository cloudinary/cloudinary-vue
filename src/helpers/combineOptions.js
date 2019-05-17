import { merge, compact } from "../utils";

/** Combines many objects
 * { publicId, configuration, transformation }
 * provided as arguments into one
 * @param  {...{ publicId, configuration, transformation }} transformations
 */
export function combineOptions(...options) {
  const publicId = merge.apply(this, options).publicId;

  const configuration = compact(
    merge.apply(
      this,
      compact(compact(options).map(option => option.configuration))
    )
  );

  const transformation = compact(
    combineTransformationComponents.apply(
      this,
      compact(compact(options).map(option => option.transformation))
    )
  );

  return compact({
    publicId,
    configuration: Object.keys(configuration).length
      ? configuration
      : undefined,
    transformation: Object.keys(transformation).length
      ? transformation
      : undefined
  });
}

/**
 * Combines many transformations
 * provided as arguments
 * into one
 * @param  {...object} transformationComponents
 */
export function combineTransformationComponents(...transformationComponents) {
  return compact(transformationComponents).reduce((result, item) => {
    const transformation = compact(
      [].concat(result.transformation).concat(item.transformation)
    );
    return merge(
      result,
      item,
      transformation.length === 0 ? {} : { transformation }
    );
  }, {});
}
