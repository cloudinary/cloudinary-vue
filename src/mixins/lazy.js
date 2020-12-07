import { watchElementVisibility } from "../helpers/visibility"
import {
  LAZY_LOADING,
  CLD_IMAGE_WRAPPER_CLASS,
  IMAGE_CLASSES,
} from "../constants"

/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */
export const lazy = {
  props: {
    /**
     * **Deprecated**
     * 
     * Whether to only load the asset when it needs to be displayed instead of when the page first loads.
     * @deprecated - Use `loading` instead
     */
    lazy: {
      type: Boolean,
      default: false
    },

    /**
     * Set loading type for the component
     * use loading='lazy' to lazyload
     */
    loading: {
      type: String,
      default: ''
    }
  },

  data() {
    return { visible: false };
  },

  computed: {
    hasLazyLoading() {
      return this.lazy || this.loading === LAZY_LOADING
    }
  },

  methods: {
    updateVisibilityObservation() {
      if (!this.hasLazyLoading) {
        this.visible = true
        this.cancelVisibilityListener && this.cancelVisibilityListener()
        return
      }

      const isElementRendered = !!this.$el && (this.$el.classList?.contains(IMAGE_CLASSES.DEFAULT) || this.$el.classList?.contains(CLD_IMAGE_WRAPPER_CLASS))

      if (!isElementRendered || this.cancelVisibilityListener) return

      this.cancelVisibilityListener = watchElementVisibility(
        this.$el,
        isVisible => {
          this.visible = this.visible || isVisible;
        }
      )
    }
  },

  created() {
    this.updateVisibilityObservation();
  },

  mounted() {
    this.updateVisibilityObservation();
  },

  updated() {
    this.updateVisibilityObservation();
  },

  destroyed() {
    if (this.cancelVisibilityListener) {
      this.cancelVisibilityListener();
    }
  }
};
