This component can be used to provide complete or extend other configuration options set, also provided with `CldContext` or as plugin installation options.

### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration and transformations options.

See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by the `CldContext` components.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldContext` outputs a `div` element and does not have any events on it's own.

### Usage

```vue
<template>
  <!-- Context that carries an account name -->
  <cld-context cloudName="demo" style="display: flex">
    <!--  -->
    <!-- A context that does not require secure connection -->
    <cld-context
      secure="false"
      :transformation="[
        {
          overlay: 'text:Arial_45:HTTP',
          background: 'red',
          radius: '5',
          opacity: '50',
          color: 'white'
        },
        { crop: 'scale', height: 200 }
      ]"
    >
      <cld-image publicId="face_top" v-on:load.native="confirmLoad" />
    </cld-context>

    <!--  -->
    <!-- A context that sets secure connection requirement for media inside it -->
    <cld-context
      secure="true"
      :transformation="[
        {
          overlay: 'text:Arial_45:HTTPS',
          background: 'green',
          radius: '5',
          opacity: '50',
          color: 'white'
        },
        { crop: 'scale', height: 200 }
      ]"
    >
      <cld-image publicId="face_top" v-on:load.native="confirmLoad" />
    </cld-context>
  </cld-context>
</template>

<script>
export default {
  methods: {
    confirmLoad(event) {
      console.log(event.target.src, "loaded");
      // see the console!
    }
  }
};
</script>
```
