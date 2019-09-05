<template>
  <router-link 
    :to="{ name: 'messages', params: { id } }"
    tag="div"
    class="chat-list-item"
  >
    <strong>{{users[0].name}}</strong>
    <strong>{{users[1].name}}</strong>
    <div>{{message}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'ChatListItem',
  props: {
    id: {
      type: String,
      default: '',
    },
    users: {
      type: Array,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scope>
  .chat-list-item {
    text-align: left;
    padding: 8px 16px;
    border-top: 1px solid #d4d4d4;
  }
  .chat-list-item:hover,
  .chat-list-item:active {
    background-color: #f1f1f1;
  }
</style>
