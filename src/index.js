import * as plugin from "./plugin";
import CLDContext from "./components/CLDContext";
import CLDImage from "./components/CLDImage";
import CLDVideo from "./components/CLDVideo";
import CLDPoster from "./components/CLDPoster";
import CLDTransformation from "./components/CLDTransformation";

const components = {
  CLDContext,
  CLDImage,
  CLDVideo,
  CLDPoster,
  CLDTransformation
};

export default plugin;

export {
  plugin,
  components,
  CLDContext,
  CLDImage,
  CLDVideo,
  CLDPoster,
  CLDTransformation
};
