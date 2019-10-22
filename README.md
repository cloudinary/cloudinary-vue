# Cloudinary Vue SDK 

[![Build Status](https://travis-ci.org/cloudinary/cloudinary-vue.svg?branch=master)](https://travis-ci.org/cloudinary/cloudinary-vue)

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.

## BETA

This is a BETA version. Things are still due to changes.

## Usage

### Installation

#### Install the library with npm

Install the package in your project with

```bash
npm install cloudinary-vue
```

##### Import and attach a plugin

```jsx
import Vue from "vue";
import Cloudinary from "cloudinary-vue";

Vue.use(Cloudinary);
// ..or provide some global cloudinary service configuration..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" }
  //             ^ cloudinary configuration options
});
// ..or specify which components to install..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: ["CldImage"]
});
// ..or rename all or some components..
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldImage: true,
    // component name
    //        ^ true just turns if on
    CldTransformation: "CldXf"
    //                 ^ a custom name
  }
});
// ..or rename using new names as keys.
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldXf: "CldTransformation"
  }
});
```

### General usage

In order to properly use this library you have to provide it with a few configuration parameters. All configuration parameters can be applied directly to the element, using a CldContext component or while installing a plugin (second argument of `Vue.use`).

```html
<template>
  <div>
    <h1>Hello, world!</h1>

    <cld-image cloudName="demo" publicId="sample" crop="scale" width="300" />

    <cld-context cloudName="demo">
      <cld-image publicId="sample">
        <cld-transformation crop="scale" width="200" angle="10" />
      </cld-image>
    </cld-context>
  </div>
</template>
```

Required:

- `cloudName` - The cloudinary cloud name associated with your Cloudinary account.

Optional:

- `privateCdn`, `secureDistribution`, `cname`, `cdnSubdomain` - Please refer to [Cloudinary Documentation](https://cloudinary.com/documentation/react_integration#3_set_cloudinary_configuration_parameters) for information on these parameters.

### Specific usage

The library includes 5 components:

- `CldContext`
- `CldTransformation`
- `CldImage`
- `CldVideo`
- `CldPoster`

#### CldContext

`CldContext` allows you to define shared configuration and resource transformation parameters that are applied to all children elements.

#### CldImage

outputs HTML `img` tag with a correct `src` attribute for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CldContext` and children `CldTransformation` instances.

#### CldVideo

outputs HTML `video` tag with a correct `sources` for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CldContext` and children `CldTransformation` instances.

#### CldTransformation

The Transformation element allows you to defined additional transformations on the parent element.

For example:

```jsx
<cld-image cloudName="demo" publicId="sample">
  <cld-transformation angle="-45" />
  <cld-transformation effect="trim" angle="45" crop="scale" width="600">
    <cld-transformation overlay="text:Arial_100:Hello" />
  </cld-transformation>
</cld-image>
```

#### CldPoster

an optional `CldVideo` child element that will specify image resource to be provided to `poster` attribute of the `video` element.

## ⚠️ Known Issues

- If you want to work with the SDK in CodeSandbox, start with this Vue.js SDK CodeSandbox template.

## Additional resources

Additional resources are available at:

- [Website](http://cloudinary.com)
- [Documentation](http://cloudinary.com/documentation)
- [Knowledge Base](http://support.cloudinary.com/forums)
- [Image transformations documentation](http://cloudinary.com/documentation/image_transformations)
- [Reference guide](https://cloudinary.github.io/cloudinary-vue/)

## Support

You can [open an issue through GitHub](https://github.com/CloudinaryLtd/cloudinary_vue/issues).

Contact us at [http://cloudinary.com/contact](http://cloudinary.com/contact).

Stay tuned for updates, tips and tutorials: [Blog](http://cloudinary.com/blog), [Twitter](https://twitter.com/cloudinary), [Facebook](http://www.facebook.com/Cloudinary).

## Join the Community

Impact the product, hear updates, test drive new features and more! Join [here](https://www.facebook.com/groups/CloudinaryCommunity).

## License

Released under the MIT license.

## Development

### Installation

```
// in repository folder
npm i -g @vue/cli
npm i
```

### Compile and minify for production

```
npm run build
```

### Documentation

#### Run local styleguidist server

```
npm run styleguide
```

#### Build styleguidist output

```
npm run build:styleguide
```

### Lint files

```
npm run lint
```

### Run all tests

```
npm t
```
