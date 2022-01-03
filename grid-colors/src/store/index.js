import { createStore } from "vuex";

export default createStore({
  state: {
    colors: [],
  },
  mutations: {
    storecolor(state, payload) {
      state.colors.push(payload);
      localStorage.setItem("colorss", JSON.stringify(state.colors));
    },
    setStateValueFromLocalStorage(state) {
      let a = JSON.parse(localStorage.getItem("colorss"));
      if (a != null) {
        a.forEach((element) => {
          state.colors.push(element);
        });
      }
      console.log(state.colors);
    },
  },
  actions: {
    storecolor(context, payload) {
      context.commit("storecolor", payload);
    },
    setStateValueFromLocalStorage(context) {
      context.commit("setStateValueFromLocalStorage");
    },
  },
  modules: {},
});
