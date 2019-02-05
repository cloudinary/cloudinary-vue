### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CLDImage` and `CLDTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CLDImage` outputs an `img` element and does not have any events on it's own.

```vue
<template>
  <CLDImage
    cloudName="demo"
    publicId="small_dinosaur"
    v-on:click.native="alert"
  >
    <CLDTransformation
      overlay="text:Arial_45:CLICK ME"
      background="red"
      radius="10"
      opacity="90"
      color="white"
    />
    <CLDTransformation crop="scale" :height="100" />
  </CLDImage>
</template>
<script>
export default {
  methods: {
    alert() {
      alert("I've used native event listener to bind to a click");
    }
  }
};
</script>
```

### Usage

It is crucial for the `CLDImage` to get both `cloudName` and `publicId`. All the other arguments are optional.

```jsx
<CLDImage cloudName="demo" publicId="small_dinosaur" />
```

Of those two, only `publicId` is image-specific. Other configuration options may be passed through a `CLDContext` like in:

```jsx
<CLDContext cloudName="demo">
  <CLDImage publicId="small_dinosaur" />
</CLDContext>
```

`CLDImage` can also get a image transformation data by directly setting manipulation attributes onto the component or through `CLDTransformation` instances.

Compare:

```jsx
<table width="100%">
  <tbody>
    <tr>
      <th align="center">On element</th>
      <th align="center">
        On <code>CLDTransformation</code> tags
      </th>
    </tr>
    <tr>
      <td align="center">
        <CLDImage
          cloudName="demo"
          publicId="small_dinosaur"
          effect="blur:300"
          crop="scale"
          width="100"
        />
      </td>
      <td align="center">
        <CLDImage cloudName="demo" publicId="small_dinosaur">
          <CLDTransformation effect="blur:300" />
          <CLDTransformation crop="scale" />
          <CLDTransformation width="100" />
        </CLDImage>
      </td>
    </tr>
  </tbody>
</table>
```

You can specify `CLDImage`'s transformations also by setting transformation for whole set of images with `CLDContext`.

```jsx
<CLDContext cloudName="demo">
  <CLDTransformation effect="blur:300" />

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="50" />
  </CLDImage>

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="100" />
  </CLDImage>

  <CLDImage cloudName="demo" publicId="small_dinosaur">
    <CLDTransformation crop="scale" width="150" />
  </CLDImage>
</CLDContext>
```

### Responsive mode

```jsx
<CLDImage cloudName="demo" publicId="small_dinosaur" responsive>
  <CLDTransformation effect="sharpen:300" />
</CLDImage>
```

Responsive mode, but adjusting to height:

```jsx
<div
  class="explain"
  style="height: 75px; border-top: 3px solid black; border-bottom: 3px solid black;"
>
  <CLDImage cloudName="demo" publicId="small_dinosaur" responsive="height">
    <CLDTransformation effect="sepia:95" />
  </CLDImage>
</div>
```

### Lazy mode

Setting `lazy` attribute will make the component to not load an actual image file until the produced `img` HTML element is actually visible on screen.

The feature is backed by `IntersectionObserver` and behaviour will be disabled if it is not available.

```vue
<template>
  <CLDImage
    cloudName="demo"
    publicId="small_dinosaur"
    lazy
    v-on:load.native="alert"
  >
    <CLDTransformation crop="scale" :height="100" />
  </CLDImage>
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
