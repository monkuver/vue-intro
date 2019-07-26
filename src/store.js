import Vue from "vue";
import Vuex from "vuex";
import settings from "./store/modules/settings";
import githubs from "./store/modules/github";
import stackoverflow from "./store/modules/stackoverflow";
import reddit from "./store/modules/reddit";
import user from "./store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    githubs,
    stackoverflow,
    reddit,
    user,
    settings
  }
});
