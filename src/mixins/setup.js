import CloudinaryAPI from '../cloudinary';
/**
 * To set up Cloudinary instance in component
 */
export const setup = {
  data() {
    return {
      defaultConfigurations: {}
    }
  },
  inject: {
    contextConfiguration: {
      default: {}
    },
    contextOptions: {
      default: {}
    },
  },
  methods: {
    setup(extraConfigs) {      
      if (!this.cloudinary) {
        this.cloudinary = new CloudinaryAPI(this.defaultConfigurations)
      }
      
      this.cloudinary.config(this.contextOptions)

      if (extraConfigs) {
        this.cloudinary.config(extraConfigs)
      }
    }
  }
};
