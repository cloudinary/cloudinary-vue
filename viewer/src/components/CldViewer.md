### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CldViewer` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Installation

> ⚠️ `CldViewer` is a component that weights quite a lot. That is why we separated it into its own package and suggest initiallizing it asynchronously. Vue supports it out of the box, so the simplest way to do so would be...

```js static
Vue.component("CldViewer", async () => {
  /*
    - An asynchronous import -
      This should force webpack
      and other contemporary bundlers
      to perform code-splitting,
      so initial bundle size
      is not affected by this component
    */
  const CldViewerModule = await import("cloudinary-vue/viewer");
  return CldViewerModule.CldViewer;
});
```

...however there is nothing wrong with synchronous initialization.

```js static
import { CldViewer } from "cloudinary-vue/viewer";
Vue.component("CldViewer", CldViewer);
```

Due to this component weight however, it is not installed with plugin from the main package.

### Usage

`CldViewer` is actually quite similar to `CldVideo`.

```jsx
<cld-viewer cloudName="demo" publicId="dog" controls>
  <cld-transformation effect="sepia:90" />
</cld-viewer>
```

Just like the [`CldImage`](#Cldimage), `CldViewer` will get its configuration from plugin provided options, parent `CldContext` component instance and `CldTransformation` component children instances.
