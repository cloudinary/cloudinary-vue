# Cloudinary Vue SDK

[![Build Status](https://travis-ci.org/cloudinary/cloudinary-vue.svg?branch=master)](https://travis-ci.org/cloudinary/cloudinary-vue)

Cloudinary is a [cloud-based service](https://cloudinary.com/solutions) that provides an end-to-end image and video management solution including uploads, storage, manipulations, optimizations and delivery. All your media resources are optimized and delivered through a fast CDN using industry best practices.

Using Cloudinary's Vue.js SDK, you can easily perform smart image and video manipulations using code that integrates seamlessly with your existing Vue.js application, and deliver optimized and responsive media to your users.

_This Readme provides basic installation and usage information. For the complete documentation, see the [Vue.js SDK guide](https://cloudinary.com/documentation/vue_integration)_

## 🛠️ How to install

**🎉We now support installing via Vue CLI 3.0 🎉**

### Install with Vue-CLI

1. After create your application with Vue-CLI, navigate to the created app folder, and install Cloudinary SDK by:

```bash
vue add cloudinary
```

2. Set up your cloudName and pick the components to use (or use all 😃)

![Set up with cloudName and options](http://bit.ly/2WSKTf0)

A `cloudinary.js` file will be added to your src directory, same level with your `main.js` file. Feel free to customize it if you like. And have fun with Cloudinary! 🤟

More information on the plugin, check out [our Vue-CLI plugin for Cloudinary Repo](https://github.com/cloudinary/vue-cli-plugin-cloudinary)

## Manual install with `npm` or `yarn`

Install the package in your project with

```bash
npm install cloudinary-vue

#OR

yarn add cloudinary-vue
```

## 💻 Configure

### Configure Cloudinary options

1. In your `main.js` file (or the main entrance file of your application)

```jsx
import Vue from "vue";
import Cloudinary from "cloudinary-vue";
```

2. You can setup Vue to use Cloudinary plugin without any configuration as below

```jsx
Vue.use(Cloudinary);
```

**Or** setup with some global Cloundinary configurations, such as `cloudName`

```jsx
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" }
  //             ^ cloudinary configuration options
});
```

3. Globally you can also select and register which Cloudinary components you'd like to use in your app in an **array of components**:

```jsx
import Cloudinary, { CldImage } from "cloudinary-vue";

// specify which components to install in an array
Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: [ CldImage ]
});
```

**Or** define them in **object of components**, and rename any component if needed.

```jsx
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldImage,
    CldXf: CldTransformation
    //^ a custom name
  }
});
```

**Notes**: By default, if there is no `components` defined, the plugin will _automatically_ install all available Cloudinary components.

### General usage

In order to properly use this library you have to provide it with a few configuration parameters. All configuration parameters can be applied directly to the element, using a `CldContext` component or while installing a plugin (second argument of `Vue.use`).

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
- `CldPoster` (only used together with `CldVideo`)

#### CldContext

`CldContext` allows you to define shared configuration and resource transformation parameters that are applied to all children elements.

#### CldImage

outputs HTML `img` tag with a correct `src` attribute for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CldContext` and children `CldTransformation` instances.

#### CldVideo

outputs HTML `video` tag with a correct `sources` for provided Cloudinary resource, based on configuration and transformation parameters provided as attributes of this component instance, parent `CldContext` and children `CldTransformation` instances.

#### CldPoster (optional)
specify image resource to be provided to `poster` attribute of the `video` element

#### CldTransformation

The Transformation element allows you to defined additional transformations on the parent element. You can also use built-in `transformation` attribute available in `CldImage` and `CldVideo` for the same effect.

For example:

```jsx
<cld-image cloudName="demo" publicId="sample">
  <cld-transformation angle="-45" />
  <cld-transformation effect="trim" angle="45" crop="scale" width="600" />
  <cld-transformation overlay="text:Arial_100:Hello" />
</cld-image>
```

## How to contribute?

See [contributing guidelines](/CONTRIBUTING.md) in a separate file.

## Additional resources

Additional resources are available at:

- [Website](http://cloudinary.com)
- [Documentation](https://cloudinary.com/documentation/vue_integration)
- [Knowledge Base](http://support.cloudinary.com/forums)
- [Image transformations documentation](http://cloudinary.com/documentation/image_transformations)
- [Video transformations documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery#video_transformations_reference)
- [Cli plugin for Cloudinary Vue](https://github.com/cloudinary/vue-cli-plugin-cloudinary)

## Support

You can [open an issue through GitHub](https://github.com/CloudinaryLtd/cloudinary_vue/issues).

Contact us at [http://cloudinary.com/contact](http://cloudinary.com/contact).

Stay tuned for updates, tips and tutorials: [Blog](http://cloudinary.com/blog), [Twitter](https://twitter.com/cloudinary), [Facebook](http://www.facebook.com/Cloudinary).

## Join the Community

Impact the product, hear updates, test drive new features and more! Join [here](https://www.facebook.com/groups/CloudinaryCommunity).

## License

Released under the MIT license.
