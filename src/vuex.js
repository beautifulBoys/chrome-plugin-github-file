import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    openStatus: false,
    loading: false
  },
  mutations: {
    openStatusEvent (state) {
      state.openStatus = !state.openStatus;
    },
    loadingEvent (state, status) {
      state.loading = status;
    }
  },
  actions: {
  }
})
