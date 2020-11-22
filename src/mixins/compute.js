import { getResizeTransformation } from "../helpers/responsiveness";
import { computeOptions } from '../helpers/computeOptions'

export const compute = {
  methods: {
    computeURLOptions(inheritOptions = {}) {
      const responsiveOptions = getResizeTransformation(this.responsive, this.size, this.breakpoints)

      const baseOptions = {
        ...this.contextOptions,
        ...inheritOptions,
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