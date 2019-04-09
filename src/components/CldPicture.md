### Attributes

Refer to the base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See the [Image transformation reference](https://cloudinary.com/documentation/image_transformation_reference) documentation for all the options accepted by the `CldPicture` and `CldTransformation` components.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldPicture` outputs an `picture`, `img` and `source`s elements and does not have any events on it's own.

```jsx
<CldPicture publicId="face_top" cloudName="demo"
    :sources="[
        {
          media: { screen: true, orientation: 'landscape', minHeight: 700 },
          transformation: { crop: 'thumb', aspectRatio: '1.5', gravity: 'body'  }
        },
        {
          media: { screen: true, orientation: 'portrait', minWidth: 1200 },
          transformation: { crop: 'thumb', aspectRatio: '0.66', gravity: 'body'  }
        },
        {
          media: { screen: true, orientation: 'landscape' },
          transformation: { crop: 'thumb', aspectRatio: '2', gravity: 'face'  }
        },
        {
          media: { screen: true, orientation: 'portrait' },
          transformation: { crop: 'thumb', aspectRatio: '0.5', gravity: 'face'  }
        },
    ]"
    :img="{ style: 'box-shadow: 0 5px 10px rgba(0,0,0,0.3)' }"
/>
```
