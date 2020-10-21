import { getResizeTransformation } from "../helpers/responsiveness";
import { computeOptions } from '../cloudinary/helpers'

export const compute = {
  methods: {
    computeURLOptions() {
      const responsiveOptions = getResizeTransformation(this.responsive, this.size, this.breakpoints)
  
      const baseOptions = {
        ...this.contextOptions,
        ...this.$attrs,
        ...responsiveOptions
      }

      const options = computeOptions({
        accessibility: this.accessibility,
        withProgressive: this.progressive,
        baseOptions,
        extra: this.extraTransformations,
      })

      return options
    }
  }
}
