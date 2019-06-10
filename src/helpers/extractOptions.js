import CldTransformation from "../components/CldTransformation";
import { normalizeTransformation, normalizeConfiguration } from "./attributes";
import { combineOptions } from "./combineOptions";

export function extractOptions(props, children) {
  return combineOptions.apply(
    null,
    [
      {
        publicId: props.publicId,
        configuration: normalizeConfiguration(props),
        transformation: normalizeTransformation(props)
      }
    ].concat(
      (children || []).map(child =>
        child.componentOptions &&
        child.componentOptions.Ctor.options.render === CldTransformation.render
          ? {
              transformation: {
                transformation: [normalizeTransformation(child.data.attrs)]
              }
            }
          : {}
      )
    )
  );
}
