<template>
  <div class="chat-list-item" @click="select()">
    <strong>{{name}}</strong>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    select() {
      const user = this.$store.getters['user/getUserId'](this.id);
      this.$store.dispatch('user/selectUser', user);
      this.$router.push({
        name: 'chat',
        params: {
          id: this.id,
        }
      })
    }
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
