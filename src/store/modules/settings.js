const state = { size: 10 };

const getters = {
  getSize: state => state.size
};

const actions = {
  SET_SIZE: ({ commit }, size) => {
    commit("SET_SIZE", size);
  }
};

const mutations = {
  SET_SIZE: (state, size) => {
    state.size = size;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
