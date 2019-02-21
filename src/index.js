import * as plugin from "./plugin";
import CldContext from "./components/CldContext";
import CldImage from "./components/CldImage";
import CldVideo from "./components/CldVideo";
import CldPoster from "./components/CldPoster";
import CldTransformation from "./components/CldTransformation";

const components = {
  CldContext,
  CldImage,
  CldVideo,
  CldPoster,
  CldTransformation
};

export default plugin;

export {
  plugin,
  components,
  CldContext,
  CldImage,
  CldVideo,
  CldPoster,
  CldTransformation
};
