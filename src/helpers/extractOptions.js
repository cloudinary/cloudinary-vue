import CldTransformation from "../components/CldTransformation/CldTransformation";
import { normalizeTransformation, normalizeConfiguration } from "./attributes";
import { compact } from "../utils";

export function extractOptions(props, children) {
  const configuration = normalizeConfiguration(props);
  const firstLayerTransformation = normalizeTransformation(props);
  const furtherTransformations = compact(
    (children || []).map(child =>
      child.componentOptions &&
      child.componentOptions.Ctor.options.render === CldTransformation.render
        ? normalizeTransformation(child.data.attrs)
        : null
    )
  );
  return {
    configuration,
    transformation: {
      ...firstLayerTransformation,
      transformation: [
        ...(firstLayerTransformation.transformation
          ? firstLayerTransformation.transformation
          : []),
        ...furtherTransformations
      ]
    }
  };
}
