import { createStore } from "vuex";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  isNavActive: false,
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  toggleNavActive: (state) => {
    state.isNavActive = !state.isNavActive;
    console.log({
      isNavActive: state.isNavActive,
    });
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  toggleNavActive: ({ commit }) => {
    commit("toggleNavActive");
    console.log("actions.toggleNavActive", {
      isNavActive: state.isNavActive,
    });
  },
  // decrement: ({ commit }) => commit("decrement"),
  // incrementIfOdd({ commit, state }) {
  //   if ((state.count + 1) % 2 === 0) {
  //     commit("increment");
  //   }
  // },
  // incrementAsync({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit("increment");
  //       resolve();
  //     }, 1000);
  //   });
  // },
};

// getters are functions.
const getters = {
  // evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
