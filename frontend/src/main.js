import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2';
import VueSession from 'vue-session';
import axios from "axios";

Vue.use(VueSession,{});
let headers={
  'Accept':'*/*',
  'Authorization':""
}

Vue.prototype.$http=axios.create({
  baseURL:process.env.VUE_APP_SERVER,
  headers:headers
});

// Vue.prototype.$http.interceptors.request.use((config)=>{
//   let jwt = Vue.$cookies.get('jwt');
//   if(jwt){
//     let authorization = jwt.token_type+' '+jwt.access_token;
//     config.headers.Authorization=authorization;
//   }
//   return config;
// },(error)=>{

// })

const gauthOption = {
  clientId: '768834812579-rq7d2r3ne7am7imjnajenu670ounoi01.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
};

Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  GAuth,
  render: function (h) { return h(App) }
}).$mount('#app')
