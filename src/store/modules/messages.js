import axios from 'axios';

function getMessageId(state, id)  {
  let ret = null;

  if (state.list) {
    state.list.forEach((Message, index) => {
      if (Message.id === id) {
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
  getMessageId: state => (id) => {
    return getMessageId(state, id);
  },
};

// Actions
const actions = {
  getMessages({ commit }, id) {
    axios.get(`${process.env.VUE_APP_API}/message?chat=${id}`)
      .then((response) => {
        const MessageList = response.data.body;
        console.log(MessageList);
        commit('setMessages', MessageList);
      })
      .catch((err) => {
        console.error('Unable to get Message list', err);
      });
  },
  sendMessage({commit}, data) {
    axios.post(`${process.env.VUE_APP_API}/message`, data);
    commit('addMessage', data)
  }
};

// Mutations
const mutations = {
  setMessages(state, data) {
    state.list = data;
  },
  addMessage(state, data) {
    state.list.push(data);
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
