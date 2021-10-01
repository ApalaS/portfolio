import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "tailwindcss/tailwind.css";
import LottieAnimation from 'lottie-vuejs' // import lottie-vuejs

Vue.use(LottieAnimation); // add lottie-animation to your global scope

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
