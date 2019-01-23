# Cloudinary Vue SDK

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.

## Usage

### Installation

#### Install the library with npm

```
npm i cloudinary-vue
```

or refer to it using unpkg CDN

```html
<script src="//unpkg.com/cloudinary-vue/dist/Cloudinary.umd.min.js">
```

##### Import and attach a plugin

```jsx
import Vue from "vue";
import Cloudinary from "cloudinary-vue";

Vue.use(Cloudinary);
// ..or..
Vue.use(Cloudinary, {
  // options, for example:
  cloudName: "demo"
});
```

### General usage

In order to properly use this library you have to provide it with a few configuration parameters. All configuration parameters can be applied directly to the element, using a CLDContext component or while installing a plugin (second argument of `Vue.use`).

```html
<template>
  <div>
    <h1>Hello, world!</h1>

    <CLDImage cloudName="demo" publicId="sample" crop="scale" width="300" />

    <CloudinaryContext cloudName="demo">
      <CLDImage publicId="sample">
        <CLDTransformation crop="scale" width="200" angle="10" />
      </CLDImage>
    </CloudinaryContext>
  </div>
</template>
```

Required:

- `cloudName` - The cloudinary cloud name associated with your Cloudinary account.

Optional:

- `privateCdn`, `secureDistribution`, `cname`, `cdnSubdomain` - Please refer to [Cloudinary Documentation](https://cloudinary.com/documentation/react_integration#3_set_cloudinary_configuration_parameters) for information on these parameters.

### Specific usage

The library includes 5 components:

- `CLDContext`
- `CLDTransformation`
- `CLDImage`
- `CLDVideo`
- `CLDPoster`

#### CLDContext

`CLDContext` allows you to define shared configuration and resource transformation parameters that are applied to all children elements.

#### CLDImage

outputs HTML `img` tag with a correct `src` attribute for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CLDContext` and children `CLDTransformation` instances.

#### CLDVideo

outputs HTML `video` tag with a correct `src` attribute for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CLDContext` and children `CLDTransformation` instances.

#### CLDTransformation

The Transformation element allows you to defined additional transformations on the parent element.

For example:

```
<CLDImage cloudName="demo" publicId="sample">
    <CLDTransformation angle="-45"/>
    <CLDTransformation
        effect="trim"
        angle="45"
        crop="scale"
        width="600"
    >
        <CLDTransformation
            overlay="text:Arial_100:Hello"
        />
    </CLDTransformation>
</CLDImage>
```

#### CLDPoster

an optional `CLDVideo` children element that will specify image resource to be visible provided to `poster` attribute of the `video` element.

## Additional resources

Additional resources are available at:

- [Website](http://cloudinary.com)
- [Documentation](http://cloudinary.com/documentation)
- [Knowledge Base](http://support.cloudinary.com/forums)
- [Image transformations documentation](http://cloudinary.com/documentation/image_transformations)

## Support

You can [open an issue through GitHub](https://github.com/CloudinaryLtd/cloudinary_vue/issues).

Contact us at [http://cloudinary.com/contact](http://cloudinary.com/contact).

Stay tuned for updates, tips and tutorials: [Blog](http://cloudinary.com/blog), [Twitter](https://twitter.com/cloudinary), [Facebook](http://www.facebook.com/Cloudinary).

## Join the Community

Impact the product, hear updates, test drive new features and more! Join [here](https://www.facebook.com/groups/CloudinaryCommunity).

## License

Released under the MIT license.

## Development

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run all unit tests

```
npm t
```
