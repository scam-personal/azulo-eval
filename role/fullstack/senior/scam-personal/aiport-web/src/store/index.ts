import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    provinces: []
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setProvinces(state, payload) {
      state.provinces = payload;
    }
  },
  actions: {
    async setCountries({ commit }) {
      try {
        const data = await fetch('http://localhost:8055/items/country');
        const jdata = await data.json();
        commit('setCountries', jdata.data);
      } catch (error) {
        console.error(error);
      }
    },
    async setProvinces({ commit }) {
      try {
        const data = await fetch('http://localhost:8055/items/provinceorstate');
        const jdata = await data.json();
        commit('setProvinces', jdata.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
