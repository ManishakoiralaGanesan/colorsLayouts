import { createStore } from "vuex";

export default createStore({
  state: {
    colors: [],
  },
  mutations: {
    storecolor(state, payload) {
      state.colors.push(payload);
      console.log(state.colors);
      localStorage.setItem("colors", JSON.stringify(state.colors));
    },
  },
  actions: {
    storecolor(context, payload) {
      context.commit("storecolor", payload);
    },
  },
  modules: {},
});
