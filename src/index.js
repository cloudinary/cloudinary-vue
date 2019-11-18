import * as plugin from "./plugin";
import CldContext from "./components/CldContext/CldContext";
import CldImage from "./components/CldImage/CldImage";
import CldVideo from "./components/CldVideo/CldVideo";
import CldPoster from './components/CldVideo/CldPoster';
import CldTransformation from './components/CldTransformation/CldTransformation';

const allComponents = { CldContext, CldImage, CldVideo, CldTransformation, CldPoster };

const Cloudinary = {
  install: (Vue, options = {}) => {
    plugin.install.call(plugin, Vue, options.components ? options : { ...options, components: allComponents })
  }
};

export {
  Cloudinary as default,
  CldContext, CldImage, CldVideo, CldTransformation, CldPoster
};
