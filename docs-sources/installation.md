## Install the library with npm

Install the package in your project with

```bash
npm install cloudinary-vue
```

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
    CldVideo: "CldVid"
    //                 ^ a custom name
  }
});
// ..or rename using new names as keys.
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldVid: "CldVideo"
  }
});
```

## Use the library with unpkg.com

Add your HTML file:

```html
<script src="https://unpkg.com/cloudinary-vue"></script>
```
