Cloudinary Vue SDK
=========================
[![Build Status](https://travis-ci.org/cloudinary/cloudinary-vue.svg?branch=master)](https://travis-ci.org/cloudinary/cloudinary-vue)
## About
The Cloudinary Vue SDK allows you to quickly and easily integrate your application with Cloudinary.
Effortlessly optimize and transform your cloud's assets.


### Additional documentation
This Readme provides basic installation and usage information.
For the complete documentation, see the [Vue SDK Guide](https://cloudinary.com/documentation/vue_integration).


## Table of Contents
- Key Features
- Version Support
- Installation
- Usage
    - Setup
    - Optimize Assets
    - [Generating Image and HTML Tags](#key-features)

## Key Features
- [Transform and Optimize Assets](https://cloudinary.com/documentation/vue_image_manipulation)
- Generate Image and Video HTML Tags


## Version Support

| SDK Version   | Vue 2    | Vue 3  |
|---------------|----------|--------|
| 1.0.0 - 1.2.3 | V        | X      |



## Installation
### Install using Vue-CLI
- After you create your application with Vue-CLI, navigate to the created app folder, and install Cloudinary SDK by:
    ```bash
    vue add cloudinary
    ```
- Set up your cloudName and pick the components to use (or use all 😃)
  ![Set up with cloudName and options](http://bit.ly/2WSKTf0)
- A `cloudinary.js` file will be added to your src directory, same level with your `main.js` file. Feel free to customize it if you like. And have fun with Cloudinary! 🤟
- More information on the plugin, check out [our Vue-CLI plugin for Cloudinary Repo](https://github.com/cloudinary/vue-cli-plugin-cloudinary)

### install using your favorite package manager (yarn, npm)
```bash
npm install cloudinary-vue
yarn add cloudinary-vue
```
### Nuxt.js
Please use [Cloudinary module](https://cloudinary.nuxtjs.org/) for [Nuxt.js](https://nuxtjs.org) projects. You can set it up by using the following:
```
yarn add @nuxtjs/cloudinary
#OR
npm i @nuxtjs/cloudinary
```

## Usage 
### Setup/Configuration
```javascript
import Vue from 'vue';
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldImage,
    CldTransformation
  }
});
```
You can also import the cloudinary components manually in each of your components.

### Transform and Optimize Assets 
- [See full documentation](https://cloudinary.com/documentation/vue_integration#installation_and_setup)
    
   ```jsx
    // Apply a single transformation
        <cld-context cloudName="demo">
          <cld-image publicId="sample">
            <cld-transformation crop="scale" width="200" angle="10" />
          </cld-image>
        </cld-context>
    ```

    ```jsx
    // Chain (Compose) multiple transformations
    <cld-context cloudName="demo">
       <cld-image cloudName="demo" publicId="sample">
          <cld-transformation angle="-45" />
          <cld-transformation effect="trim" angle="45" crop="scale" width="600" />
          <cld-transformation overlay="text:Arial_100:Hello" />
       </cld-image>
  </cld-context>
    ```
### Generate Image and Video HTML Tags
    - Use <cld-image> to generate image tags
    - Use <cld-video> to generate video Tags


## Contributions
See [contributing guidelines](/CONTRIBUTING.md) in a separate file.


## Get Help
If you run into an issue or have a question, you can either:
- Issues related to the SDK: [Open a Github issue](https://github.com/CloudinaryLtd/cloudinary_vue/issues)
- Issues related to your account: [Open a support ticket](https://cloudinary.com/contact)


## About Cloudinary
Cloudinary is a powerful media API for websites and mobile apps alike, Cloudinary enables developers to efficiently manage, transform, optimize, and deliver images and videos through multiple CDNs. Ultimately, viewers enjoy responsive and personalized visual-media experiences—irrespective of the viewing device.


## Additional Resources
- [Cloudinary Transformation and REST API References](https://cloudinary.com/documentation/cloudinary_references) - Comprehensive references, including syntax and examples for all SDKs.
- [MediaJams.dev](https://mediajams.dev/) - Bite-size use-case tutorials written by and for Cloudinary Developers
- [DevJams](https://www.youtube.com/playlist?list=PL8dVGjLA2oMr09amgERARsZyrOz_sPvqw) - Cloudinary developer podcasts on YouTube.
- [Cloudinary Academy](https://training.cloudinary.com/) - Free self-paced courses, instructor-led virtual courses, and on-site courses.
- [Code Explorers and Feature Demos](https://cloudinary.com/documentation/code_explorers_demos_index) - A one-stop shop for all code explorers, Postman collections, and feature demos found in the docs.
- [Cloudinary Roadmap](https://cloudinary.com/roadmap) - Your chance to follow, vote, or suggest what Cloudinary should develop next.
- [Cloudinary Facebook Community](https://www.facebook.com/groups/CloudinaryCommunity) -
- [Cloudinary Account Registration](https://cloudinary.com/users/register/free) - Free Cloudinary account registration.
- [Cloudinary Website](https://cloudinary.com)


## Licence
Released under the MIT license.
