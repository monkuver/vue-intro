import firebase from "firebase/app";
import User from "@/helpers/user.helper";

const state = { user: null };

const getters = {
  user: state => state.user,
  checkUser: state => {
    console.log(state.user);
    return state.user !== null;
  }
};

const actions = {
  SIGN_IN: async ({ commit }, { email, password }) => {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    commit("SET_USER", new User(user.user.uid));
  },
  LOGGED_USER: ({ commit }, user) => {
    commit("SET_USER", new User(user.uid));
  }
};

const mutations = {
  SET_USER: (state, UID) => {
    state.user = UID;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
