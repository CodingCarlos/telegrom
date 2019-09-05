<template>
  <div class="chat-list">
    <h3>Usuarios</h3>
    <user-list-item
      v-for="user in $store.state.user.list"
      :key="user._id"
      :id="user._id"
      :name="user.name"
    />
  </div>
</template>

<script>
import UserListItem from '@/components/UserListItem.vue';

export default {
  name: 'ChatList',
  components: {
    UserListItem,
  },
  created() {
    this.$store.dispatch('user/getUsers');
  },
};
</script>

<style scoped>
h3 {
  text-align: left;
  padding-left: 16px; 
}
</style>
