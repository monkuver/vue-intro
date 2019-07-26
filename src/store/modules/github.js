import api from "@/config";
const state = { githubs: [] };

const getters = {
  getGithubs: state => state.githubs
};

const actions = {
  GET_GITHUBS: ({ commit, rootGetters }) => {
    let size = rootGetters.getSize;
    api
      .get(
        `https://api.github.com/repos/vuejs/vue/events?page=1&per_page=${size}`
      )
      .then(resp => {
        commit("SET_GITHUBS", resp.data);
      });
  }
};

const mutations = {
  SET_GITHUBS: (state, payload) => {
    state.githubs = payload;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
