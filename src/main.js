import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Oruga from '@oruga-ui/oruga';
import '@oruga-ui/oruga/dist/oruga.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartPie, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faChartPie, faCaretDown, faCaretRight )
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Oruga, {
  iconComponent: 'vue-fontawesome',
  iconPack: 'fas'
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
