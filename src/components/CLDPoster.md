`CLDPoster` is an optional `CLDVideo` child that will specify image resource to be provided to `poster` attribute of the `video` element.

### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CLDImage` and `CLDTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Component instance does not emit any events.

### Usage

```jsx
<CLDVideo cloudName="demo" publicId="dog" controls>
  <CLDPoster cloudName="demo" publicId="small_dinosaur" />
</CLDVideo>
```

`CLDPoster` can be additionally configured with `CLDTransformation` (although it is capable of reading transformation attributes provided directly to it's instance).

```vue
<template>
  <CLDContext cloudName="demo">
    <CLDVideo publicId="dog" controls>
      <CLDTransformation crop="fill" width="480" height="320" />

      <CLDPoster publicId="small_dinosaur">
        <CLDTransformation effect="sharpen:100" />

        <CLDTransformation
          crop="fill"
          width="480"
          height="320"
          v-bind:dpr="devicePixelRatio"
        />

        <CLDTransformation v-bind:dpr="devicePixelRatio" />
      </CLDPoster>
    </CLDVideo>
  </CLDContext>
</template>

<script>
export default {
  data() {
    return {
      devicePixelRatio: window.devicePixelRatio
    };
  }
};
</script>
```
