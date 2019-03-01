### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CldImage` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldImage` outputs an `img` element and does not have any events on it's own.

```vue
<template>
  <cld-image
    cloudName="demo"
    publicId="small_dinosaur"
    v-on:click.native="alert"
  >
    <cld-transformation
      overlay="text:Arial_45:CLICK ME"
      background="red"
      radius="10"
      opacity="90"
      color="white"
    />
    <cld-transformation crop="scale" :height="100" />
  </cld-image>
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

It is crucial for the `CldImage` to get both `cloudName` and `publicId`. All the other arguments are optional.

```jsx
<cld-image cloudName="demo" publicId="small_dinosaur" />
```

Of those two, only `publicId` is image-specific. Other configuration options may be passed through a `CldContext` like in:

```jsx
<cld-context cloudName="demo">
  <cld-image publicId="small_dinosaur" />
</cld-context>
```

`CldImage` can also get a image transformation data by directly setting manipulation attributes onto the component or through `CldTransformation` instances.

Compare:

```jsx
<table width="100%">
  <tbody>
    <tr>
      <th align="center">On element</th>
      <th align="center">
        On <code>CldTransformation</code> tags
      </th>
    </tr>
    <tr>
      <td align="center">
        <cld-image
          cloudName="demo"
          publicId="small_dinosaur"
          effect="blur:300"
          crop="scale"
          width="100"
        />
      </td>
      <td align="center">
        <cld-image cloudName="demo" publicId="small_dinosaur">
          <cld-transformation crop="scale" width="100" />
          <cld-transformation effect="blur:300" />
        </cld-image>
      </td>
    </tr>
  </tbody>
</table>
```

You can specify `CldImage`'s transformations also by setting transformation for whole set of images with `CldContext`.

```jsx
<cld-context cloudName="demo">
  <cld-transformation effect="blur:999" />

  <cld-image cloudName="demo" publicId="small_dinosaur">
    <cld-transformation crop="scale" width="50" />
  </cld-image>

  <cld-image cloudName="demo" publicId="small_dinosaur">
    <cld-transformation crop="scale" width="100" />
  </cld-image>

  <cld-image cloudName="demo" publicId="small_dinosaur">
    <cld-transformation crop="scale" width="150" />
  </cld-image>
</cld-context>
```

### Responsive mode

```jsx
<cld-image cloudName="demo" publicId="small_dinosaur" responsive>
  <cld-transformation effect="sharpen:300" />
</cld-image>
```

Responsive mode, but adjusting to height:

```jsx
<div class="explain" style="height: 75px; padding: 20px;">
  <cld-image cloudName="demo" publicId="small_dinosaur" responsive="height">
    <cld-transformation effect="sepia:95" />
  </cld-image>
</div>
```

### Lazy mode

Setting `lazy` attribute will make the component to not load an actual image file until the produced `img` HTML element is actually visible on screen.

The feature is backed by `IntersectionObserver` and behaviour will be disabled if it is not available.

```vue
<template>
  <cld-image
    cloudName="demo"
    publicId="small_dinosaur"
    lazy
    placeholder="color"
    @load.native="alert"
  >
    <cld-transformation crop="scale" :height="300" />
  </cld-image>
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
