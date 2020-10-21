import { COMPONENTS, PLACEHOLDER_OPTIONS } from '../../constants';

export default {
  name: COMPONENTS.CldPlaceholder,
  props: {
    type: {
      type: String,
      default: 'blur',
      validator: value => !!PLACEHOLDER_OPTIONS[value]
    }
  },
  render() {
    return null;
  }
};