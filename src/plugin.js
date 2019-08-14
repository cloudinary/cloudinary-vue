import { State } from "./reactive/State";
import { normalizeConfiguration } from "./helpers/attributes";

import CldContext from "./components/CldContext";
import CldImage from "./components/CldImage";
import CldPoster from "./components/CldPoster";
import CldTransformation from "./components/CldTransformation";
import CldVideo from "./components/CldVideo";
import { find } from "./utils";

const allComponents = [
  CldContext,
  CldImage,
  CldPoster,
  CldTransformation,
  CldVideo
];

export function install(Vue, options) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }
  Vue.CldInstalled = true;

  options = options || {};

  allComponents.forEach(component => {
    const userComponentName = getUserComponentName(
      options.components,
      component.name
    );
    if (userComponentName != null) {
      Vue.component(userComponentName, component);
    }
  });

  if (options.configuration) {
    Vue.prototype.cldGlobalContextState = new State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}

function getUserComponentName(components, name) {
  if (!components) {
    return name;
  }

  // { components: ['CldImage'] }
  // and
  // { components: [CldImage] }
  if (Array.isArray(components)) {
    const entry = find(
      components,
      component =>
        (typeof component === "string" && component === name) ||
        (typeof component === "object" &&
          component != null &&
          component.name === name)
    );
    if (entry == null) {
      return null;
    }
    if (typeof entry === "string") {
      return entry;
    }
    return entry.name;
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
  // and
  // { components: { CloudinaryImage: CldImage } }
  const found = find(
    Object.keys(components),
    k =>
      (typeof components[k] === "string" && components[k] === name) ||
      (typeof components[k] === "object" &&
        components[k] != null &&
        components[k].name === name)
  );
  return found === undefined ? null : found;
}
