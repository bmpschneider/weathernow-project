import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    citysInfo: [],
  },
  mutations: {
    SET_INFOS(state, infos) {
      state.citysInfo.push(infos);
    },
  },
  actions: {
    async getInfos({ commit }, payload) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=ca43d90daed197ebd02536150b1f9223`
        )
        .then((response) => {
          commit("SET_INFOS", response.data);
        });
    },
  },
});
