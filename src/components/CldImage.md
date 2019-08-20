### Attributes

Refer to the base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by the `CldImage` component.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldImage` outputs an `img` element that does not have any events by default.

```vue
<template>
  <cld-image
    cloudName="demo"
    publicId="small_dinosaur"
    v-on:click.native="alert"
    :transformation="[
      {
        overlay: 'text:Arial_45:CLICK ME',
        background: 'red',
        radius: '10',
        opacity: '90',
        color: 'white'
      },
      {
        crop: 'scale',
        height: 100
      }
    ]"
  />
</template>
<script>
export default {
  methods: {
    alert() {
      alert("I've used a native event listener to bind to a click event");
    }
  }
};
</script>
```

### Usage

```jsx
<cld-image cloudName="demo" publicId="small_dinosaur" />
```

General configuration options may be passed with a [CldContext](#cldcontext) containing component instead:

```jsx
<cld-context cloudName="demo">
  <cld-image publicId="small_dinosaur" />
</cld-context>
```

`CldImage` can also be given transformation data by setting manipulation attributes.

```jsx
<cld-image
  cloudName="demo"
  publicId="small_dinosaur"
  effect="blur:100"
  crop="scale"
  width="100"
/>
```

### Responsive mode

Add the `responsive` property to have the image automatically adjust to the available width.

```jsx
<cld-image
  cloudName="demo"
  publicId="small_dinosaur"
  effect="sharpen:300"
  responsive
/>
```

Responsive mode, but adjusting to height instead:

```jsx
<div class="explain" style="height: 75px; padding: 20px;">
  <cld-image
    cloudName="demo"
    publicId="small_dinosaur"
    effect="sepia:95"
    responsive="height"
  />
</div>
```

### Lazy mode

Set the `lazy` property to only load the image when it needs to be displayed instead of when the page first loads.

Note: This feature is dependent on [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) and will be disabled if it is not available.

```vue
<template>
  <cld-image
    cloudName="demo"
    publicId="small_dinosaur"
    crop="scale"
    :height="300"
    lazy
    placeholder="color"
    @load.native="alert"
  />
</template>

<script>
export default {
  methods: {
    alert() {
      console.log("lazy image loaded");
    }
  }
};
</script>
```
