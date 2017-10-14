import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    openStatus: false,
    loading: false,
    errorTipStatus: false,
    token: '8bfb3e37a880435af9c60f434b7a9de0fc58f1e8'
  },
  mutations: {
    openStatusEvent (state) {
      state.openStatus = !state.openStatus;
    },
    loadingEvent (state, status) {
      state.loading = status;
    },
    saveEvent (state, token) {
      state.token = token;
      state.errorTipStatus = false;
    },
    errorTipStatusEvent (state) {
      state.errorTipStatus = true;
    }
  },
  actions: {
    ajax ({ state }, obj) {
      var _me = obj._this;
      state.loading = true;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          state.loading = false;
          if (xhr.status == 200) {
            if (obj.fun) obj.fun(JSON.parse(xhr.response));
          } else if (xhr.status == 401) {
            state.errorTipStatus = true;
          }
        }
      }
      xhr.open(obj.type.toUpperCase(), obj.url, true);
      xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.setRequestHeader("Authorization", 'token ' + state.token);
      xhr.send();
    },
    pjax ({ state }, obj) {
      var _me = obj._this;
      state.loading = true;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          state.loading = false;
          if (xhr.status == 200) {
            if (obj.fun) obj.fun(xhr.response);
          } else if (xhr.status == 401) {
            state.errorTipStatus = true;
          }
        }
      }
      xhr.open(obj.type.toUpperCase(), obj.url, true);
      xhr.setRequestHeader("Authorization", 'token ' + state.token);
      xhr.setRequestHeader("X-PJAX", 'true');
      xhr.setRequestHeader("X-PJAX-Container", '#js-repo-pjax-container, .context-loader-container, [data-pjax-container]');
      xhr.setRequestHeader("X-Requested-With", 'XMLHttpRequest');
      xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(obj.data);
    }
  }
})
