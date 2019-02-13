### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CLDVideo` and `CLDTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CLDVideo` outputs `video` element does not have any events on it's own.

### Usage

```jsx
<CLDVideo cloudName="demo" publicId="dog" controls lazy />
```

Just like the [`CLDImage`](#cldimage), `CLDVideo` will get its configuration from plugin provided options, parent `CLDContext` component instance and `CLDTransformation` component children instances.
