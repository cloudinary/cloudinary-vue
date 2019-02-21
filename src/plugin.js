import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

import CldContext from "./components/CldContext";
import CldImage from "./components/CldImage";
import CldPoster from "./components/CldPoster";
import CldTransformation from "./components/CldTransformation";
import CldVideo from "./components/CldVideo";
import CldPicture from "./components/CldPicture";

export function install(Vue, options) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }
  Vue.CldInstalled = true;

  options = options || {};

  const getComponentName = name =>
    !options.components
      ? name
      : options.components instanceof Array &&
        options.components.indexOf(name) >= 0
      ? name
      : typeof options.components === "object"
      ? options.components[name] === true
        ? name
        : typeof options.components[name] === "string"
        ? options.components[name]
        : null
      : null;

  if (getComponentName("CldContext") != null) {
    Vue.component(getComponentName("CldContext"), CldContext);
  }
  if (getComponentName("CldImage") != null) {
    Vue.component(getComponentName("CldImage"), CldImage);
  }
  if (getComponentName("CldPoster") != null) {
    Vue.component(getComponentName("CldPoster"), CldPoster);
  }
  if (getComponentName("CldTransformation") != null) {
    Vue.component(getComponentName("CldTransformation"), CldTransformation);
  }
  if (getComponentName("CldVideo") != null) {
    Vue.component(getComponentName("CldVideo"), CldVideo);
  }
  if (getComponentName("CldPicture") != null) {
    Vue.component(getComponentName("CldPicture"), CldPicture);
  }

  if (options.configuration) {
    Vue.prototype.CldGlobalContextState = new State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}
