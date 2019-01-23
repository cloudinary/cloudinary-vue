`CLDPoster` is an optional `CLDVideo` child that will specify image resource to be provided to `poster` attribute of the `video` element.

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
