import * as plugin from "./plugin";
import CldContext from "./components/CldContext/CldContext";
import CldImage from "./components/CldImage/CldImage";
import CldVideo from "./components/CldVideo/CldVideo";
import CldPoster from './components/CldVideo/CldPoster';
import CldTransformation from './components/CldTransformation/CldTransformation';
import CldPlaceholder from './components/CldPlaceholder/CldPlaceholder';

const Cloudinary = {
  install: (Vue, options = {}) => {
    plugin.install(Vue, options.components ? options : { ...options, components: { CldContext, CldImage, CldVideo, CldTransformation, CldPoster, CldPlaceholder }})
  }
};

export {
  Cloudinary as default,
  Cloudinary,
  CldContext, CldImage, CldVideo, CldTransformation, CldPoster, CldPlaceholder
};
