import { watchElementSize } from '../helpers/size'
import { range } from "../utils";
import { RESPONSIVE_CSS, CLD_IMAGE_WRAPPER_CLASS, IMAGE_CLASSES } from '../constants';

/**
 * If necessary posts root element
 * size information
 * into components data
 */
export const size = {
  props: {
    responsive: { 
      type: [Boolean, String], 
      default: false,
      validator: value => !value || RESPONSIVE_CSS[value]
    },
    breakpoints: {
      type: [Array, Function, String],
      default: () => range(100, 4000, 100)
    },
  },
  data() {
    return { size: null };
  },

  computed: {
    hasResponsiveActive() {
      return this.responsive && this.size && this.size.width && this.size.height
    },
    /* should be overriden */
    shouldMeasureSize() {
      return false;
    }
  },

  methods: {
    updateSizeObservation() {
      if (!this.responsive) {
        this.cancelSizeListener && this.cancelSizeListener()
        return
      }

      const isElementRendered = !!this.$el && (this.$el.classList?.contains(IMAGE_CLASSES.DEFAULT) || this.$el.classList?.contains(CLD_IMAGE_WRAPPER_CLASS))

      if (!isElementRendered || this.cancelSizeListener) return

      this.cancelSizeListener = watchElementSize(this.$el, newSize => {
        if (!newSize) return;

        if (
          !this.size ||
          this.size.width !== newSize.width ||
          this.size.height !== newSize.height
        ) {
          this.size = newSize
        }
      });

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
