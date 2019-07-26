import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDBaEc1y4mrIpwCfsk7cM30I6KZBqbV8RI",
      authDomain: "workshop-preparation.firebaseapp.com",
      databaseURL: "https://workshop-preparation.firebaseio.com",
      projectId: "workshop-preparation",
      storageBucket: "",
      messagingSenderId: "1012220715714",
      appId: "1:1012220715714:web:2b21263bc4e14545"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("LOGGED_USER", user);
      }
    });
  }
}).$mount("#app");
