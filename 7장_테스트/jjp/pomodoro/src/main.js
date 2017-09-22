import Vue from 'vue'
import App from './App'
import VueNoiseGenerator from './plugins/VueNoiseGeneratorPlugin'
// import SimpleRhythm from './plugins/SimpleRhythmPlugin'
import FilterPlugin from './plugins/FilterPlugin'

Vue.use(VueNoiseGenerator);
Vue.use(FilterPlugin);
// Vue.use(SimpleRhythm);

/* eslint-disable no-new */
new Vue({  
  el: 'app',
  components: { App }
});
