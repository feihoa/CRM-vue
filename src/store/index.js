import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import category from "./category";
import record from "./record";
import rates from "../../rates.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      try{
        let res = await fetch(
        `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
      );
        res = await res.json();
      res =  res.success ? res :rates
      return res;
    }catch(e){
      console.log(rates)
      return rates;
    }
  }
  },
  getters: {
    error: (s) => s.error,
  },
  modules: {
    auth,
    info,
    category,
    record,
  },
});
