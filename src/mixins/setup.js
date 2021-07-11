import { Cloudinary, Util } from 'cloudinary-core';
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
    /**
     * Set up the Cloudinary instance, allowing it later to be used to create URLs
     * @param extraConfigs
     */
    setup(extraConfigs) {
      if (!this.cloudinary) {
        this.cloudinary = new Cloudinary(this.toSnakeCase(this.defaultConfigurations))
      }

      this.cloudinary.config(this.toSnakeCase(this.contextOptions))

      if (extraConfigs) {
        this.cloudinary.config(this.toSnakeCase(extraConfigs))
      }
    },
    toSnakeCase(options) {
      return Util.withSnakeCaseKeys(options)
    }
  }
};
