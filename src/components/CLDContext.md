This component can be used to provide complete or extend other configuration options set, also provided with `CLDContext` or as plugin installation options.

### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CLDContext` outputs a `div` element and does not have any events on it's own.

### Usage

```vue
<template>
  <!-- Context that carries an account name -->
  <CLDContext cloudName="demo">
    <!--  -->
    <!-- A context that does not require secure connection -->
    <CLDContext secure="false">
      <CLDImage publicId="face_top" v-on:load.native="confirmLoad">
        <CLDTransformation
          overlay="text:Arial_45:HTTP"
          background="red"
          radius="5"
          opacity="50"
          color="white"
        />
        <CLDTransformation crop="scale" :height="200" />
      </CLDImage>
    </CLDContext>

    <!--  -->
    <!-- A context that sets secure connection requirement for media inside it -->
    <CLDContext secure="true">
      <CLDImage publicId="face_top">
        <CLDTransformation
          overlay="text:Arial_45:HTTPS"
          background="green"
          radius="5"
          opacity="50"
          color="white"
        />
        <CLDTransformation crop="scale" :height="200" />
      </CLDImage>
    </CLDContext>
  </CLDContext>
</template>

<script>
export default {
  methods: {
    confirmLoad(event) {
      console.log(event.target.src, "loaded");
    }
  }
};
</script>
```
