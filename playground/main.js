import Vue from 'vue' // Replaces Vue
import App from './App.vue' // Some component app
import Cloudinary, {CldContext, CldImage, CldTransformation, CldVideo} from "../src/index";

Vue.use(Cloudinary, {
  configuration: { cloudName: 'demo' },
  components: [ CldImage,CldTransformation,CldVideo,CldContext ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')

