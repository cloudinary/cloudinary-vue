<script>
import { PLACEHOLDER_TRANSFORMATIONS, COMPONENTS } from '../../constants'

export default {
  name: COMPONENTS.CldPlaceholder,
  props: {
    // type is a prop name, unfortunately confusing.
    type: {
      type: String,
      default: 'blur',
      validator: value => !!PLACEHOLDER_TRANSFORMATIONS[value]
    },
  },
  render() {
    return null;
  }
};
</script>
