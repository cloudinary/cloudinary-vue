import { watchElementVisibility } from '../helpers/visibility'

/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */
export const lazy = {
  props: {
    /**
     * Whether to only load the asset when it needs to be displayed instead of when the page first loads.
     * @deprecated
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

  methods: {
    updateVisibilityObservation() {
      if (this.lazy || this.loading === 'lazy') {
        if (this.$el && !this.cancelVisibilityListener) {
          this.cancelVisibilityListener = watchElementVisibility(
            this.$el,
            visible => {
              this.visible = this.visible || visible;
            }
          );
        }
      } else {
        this.visible = true;
        if (this.cancelVisibilityListener) {
          const { cancelVisibilityListener } = this;
          this.cancelVisibilityListener = null;
          cancelVisibilityListener();
        }
      }
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
