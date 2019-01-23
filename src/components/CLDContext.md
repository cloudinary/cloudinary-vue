This component can be used to provide complete or extend other configuration options set, also provided with `CLDContext` or as plugin installation options.

### Usage

```vue
<template>
  <!-- Context that carries an account name -->
  <CLDContext cloudName="demo">
    <!--  -->
    <!-- A context that does not require secure connection -->
    <CLDContext secure="false">
      <CLDImage publicId="face_top" />

      <CLDTransformation :transformation="nonSecureVisualOptions" />
    </CLDContext>

    <!--  -->
    <!-- A context that sets secure connection requirement for media inside it -->
    <CLDContext secure="true">
      <CLDImage publicId="face_top" />

      <CLDTransformation :transformation="secureVisualOptions" />
    </CLDContext>
  </CLDContext>
</template>

<script>
export default {
  data() {
    return {
      nonSecureVisualOptions: [
        {
          overlay: "text:Arial_45:HTTP",
          background: "red",
          radius: 5,
          opacity: 50,
          color: "white"
        },
        { crop: "scale", height: 200 }
      ],
      secureVisualOptions: [
        {
          overlay: "text:Arial_45:HTTPS",
          background: "green",
          radius: 5,
          opacity: 50,
          color: "white"
        },
        { crop: "scale", height: 200 }
      ]
    };
  }
};
</script>
```
