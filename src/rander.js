import Vue from 'vue';
import Dom from './dom.vue';
import store from './vuex.js';

import ehr_tree from './components/ehr_tree.vue';
import ehr_tree_content from './components/ehr_tree_content.vue';

Vue.component('ehr-tree', ehr_tree);
Vue.component('ehr-tree-content', ehr_tree_content);


export default (obj) => {
  Vue.prototype.master = obj;
  new Vue({
    el: '#contentDom',
    store,
    template: '<Dom/>',
    components: { Dom }
  });
};
