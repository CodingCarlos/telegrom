import axios from 'axios';

function getUserId(state, id)  {
  let ret = null;

  if (state.list) {
    state.list.forEach((User, index) => {
      if (User._id === id) {
        ret = User;
      }
    });
  }

  return ret;
}

// Inital state
const initialState = {
  list: [],
  selected: {},
};

// Getters
const getters = {
  getUserId: state => (id) => {
    return getUserId(state, id);
  },
};

// Actions
const actions = {
  getUsers({ commit }) {
    axios.get(`${process.env.VUE_APP_API}/user`)
      .then((response) => {
        const UserList = response.data.body;
        console.log(UserList);
        commit('setUsers', UserList);
      })
      .catch((err) => {
        console.error('Unable to get User list', err);
      });
  },
  selectUser({commit}, data) {
    // axios.post(...);
    commit('selectUser', data);
  }
};

// Mutations
const mutations = {
  setUsers(state, data) {
    state.list = data;
  },
  selectUser(state, data) {
    console.log('Commiting in...');
    console.log(data);
    state.selected = data;
  },
  addMessage(state, data) {
    let index = getUserId(state, data.User);
    state.list[index].messages.push(data.message);
    state.list[index].message = data.message;
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
