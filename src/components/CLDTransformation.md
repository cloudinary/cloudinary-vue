### Attributes



See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by `CldTransformation` as a child component of [CldImage](#cldimage).


See the [Video transformation reference](https://cloudinary.com/documentation/video_transformation_reference) documentation for all the options accepted by `CldTransformation` as a child component of [CldVideo](#cldvideo).

### Events

This component has no events.

### Usage

`CldTransformation` must be a (not necessarily immediate) child of one of the following components:

- `CldContext` : provides transformation parameters to all the other children of that `CldContext` component
- `CldVideo` : provides transformation parameters to the resulting `video` tag
- `CldPoster` : provides transformation parameters to the `poster` image of the resulting `video` tag 
- `CldImage` : provides transformation parameters to the resulting `img` tag

### Example:

```jsx
<cld-image cloudName="demo" publicId="face_top">
  <cld-transformation effect="sepia:90" />
  <cld-transformation height="200" crop="scale" />
</cld-image>
```

Transformations may also be added to a [CldContext](#cldcontext) - the transformation is then applied to all the other children components of the [CldContext](#cldcontext) containing component:


```jsx
<cld-context cloudName="demo">
  <cld-transformation effect="blur:100" />

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