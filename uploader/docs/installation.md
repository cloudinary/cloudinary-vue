> ⚠️ `CldUploader` is a component that is an integration between Vue, Cloudinary Vue SDK and existing uploader vanilla JS component.

Asynchronous way - the component will not be a part of initial bundle:

```js static
Vue.component("CldUploader", async () => {
  /*
    - An asynchronous import -
      This should force webpack
      and other contemporary bundlers
      to perform code-splitting,
      so initial bundle size
      is not affected by this component
    */
  const CldUploaderModule = await import("cloudinary-vue/uploader");
  return CldUploaderModule.CldUploader;
});
```

...however there is nothing wrong with synchronous initialization.

```js static
import { CldUploader } from "cloudinary-vue/viewer";
Vue.component("CldUploader", CldUploader);
```

Due to this component weight however, it is not installed with plugin from the main package.
