import Vue from 'vue';
import App from './components/App.vue';
import { Button, Field, Input } from 'buefy';
import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Field);
Vue.use(Input);

new Vue({
  render: h => h(App),
}).$mount('#app');
