### Attributes

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CldImage` and `CldTransformation`.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CldVideo` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Component instance does not emit any events.

### Usage

`CldTransformation` must be a (not necessarily immediate) child of

- `CldContext`, to provide transformation parameters to all children of that `CldContext`
- `CldVideo`, to provide transformation parameters to resulting `video` tag
- `CldPoster`, to provide transformation parameters to resulting `video` tag `poster` attribute image
- or `CldImage`, to provide transformation parameters to resulting `img` tag

### Example:

```jsx
<cld-image cloudName="demo" publicId="face_top">
  <cld-transformation effect="sepia:90" />
  <cld-transformation height="200" />
</cld-image>
```
