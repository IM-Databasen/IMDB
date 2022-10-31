<template>
  <div>
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div
          class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
        >
          <div class="md:5/12 lg:w-5/12">
            <nuxt-img
              preload   
              src="/placeholder650_550.webp"
              alt="placeholder image"
              width="650px"
              height="550px"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h1 class="text-2xl text-gray-900 font-bold md:text-4xl">
              IMDB - Få svarene te dine prøver
            </h1>
            <p class="mt-6 text-gray-600">Yes. Du hørte riktig.</p>
            <p class="mt-4 text-gray-600">
              Hmm ja. Her kan du då altså få svar te prøvene du har på IM.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Suggestions />
    <ul class="pages">
      <li class="chat page">
        <div class="chatArea">
          <ul ref="messages" class="messages">
            <li v-for="(msg, index) in messages" :key="index" class="message">
              <i :title="msg.date">
                {{ msg.date.split('T')[1].slice(0, -2) }}
              </i>: {{ msg.text }}
            </li>
          </ul>
        </div>
        <input v-model="message" class="inputMessage" type="text" placeholder="Type here..." @keyup.enter="sendMessage">
      </li>
    </ul>
  </div>
</template>

<script>
import Suggestions from "~/components/Suggestions.vue";
import socket from '~/plugins/socket.io.js'
export default {
  head: {
    title: "IMDB - Home",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page",
      },
    ],
  },
  name: "Index",
  transition: "slide-bottom",
  components: { Suggestions },
  asyncData () {
    return new Promise(resolve =>
      socket.emit('last-messages', messages => resolve({ messages }))
    )
  },
  data () {
    return { message: '' }
  },
  watch: {
    messages: 'scrollToBottom'
  },
  beforeMount () {
    socket.on('new-message', (message) => {
      this.messages.push(message)
    })
  },
  mounted () {
    this.scrollToBottom()
  },
  methods: {
    sendMessage () {
      if (!this.message.trim()) { return }
      const message = {
        date: new Date().toJSON(),
        text: this.message.trim()
      }
      this.messages.push(message)
      this.message = ''
      socket.emit('send-message', message)
    },
    scrollToBottom () {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      })
    }
  }
};
</script>
