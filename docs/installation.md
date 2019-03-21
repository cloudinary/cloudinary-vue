## Install the library with npm

1. Download the whole package from https://drive.google.com/open?id=1T-zdNrruHfb1RqpQ0OjRp8oBoeoN52bo
1. Run `npm install [path_to_download]/cloudinary-vue-0.9.0-rc.1.tgz`

### Import and attach a plugin

```js static
import Vue from "vue";
import Cloudinary from "cloudinary-vue";

Vue.use(Cloudinary);
// ..or provide some global cloudinary service configuration..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" }
  //             ^ cloudinary configuration options
});
// ..or specify which components to install..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: ["CldImage"]
});
// ..or rename all or some components..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldImage: true,
    // component name
    //        ^ true just turns if on
    CldTransformation: "CldXf"
    //                 ^ a custom name
  }
});
// ..or rename using new names as keys.
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldXf: "CldTransformation"
  }
});
```

Also, in application stylesheet, you should import `cloudinary-vue` styles:

```css
@import "cloudinary-vue/dist/Cloudinary.css";
```

## Install the library with unpkg.com

> (not supported yet)
