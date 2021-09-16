import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "@/utils/message.plugin.js";
import "./registerServiceWorker";
import Loader from '@/components/app/Loader'
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import tooltipDirective from "@/directives/tooltip.directive.js";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component('Loader', Loader)
Vue.directive('toolTip', tooltipDirective)

firebase.initializeApp ({
  apiKey: "AIzaSyBNW082Ff6sl6UOd5Y8uP7bJ0t34QUP17o",
  authDomain: "crm-vue-947e0.firebaseapp.com",
  projectId: "crm-vue-947e0",
  storageBucket: "crm-vue-947e0.appspot.com",
  messagingSenderId: "237645323875",
  appId: "1:237645323875:web:46b2daeeb52507e3726256",
  measurementId: "G-95P0N1DSRY",
});


let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app =  new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

