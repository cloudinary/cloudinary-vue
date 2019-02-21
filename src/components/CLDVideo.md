### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CldVideo` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldVideo` outputs `video` element does not have any events on it's own.

### Usage

```jsx
<cld-video
  cloudName="demo" // request configuration
  publicId="dog" // requested resource id
  lazy // component behaviour flag
  controls // html attribute
/>
```

Just like the [`CldImage`](#Cldimage), `CldVideo` will get its configuration from plugin provided options, parent `CldContext` component instance and `CldTransformation` component children instances.
