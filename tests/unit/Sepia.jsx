import CldTransformation from "../../src/components/CldTransformation";

export default {
  render(h) {
    return h(CldTransformation, { attrs: { effect: "sepia:20" } });
  },
  name: "Sepia"
};
