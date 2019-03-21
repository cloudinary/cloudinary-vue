> ⚠️ `CldVideoPlayer` is a component that weights quite a lot. That is why we separated it into its own package and suggest initiallizing it asynchronously. Vue supports it out of the box, so the simplest way to do so would be...

```js static
Vue.component("CldVideoPlayer", async () => {
  /*
    - An asynchronous import -
      This should force webpack
      and other contemporary bundlers
      to perform code-splitting,
      so initial bundle size
      is not affected by this component
    */
  const CldVideoPlayerModule = await import("cloudinary-vue/videoplayer");
  return CldVideoPlayerModule.CldVideoPlayer;
});
```

...however there is nothing wrong with synchronous initialization.

```js static
import { CldVideoPlayer } from "cloudinary-vue/videoplayer";
Vue.component("CldVideoPlayer", CldVideoPlayer);
```

Due to this component weight however, it is not installed with plugin from the main package.
