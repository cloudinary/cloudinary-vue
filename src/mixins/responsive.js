import { CLD_IMAGE_WRAPPER_CLASS, RESPONSIVE_CSS, IMAGE_CLASSES } from '../constants';
import { watchElementSize } from '../helpers/size'
import { range } from "../utils";

export const responsive = {
  props: {
    /**
     * How to make the image responsive to the available size based on layout. Possible values:
     *
     * - `false` turns the feature off
     * - `"width"` and `true` uses the available image *width* and allows image *height* to be set dynamically
     * - `"height"` uses the available image *height* and allows image *width* to be set dynamically
     * - `"fill"` uses the available image *width* and *height*
     */
    responsive: {
      type: [Boolean, String],
      default: false,
      validator: value => !value || RESPONSIVE_CSS[value]
    },
    /**
     * The set of possible breakpoint values to be used together with the responsive property. Either:
     *
     * - an array of numbers
     * - a comma separated list of numbers as a single string
     * - a function that returns an array of numbers
     */
    breakpoints: {
      type: [Array, Function, String],
      default: () => range(100, 4000, 100)
    },
  },
  data() {
    return {
      size: {},
    }
  },
  computed: {
    hasResponsiveActive() {
      return this.responsive && this.size.width && this.size.height
    }
  },
  methods: {
    updateSizeObservation() {
      if (!this.responsive) {
        this.cancelSizeListener && this.cancelSizeListener()
        return
      }

      const isElementRendered = this.$el?.classList?.contains(IMAGE_CLASSES.DEFAULT) || this.$el?.classList?.contains(CLD_IMAGE_WRAPPER_CLASS)

      if (!isElementRendered || this.cancelSizeListener) return

      this.cancelSizeListener = watchElementSize(this.$el, newSize => {
        if (!newSize) return;

        if (
          this.size.width !== newSize.width ||
          this.size.height !== newSize.height
        ) {
          this.size = newSize;
        }
      });
    },
  },
  created() {
    this.updateSizeObservation()
  },
  mounted() {
    this.updateSizeObservation()
  },
  updated() {
    this.updateSizeObservation()
  },
  destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }, 
} 