<script>
/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */
export default {
  name: "CldPoster",

  inheritAttrs: false,

  render() {
    // console.error(
    //   `<cld-poster /> should be a immediate descendant of cld-video`
    // );
    return null;
  }
};
</script>
