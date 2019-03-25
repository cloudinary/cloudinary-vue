<script>
import cloudinary from "cloudinary-core";
import "cloudinary-video-player";
import "cloudinary-video-player/dist/cld-video-player.css";

import { ready } from "../../../src/mixins/ready";
import { mounted } from "../../../src/mixins/mounted";
import { cldAttrsInherited } from "../../../src/mixins/cldAttrsInherited";
import { cldAttrsOwned } from "../../../src/mixins/cldAttrsOwned";
import { normalizeRest } from "../../../src/helpers/attributes";
import { merge } from "../../../src/utils";
import { combineOptions } from "../../../src/helpers/combineOptions";
import { CombinedState } from "../../../src/reactive/CombinedState";

export default {
  name: "CldVideoPlayer",
  inheritAttrs: false,
  mixins: [ready, mounted, cldAttrsInherited, cldAttrsOwned],
  render(h) {
    return h("video", this.videoElement, this.$slots.default);
  },
  props: {
    /** ID of your media file */
    publicId: { type: String, required: true },
    /**
Options passed to video.js player

```json
{
  controlBar: { children: ['PreviousButton', 'playToggle', 'NextButton'] }
}
```
 */
    videojs: Object,
    /**
     * Title, subtitle and description.
     * 
     * Example:
     * 
```
{
  title: 'Cloud Book Study',
  subtitle: 'A short video with a nice book animation',
  description: 'A description of the book movie.'
}
```
     */
    info: Object,
    /**
     * Analytics options
     * 
     * Example:
     * 
```
{
  events: [
    'play',
    'pause',
    {
      type: 'percentsplayed',
      percents: [10, 50, 75, 100]
    }, // Some events may have additional settings
    'start',
    'ended'
  ]
}
```
     */
    analytics: Object,
    /**
     * Plugins
     * 
     * Example:
     * 
```
{
  vastClient: {
    adTagUrl: "https://rtr.innovid.com/r1.5554946ab01d97.36996823;cb={random_number}",
    adCancelTimeout: 5000,
    adsEnabled: true,
    playAdAlways: true
  }
}
```
     */
    plugins: Object
  },

  provide() {
    return {
      CldPosterState: this.posterCombinedState
    };
  },
  data() {
    let randomID = "";
    for (let i = 0; i < 32; i++) {
      randomID += String.fromCharCode(97 + Math.random() * 25);
    }
    const posterCombinedState = new CombinedState(combineOptions);
    return {
      posterCombinedState,
      posterCldAttrs: null,
      randomID
    };
  },
  computed: {
    videoElement() {
      return {
        class: "cld-video-player",
        attrs: merge(
          { id: this.$attrs.id || this.randomID },
          normalizeRest(this.$attrs)
        )
      };
    }
  },
  mounted() {
    const cld = new cloudinary.Cloudinary(this.cldAttrs.configuration);

    this.player = cld.videoPlayer(this.videoElement.attrs.id, {
      transformation: this.cldAttrs.transformation,

      posterOptions: {
        transformation:
          this.posterCldAttrs && this.posterCldAttrs.transformation
            ? this.posterCldAttrs.transformation
            : this.cldAttrs.transformation
      }
    });

    this.player.source(
      merge(
        { publicId: this.publicId },
        this.info ? { info: this.info } : {},
        this.analytics ? { analytics: this.analytics } : {},
        this.plugins ? { plugins: this.plugins } : {}
      )
    );

    this.player.on("play", evt => {
      /**
       * @event play
       * @type {Object}
       */
      this.$emit("play", evt);
    });
    this.player.on("pause", evt => {
      /**
       * @event pause
       * @type {Object}
       */
      this.$emit("pause", evt);
    });
    this.player.on("volumechange", evt => {
      /**
       * @event volumechange
       * @type {Object}
       */
      this.$emit("volumechange", evt);
    });
    this.player.on("mute", evt => {
      /**
       * @event mute
       * @type {Object}
       */
      this.$emit("mute", evt);
    });
    this.player.on("unmute", evt => {
      /**
       * @event unmute
       * @type {Object}
       */
      this.$emit("unmute", evt);
    });
    this.player.on("fullscreenchange", evt => {
      /**
       * @event fullscreenchange
       * @type {Object}
       */
      this.$emit("fullscreenchange", evt);
    });
    this.player.on("seek", evt => {
      /**
       * @event seek
       * @type {Object}
       */
      this.$emit("seek", evt);
    });
    this.player.on("sourcechanged", evt => {
      /**
       * @event sourcechanged
       * @type {Object}
       */
      this.$emit("sourcechanged", evt);
    });
    this.player.on("percentsplayed", evt => {
      /**
       * @event percentsplayed
       * @type {Object}
       */
      this.$emit("percentsplayed", evt);
    });
    this.player.on("ended", evt => {
      /**
       * @event ended
       * @type {Object}
       */
      this.$emit("ended", evt);
    });
  },
  methods: {
    /**
     * @public
     */
    play() {
      this.player.play();
      return this;
    },

    /**
     * @public
     */
    stop() {
      this.player.stop();
      return this;
    },

    /**
     * @public
     */
    playPrevious() {
      this.player.playPrevious();
      return this;
    },

    /**
     * @public
     */
    playNext() {
      this.player.playNext();
      return this;
    },

    /**
     * @public
     */
    duration() {
      this.player.duration();
      return this;
    },

    /**
     * @public
     * @param {number} amount
     */
    volume(amount) {
      this.player.volume(amount);
      return this;
    },

    /**
     * @public
     */
    mute() {
      this.player.mute();
      return this;
    },

    /**
     * @public
     */
    unmute() {
      this.player.unmute();
      return this;
    },

    /**
     * @public
     */
    pause() {
      this.player.pause();
      return this;
    },

    /**
     * @public
     * @param {number} time
     */
    currentTime(time) {
      this.player.currentTime(time);
      return this;
    },

    maximize() {
      this.player.maximize();
      return this;
    },

    exitMaximize() {
      this.player.exitMaximize();
      return this;
    }
  }
};
</script>
