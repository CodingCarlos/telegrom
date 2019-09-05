<template>
  <div class="chat-list">
    <h3>Chats</h3>
    <chat-list-item
      v-for="chat in $store.state.chat.list"
      :key="chat._id"
      :id="chat._id"
      :users="chat.users"
      :message="chat.message"
    />
  </div>
</template>

<script>
import ChatListItem from '@/components/ChatListItem.vue';

export default {
  name: 'ChatList',
  components: {
    ChatListItem,
  },
  created() {
    this.$store.dispatch('chat/getChats', this.$route.params.id);
  }
};
</script>

<style scoped>
h3 {
  text-align: left;
  padding-left: 16px; 
}
</style>
