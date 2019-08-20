### Attributes

Refer to the base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See the [Video transformation reference](https://cloudinary.com/documentation/video_transformation_reference) documentation for all the options accepted by the `CldVideo` component.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldVideo` outputs a `video` tag that does not have any events by default.

### Usage

```jsx
<cld-video cloudName="demo" publicId="dog" lazy controls />
```

General configuration options may be passed with a [CldContext](#cldcontext) containing component instead:

```jsx
<cld-context cloudName="demo">
  <cld-video publicId="dog" />
</cld-context>
```

`CldVideo` can also be given [transformation](https://cloudinary.com/documentation/video_transformation_reference) data by setting attributes.

```jsx
<cld-video
  cloudName="demo"
  publicId="dog"
  effect="blur:100"
  crop="scale"
  width="100"
/>
```
