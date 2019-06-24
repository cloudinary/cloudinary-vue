import CldTransformation from "../components/CldTransformation";
import CldPoster from "../components/CldPoster";

export function rejectTransformations(slot) {
  return slot == null
    ? []
    : slot.filter(
        child =>
          !(
            child.componentOptions &&
            (child.componentOptions.Ctor.options.render ===
              CldTransformation.render ||
              child.componentOptions.Ctor.options.render === CldPoster.render)
          )
      );
}
