import Vue from 'vue';
import Vuex from 'vuex';

import user from '@/store/modules/user';
import chat from '@/store/modules/chat';
import messages from '@/store/modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    chat,
    messages,
  },
});
