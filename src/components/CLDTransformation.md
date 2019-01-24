### Attributes

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CLDImage` and `CLDTransformation`.

See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CLDVideo` and `CLDTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Component instance does not emit any events.

### Usage

`CLDTransformation` must be a (not necessarily immediate) child of

- `CLDContext`, to provide transformation parameters to all children of that `CLDContext`
- `CLDVideo`, to provide transformation parameters to resulting `video` tag
- `CLDPoster`, to provide transformation parameters to resulting `video` tag `poster` attribute image
- or `CLDImage`, to provide transformation parameters to resulting `img` tag

### Example:

```jsx
<CLDImage cloudName="demo" publicId="face_top">
  <CLDTransformation effect="sepia:90" />
  <CLDTransformation height="200" />
</CLDImage>
```
