<script>
import cloudinary from "cloudinary-core";
import { ready } from "../../../src/mixins/ready";
import { mounted } from "../../../src/mixins/mounted";
import { cldAttrsInherited } from "../../../src/mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../../../src/mixins/cldAttrsOwned";
import { normalizeRest } from "../../../src/helpers/attributes";
import { merge } from "../../../src/utils";

let extScriptLoaded = null;

export default {
  name: "CldUploader",
  inheritAttrs: false,
  mixins: [ready, mounted, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h("button", this.htmlElement, this.$slots.default);
  },
  props: {
    /**
     * The name of an upload preset defined for your Cloudinary account.
     * If using the upload widget for unsigned uploads,
     * make sure you specify an unsigned upload preset, and conversly,
     * if you choose to provide an upload preset
     * for a widget performing signed uploads,
     * make sure you provide a signed upload preset.
     * You can define upload presets either in the Upload tab
     * of the conold settings or using the Admin API.
     * Example: `"preset1"`
     */
    uploadPreset: String
  },
  data() {
    let randomID = "";
    for (let i = 0; i < 32; i++) {
      randomID += String.fromCharCode(97 + Math.random() * 25);
    }
    return {
      randomID
    };
  },
  computed: {
    htmlElement() {
      return {
        class: "cld-uploader",
        attrs: merge(
          { id: this.$attrs.id || this.randomID },
          normalizeRest(this.$attrs)
        ),
        on: {
          click: this.open
        }
      };
    }
  },
  mounted() {
    self.cloudinary = cloudinary;
    extScriptLoaded =
      extScriptLoaded ||
      new Promise(resolve => {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.onload = resolve;
        document.body.appendChild(script);
      });
    extScriptLoaded.then(() => {
      this.widget = cloudinary.createUploadWidget({
        cloudName: this.cldAttrs.configuration.cloud_name,
        uploadPreset: this.uploadPreset
      });
    });
  },
  methods: {
    open() {
      extScriptLoaded.then(() => {
        if (this.widget) {
          this.widget.open();
        }
      });
    }
  }
};
</script>
