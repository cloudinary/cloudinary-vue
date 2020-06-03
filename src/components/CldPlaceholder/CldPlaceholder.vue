<template>
  <img v-if="!isImageLoaded()" class="cld-placeholder" :src="src" :width="this.width" :height="this.height" v-bind="nonCldAttrs"/>
</template>
<script>
  import {getPlaceholderURL} from "../../helpers/getPlaceholderURL";

  export default {
    name: "CldPlaceholder",
    data() {
      return {
        src: '',
        width: 0,
        height:0
      }
    },
    props: {
      // type is a prop name, unfortunately confusing.
      type: {
        type: String,
        default: () => {
          return 'blur';
        }
      },
    },
    inject: {
      getNonCldAttrs: {
        default: {}
      },
      contextConfiguration: {
        default: {}
      },
      getTransformOptions: {
        default: () => {}
      },
      configuration: {
        default: {}
      },
      publicId: {
        default: ""
      },
      isImageLoaded: {
        default: () => { return false }
      },
      registerPlaceHolder:{},
      getImageWidth:{},
      getImageHeight:{}
    },
    created() {
      this.registerPlaceHolder();
      this.width = this.getImageWidth();
      this.height = this.getImageHeight();
      this.nonCldAttrs = this.getNonCldAttrs();

      const src = getPlaceholderURL(
        this.type, // This is a prop from THIS component
        this.publicId, // PublicID, from parent
        this.configuration || {},
        this.getTransformOptions()
      );

      this.src = src;
    }
  };
</script>
