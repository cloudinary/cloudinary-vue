Cloudinary Vue SDK
=========================
[![Build Status](https://api.travis-ci.com/cloudinary/cloudinary-vue.svg?branch=master)](https://app.travis-ci.com/github/cloudinary/cloudinary-vue)
## About
The Cloudinary Vue SDK allows you to quickly and easily integrate your application with Cloudinary.
Effortlessly optimize and transform your cloud's assets.


### Additional documentation
This Readme provides basic installation and usage information.
For the complete documentation, see the [Vue SDK Guide](https://cloudinary.com/documentation/vue_integration).


## Table of Contents
- [Key Features](#key-features)
- [Version Support](#Version-Support)
- [Installation](#installation)
- [Usage](#usage)
    - [Setup](#Setup)
    - [Transform and Optimize Assets](#Transform-and-Optimize-Assets)
    - [Generate Image and HTML Tags](#Generate-Image-and-Video-HTML-Tags)

## Key Features
- [Transform](https://cloudinary.com/documentation/vue_video_manipulation#video_transformation_examples) and [optimize](https://cloudinary.com/documentation/vue_image_manipulation#image_optimizations) assets (links to docs).
- Generate [image](https://cloudinary.com/documentation/vue_image_manipulation#deliver_and_transform_images) and [video](https://cloudinary.com/documentation/vue_video_manipulation#cldvideo_component) tags (links to docs).


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
- Set up your cloud name and pick the components to use (or use all 😃)
  ![Set up with cloudName and options](http://bit.ly/2WSKTf0)
- A `cloudinary.js` file will be added to your src directory, at the same level as your `main.js` file. Feel free to customize it if you like. And have fun with Cloudinary! 🤟
- For more information on the plugin, check out our [Vue-CLI plugin for Cloudinary Repo](https://github.com/cloudinary/vue-cli-plugin-cloudinary).

### Install using your favorite package manager (yarn, npm)
```bash
npm install cloudinary-vue
yarn add cloudinary-vue
```
### Nuxt.js
For [Nuxt.js](https://nuxtjs.org) projects, use [Cloudinary module](https://cloudinary.nuxtjs.org/). You can set it up by using the following:
```
yarn add @nuxtjs/cloudinary
# Or
npm i @nuxtjs/cloudinary
```

## Usage 
### Setup
```javascript
import Vue from 'vue';
import Cloudinary, { CldImage, CldVideo, CldTransformation, CldContext } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "demo" },
  components: {
    CldContext,
    CldImage, 
    CldVideo, 
    CldTransformation,
  }
});
```
You can also import the Cloudinary components manually in each of your components.

### Transform and Optimize Assets 
- [See full documentation](https://cloudinary.com/documentation/vue_image_manipulation)
    
   ```jsx
    // Apply a single transformation
        <cld-context cloudName="demo">
          <cld-image publicId="sample">
            <cld-transformation crop="scale" width="200" angle="10" />
          </cld-image>
        </cld-context>
    ```

    ```jsx
    // Chain (compose) multiple transformations
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

### File upload
  This SDK does not provide file upload functionality, however there are [several methods of uploading from the client side](https://cloudinary.com/documentation/vue_image_and_video_upload).


## Contributions
See [contributing guidelines](/CONTRIBUTING.md).


## Get Help
If you run into an issue or have a question, you can either:
- [Open a Github issue](https://github.com/cloudinary/cloudinary-vue/issues) (for issues related to the SDK)
- [Open a support ticket](https://cloudinary.com/contact) (for issues related to your account)


## About Cloudinary
Cloudinary is a powerful media API for websites and mobile apps alike, Cloudinary enables developers to efficiently manage, transform, optimize, and deliver images and videos through multiple CDNs. Ultimately, viewers enjoy responsive and personalized visual-media experiences—irrespective of the viewing device.


## Additional Resources
- [Cloudinary Transformation and REST API References](https://cloudinary.com/documentation/cloudinary_references): Comprehensive references, including syntax and examples for all SDKs.
- [MediaJams.dev](https://mediajams.dev/): Bite-size use-case tutorials written by and for Cloudinary Developers
- [DevJams](https://www.youtube.com/playlist?list=PL8dVGjLA2oMr09amgERARsZyrOz_sPvqw): Cloudinary developer podcasts on YouTube.
- [Cloudinary Academy](https://training.cloudinary.com/): Free self-paced courses, instructor-led virtual courses, and on-site courses.
- [Code Explorers and Feature Demos](https://cloudinary.com/documentation/code_explorers_demos_index): A one-stop shop for all code explorers, Postman collections, and feature demos found in the docs.
- [Cloudinary Roadmap](https://cloudinary.com/roadmap): Your chance to follow, vote, or suggest what Cloudinary should develop next.
- [Cloudinary Facebook Community](https://www.facebook.com/groups/CloudinaryCommunity): Learn from and offer help to other Cloudinary developers.
- [Cloudinary Account Registration](https://cloudinary.com/users/register/free): Free Cloudinary account registration.
- [Cloudinary Website](https://cloudinary.com)


## Licence
Released under the MIT license.
