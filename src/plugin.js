import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

import CldContext from "./components/CldContext";
import CldImage from "./components/CldImage";
import CldPoster from "./components/CldPoster";
import CldTransformation from "./components/CldTransformation";
import CldVideo from "./components/CldVideo";
import CldPicture from "./components/CldPicture";
import CldSource from "./components/CldSource";

export function install(Vue, options) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }
  Vue.CldInstalled = true;

  options = options || {};

  [
    CldContext,
    CldImage,
    CldPoster,
    CldTransformation,
    CldVideo,
    CldPicture,
    CldSource
  ].forEach(component => {
    const userComponentName = getUserComponentName(
      options.components,
      component.name
    );
    if (userComponentName != null) {
      Vue.component(userComponentName, component);
    }
  });

  if (options.configuration) {
    Vue.prototype.CldGlobalContextState = new State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}

function getUserComponentName(components, name) {
  if (!components) {
    return name;
  }

  // { components: ['CldImage'] }
  if (Array.isArray(components)) {
    return components.indexOf(name) >= 0 ? name : null;
  }
  // { components: { CldImage: true } }
  if (typeof components[name] === "boolean") {
    return components[name] === true ? name : null;
  }
  // { components: { CldImage: 'CloudinaryImage' } }
  if (typeof components[name] === "string") {
    return components[name];
  }
  // { components: { CloudinaryImage: 'CldImage' } }
  const keys = Object.keys(components);
  const values = keys.map(key => components[key]);
  if (values.indexOf(name) >= 0) {
    return keys[values.indexOf(name)];
  }

  return null;
}
