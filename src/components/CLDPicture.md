### Attributes

Refer to the base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.


See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by the `CldPicture` and `CldTransformation` components.


### Events

Use `v-on:*.native` to listen to native DOM events. `CldPicture` outputs an `picture`, `img` and `source`s elements and does not have any events on it's own.

```jsx
<cld-picture cloudName="demo" publicId="small_dinosaur" />
```
