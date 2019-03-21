### Attributes

Refer to base [Cloudinary Video Player SDK](https://cloudinary.com/documentation/video_player_api_reference) for configuration options.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CldVideoPlayer` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Usage

`CldVideoPlayer` is quite similar to `CldVideo`.

```jsx
<cld-video-player cloudName="demo" publicId="dog" controls>
  <cld-transformation effect="sepia:90" />
</cld-video-player>
```

Just like the [`CldImage`](#Cldimage), `CldVideoPlayer` will get its configuration from plugin provided options, parent `CldContext` component instance and `CldTransformation` component children instances.
