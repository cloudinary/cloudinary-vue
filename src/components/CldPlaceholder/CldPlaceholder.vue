<script>
  
import { COMPONENTS, PLACEHOLDER_TRANSFORMATIONS } from '../../constants';

export default {
  name: COMPONENTS.CldPlaceholder,
  props: {
    type: {
      type: String,
      default: 'blur',
      validator: value => !!PLACEHOLDER_TRANSFORMATIONS[value]
    }
  },
  render() {
    return null;
  }
}; 
</script>
