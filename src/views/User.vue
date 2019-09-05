<template>
  <div class="chat">
    <top-bar back>
      {{chat.name}}
    </top-bar>
    
    <div class="messages">
      <div v-for="message in chat.messages">
        {{message}}
      </div>
    </div>

    <div class="composer">
      <input type="text" v-model="newMessage" />
      <button @click="sendMessage()">></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue';
import ChatList from '@/components/ChatList.vue';

export default {
  name: 'Chat',
  components: {
    TopBar,
    ChatList,
  },
  data: () => ({
    chatId: null,
    newMessage: '',
  }),
  computed: {
    chat() {
      let chat = [];
      if (this.chatId !== null) {
        chat = this.$store.state.chat.list[this.chatId];
      }

      return chat;
    },
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('chat/sendMessage', {
        message: this.newMessage,
        chat: this.chat.id,
      });
      this.newMessage = '';
    }
  },
  created() {
    this.chatId = this.$store.getters['chat/getChatId'](this.$route.params.id);
  },
};
</script>

<style scoped>
  .messages {
    margin-bottom: 32px;
    width: 100%;
  }

  .composer {
    background-color: #fff;
    display: flex;
    height: 32px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
    .composer input {
      width: 90%;
    }
    .composer button {
      width: 10%;
    }
</style>