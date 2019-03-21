### Attributes

Refer to base [Cloudinary Uploader SDK](https://cloudinary.com/documentation/upload_widget#upload_widget_options) for configuration options.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Usage

```jsx
<cld-uploader cloudName="hzxyensd5" uploadPreset="aoh4fpwm">
  Open uploader
</cld-uploader>
```

Just like the [`CldImage`](#Cldimage), `CldViewer` will get its configuration from plugin provided options, parent `CldContext` component instance and `CldTransformation` component children instances.
