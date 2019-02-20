import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

import CLDContext from "./components/CLDContext";
import CLDImage from "./components/CLDImage";
import CLDPoster from "./components/CLDPoster";
import CLDTransformation from "./components/CLDTransformation";
import CLDVideo from "./components/CLDVideo";
import CLDPicture from "./components/CLDPicture";

export function install(Vue, options) {
  if (Vue.CLDInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }
  Vue.CLDInstalled = true;

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

  if (getComponentName("CLDContext") != null) {
    console.log("Installed CLDContext as", getComponentName("CLDContext"));
    Vue.component(getComponentName("CLDContext"), CLDContext);
  }
  if (getComponentName("CLDImage") != null) {
    console.log("Installed CLDImage as", getComponentName("CLDImage"));
    Vue.component(getComponentName("CLDImage"), CLDImage);
  }
  if (getComponentName("CLDPoster") != null) {
    console.log("Installed CLDPoster as", getComponentName("CLDPoster"));
    Vue.component(getComponentName("CLDPoster"), CLDPoster);
  }
  if (getComponentName("CLDTransformation") != null) {
    console.log(
      "Installed CLDTransformation as",
      getComponentName("CLDTransformation")
    );
    Vue.component(getComponentName("CLDTransformation"), CLDTransformation);
  }
  if (getComponentName("CLDVideo") != null) {
    console.log("Installed CLDVideo as", getComponentName("CLDVideo"));
    Vue.component(getComponentName("CLDVideo"), CLDVideo);
  }
  if (getComponentName("CLDPicture") != null) {
    console.log("Installed CLDPicture as", getComponentName("CLDPicture"));
    Vue.component(getComponentName("CLDPicture"), CLDPicture);
  }

  if (options.configuration) {
    Vue.prototype.CLDGlobalContextState = new State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}
