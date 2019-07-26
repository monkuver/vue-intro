import api from "@/config";
const state = { reddits: [] };

const getters = {
  getReddits: state => state.reddits
};

const actions = {
  GET_REDDITS: ({ commit, rootGetters }) => {
    let size = rootGetters.getSize;
    api
      .get(`http://www.reddit.com/r/vuejs/new.json?sort=new&limit=${size}`)
      .then(resp => {
        commit("SET_REDDITS", resp.data);
      });
  }
};

const mutations = {
  SET_REDDITS: (state, payload) => {
    state.reddits = payload;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
