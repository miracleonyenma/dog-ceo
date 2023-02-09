import { createStore } from "vuex";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  isNavActive: false,
  dogs: [],
  breeds: [
    {
      name: "affenpinscher",
      urls: ["https://dog.ceo/api/breed/affenpinscher/34r3r3r.jpg"],
    },
  ],
  // dogsSet: new Set(),
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

  // mutation to set the dogs array
  setDogs: (state, dogs) => {
    state.dogs = dogs;
  },

  // mutation to add dogs to the dogs array
  addDogs: (state, dogs) => {
    state.dogs = [...state.dogs, ...dogs];
  },

  // mutation to add a breed to the breeds array
  addBreed: (state, breed) => {
    state.breeds = [...state.breeds, breed];
  },

  // mutation to add a urls to existing breed
  addUrls: (state, { breed, urls }) => {
    const breedIndex = state.breeds.findIndex((b) => b.name === breed);
    state.breeds[breedIndex].urls = [...state.breeds[breedIndex].urls, ...urls];
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
  // action to set the dogs array
  setDogs: ({ commit }, dogs) => {
    commit("setDogs", dogs);
  },

  // action to add dogs to the dogs array
  addDogs: ({ commit }, dogs) => {
    commit("addDogs", dogs);
  },

  // action to add a breed to the breeds array
  addBreed: ({ commit }, breed) => {
    commit("addBreed", breed);
  },

  // action to add a urls to existing breed
  addUrls: ({ commit }, { breed, urls }) => {
    commit("addUrls", { breed, urls });
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
  // function to get dogs array set
  dogsSet: (state) => {
    return new Set(state.dogs);
  },
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
