import axios from 'axios';

function getChatId(state, id)  {
  let ret = null;

  if (state.list) {
    state.list.forEach((chat, index) => {
      if (chat.id === id) {
        ret = index;
      }
    });
  }

  return ret;
}

// Inital state
const initialState = {
  list: [],
};

// Getters
const getters = {
  getChatId: state => (id) => {
    return getChatId(state, id);
  },
};

// Actions
const actions = {
  getChats({ commit }, id) {
    axios.get(`${process.env.VUE_APP_API}/chat/${id}`)
      .then((response) => {
        const chatList = response.data.body;
        console.log(chatList);
        commit('setChats', chatList);
      })
      .catch((err) => {
        console.error('Unable to get chat list', err);
      });
  },
  sendMessage({commit}, data) {
    // axios.post(...);
    commit('addMessage', {chat: data.chat, message: data.message})
  }
};

// Mutations
const mutations = {
  setChats(state, data) {
    state.list = data;
  },
  addMessage(state, data) {
    let chatIndex = getChatId(state, data.chat);
    state.list[chatIndex].messages.push(data.message);
    state.list[chatIndex].message = data.message;
  },
};


// Export store
export default {
  getters,
  actions,
  mutations,
  state: initialState,
  namespaced: true,
};
