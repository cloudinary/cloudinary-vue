### Usage

`CLDTransformation` must be a (not necessarily immediate) child of

- `CLDContext`, to provide transformation parameters to all children of that `CLDContext`
- `CLDVideo`, to provide transformation parameters to resulting `video` tag
- `CLDPoster`, to provide transformation parameters to resulting `video` tag `poster` attribute image
- or `CLDImage`, to provide transformation parameters to resulting `img` tag

#### See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CLDImage` and `CLDTransformation`.

#### See [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery) for all the options accepted by `CLDImage` and `CLDTransformation`.

### Example:

```jsx
<CLDImage cloudName="demo" publicId="face_top">
  <CLDTransformation effect="sepia:90" />
  <CLDTransformation height="200" />
</CLDImage>
```
