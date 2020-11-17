import { watchElementSize } from '../helpers/size'

/**
 * If necessary posts root element
 * size information
 * into components data
 */
export const size = {
  data() {
    return { size: null };
  },

  computed: {
    /* should be overriden */
    shouldMeasureSize() {
      return false;
    }
  },

  methods: {
    updateSizeObservation() {
      if (this.shouldMeasureSize) {
        if (this.$el && !this.cancelSizeListener) {
          this.cancelSizeListener = watchElementSize(this.$el, size => {
            if (!size) return;

            if (
              !this.size ||
              this.size.width !== size.width ||
              this.size.height !== size.height
            ) {
              this.size = size;
            }
          });
        }
      } else {
        if (this.cancelSizeListener) {
          this.cancelSizeListener();
        }
      }
    }
  },

  created() {
    this.updateSizeObservation();
  },

  updated() {
    this.updateSizeObservation();
  },

  mounted() {
    this.updateSizeObservation();
  },

  destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
};
