import { install } from "./plugin";
import CldContext from "./components/CldContext";
import CldImage from "./components/CldImage";
import CldVideo from "./components/CldVideo";
import CldPoster from "./components/CldPoster";
import CldTransformation from "./components/CldTransformation";

const plugin = { install };

export {
  plugin,
  plugin as default,
  CldContext,
  CldImage,
  CldVideo,
  CldPoster,
  CldTransformation,
  install
};
