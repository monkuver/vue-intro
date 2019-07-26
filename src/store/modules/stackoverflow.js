import api from "@/config";
const state = { so: [] };

const getters = {
  getSO: state => state.so
};

const actions = {
  GET_SO: ({ commit, rootGetters }) => {
    let size = rootGetters.getSize;
    api
      .get(
        `https://api.stackexchange.com/2.0/search?pagesize=${size}&order=desc&sort=activity&tagged=vue.js&site=stackoverflow`
      )
      .then(resp => {
        commit("SET_SO", resp.data);
      });
  }
};

const mutations = {
  SET_SO: (state, payload) => {
    state.so = payload;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
