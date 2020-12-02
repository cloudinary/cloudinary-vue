export function install(Vue, options = {}) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }

  Vue.CldInstalled = true;

  initComponents(Vue, options);
}

function registerComponents(Vue, components = {}, defaultConfigurations = {}) {
  /* eslint-disable-next-line */
  if (!defaultConfigurations) { console.warn('🛑 There is no default configuration for Cloudinary found!') }

  for (let key in components) {
    const component = components[key];

    if (component) {
      const data = component.data ? component.data() : {}

      Vue.component(key, {
        ...component,
        data() {
          return {
            ...data,
            defaultConfigurations
          }
        }
      });
    }
  }
}

function initComponents(Vue, options) {
  const configuration = options.configuration;
  const components = Array.isArray(options.components) ? options.components.reduce((obj, component) => ({
    ...obj,
    [component.name]: component
  }), {}) : options.components;

  registerComponents(Vue, components, configuration);
}
