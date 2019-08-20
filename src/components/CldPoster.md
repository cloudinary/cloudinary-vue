### Attributes

Refer to the base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by the `CldPoster` component.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

This component does not have any events.

### Usage

```jsx
<cld-video cloudName="demo" publicId="dog" controls>
  <cld-poster cloudName="demo" publicId="small_dinosaur" />
</cld-video>
```

`CldPoster` can also be given [transformation](https://cloudinary.com/documentation/image_transformation_reference) data for the image by setting attributes on the component itself or with a [CldTransformation](#cldtransformation) child component.

```vue
<template>
  <cld-context cloudName="demo">
    <cld-video publicId="dog" controls>
      <cld-transformation crop="fill" width="480" height="320" />

      <cld-poster publicId="small_dinosaur">
        <cld-transformation effect="sharpen:100" />

        <cld-transformation
          crop="fill"
          width="480"
          height="320"
          v-bind:dpr="devicePixelRatio"
        />

        <cld-transformation v-bind:dpr="devicePixelRatio" />
      </cld-poster>
    </cld-video>
  </cld-context>
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
