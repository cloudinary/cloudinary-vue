import { COMPONENTS } from '../../constants';

export default {
  name: COMPONENTS.CldTransformation,
  inject: {
    registerTransformation: {
      default: null
    }
  },
  created() {
    if (this.registerTransformation) {
      this.registerTransformation(this.$attrs || {});
    }
  },
  render() {
    return null;
  }
};