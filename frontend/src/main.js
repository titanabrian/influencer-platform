import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2';
import VueSession from 'vue-session';
import axios from "axios";
import notifications from 'vue-notification';

Vue.use(VueSession,{});
Vue.use(notifications);

let headers={
  'Accept':'*/*',
  'Authorization':""
}

Vue.prototype.$http=axios.create({
  baseURL:process.env.VUE_APP_SERVER,
  headers:headers
});
Vue.prototype.$http.interceptors.request.use((config)=>{
  let authorization = JSON.parse(sessionStorage.getItem(VueSession.key))
  if(authorization){
    config.headers.Authorization="Bearer "+authorization.access_token;
  }
  return config;
},(error)=>{

})

Vue.prototype.$http.interceptors.response.use((response)=>{
  return response
},
(error)=>{
  
  let response = error.response
  if(response.status===401){
    router.push("/");
  }else if(response.status===500 || response.status===404){
    Vue.notify({
      group:"error",
      title:"Error Notification",
      text:"Ops, terjadi kesalahan pada server"
    })
  }else if(response.status===422){

    Vue.notify({
      group:"error",
      title:"Validation Error",
      text:response.data.data
    })

  }else if(response.status===401){
    Vue.notify({
      group:"error",
      title:"Unauthorized Request",
      text:"Ops, pastikan anda telah melakukan Login"
    })
    Vue.$session.clear();
    Vue.router.push("/")
  }

  return error;
})

const gauthOption = {
  clientId: '768834812579-rq7d2r3ne7am7imjnajenu670ounoi01.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
};

Vue.use(GAuth, gauthOption);

Vue.config.productionTip = false;

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware

  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context
  })
})

Vue.directive('focus', {
  inserted: function (el) {
      el.getElementsByTagName("input")[0].focus()
  }
})

new Vue({
  router,
  store,
  vuetify,
  GAuth,
  render: function (h) { return h(App) }
}).$mount('#app')
