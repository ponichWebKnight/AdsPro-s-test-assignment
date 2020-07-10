<template>
    <div class="container">
        <div class="row chat-row">
            <div class="col-12">
                <div class="chat-header">
                    <div class="row">
                        <div class="col-3 return-back" @click="returnBack">
                            <div class="pt-3 pb-2">
                                <span class="oi oi-arrow-left"></span>
                                <span class="pl-3">Назад</span>
                            </div>
                        </div>
                        <div class="offset-1 col-4">
                            <div class="pt-3 pb-2">
                                <span class="oi oi-person"></span>
                                <span class="pl-2">{{chats[chatId-1].name}}</span>
                            </div>
                        </div>
                        <div class="offset-1 col-3">
                            <div class="pt-3 pb-2">
                                <h6 v-if="contacts[chatId-1].status" class="text-success text-right mr-2">онлайн</h6>
                                <h6 v-else class="text-muted text-right mr-2">оффлайн</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="messages-block">
                    <div class="message" v-for="message in chats[chatId-1].messages" :key="message.id">
                        <message :message="message.text" :time="message.time"
                            :incoming="message.incoming" :checked="message.checked"/>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="new-message pt-2 pb-3">
                    <div class="input-group mb-3">
                        <input v-model="message" type="text" class="form-control" placeholder="Введите сообщение..." aria-label="Новое сообщение" aria-describedby="basic-addon2" @keyup.enter="sendMessage">
                        <div class="input-group-append">
                            <button class="btn btn-outline-dark" type="button" @click="sendMessage">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'user-chat',
    components: {
        Message
    },
    data() {
        return {
            chatId: null,
            message: ''
        }
    },
    created() {
        this.chatId = this.$route.params.chatId
        if(!this.chats.length) {
            this.fetchChats()
        }
    },
    mounted() {
        if(!this.chats.length) {
            this.fetchChats()
        }
        this.scrollToChatEnd()
    },
    methods: {
        ...mapActions([
            'fetchChats',
            'sendNewMessage'
        ]),
        returnBack() {
            this.$router.push({
                name: 'contacts',
            })
        },
        scrollToChatEnd() {
            const el = this.$el.querySelectorAll('.message:last-child')[0];
            if (el) {
                el.scrollIntoView();
            }
        },
        sendMessage() {
            let data = {
                chatId: this.chatId,
                message: this.message
            }
            this.sendNewMessage(data)

            this.message = ''
            setTimeout(function() {
                this.scrollToChatEnd()
            }.bind(this), 0)
        }
  },
  computed: {
        ...mapState([
            'chats',
            'contacts'
        ])
  }
}
</script>

<style lang="scss" scoped>
    .fill { 
        min-height: 100%;
        height: 100%;
    }
    .chat-row {
        background-color: #9cb3c9;
        .chat-header {
            font-family: Arial, Helvetica, sans-serif;
            span {
                vertical-align: middle;
                font-size: 20px;
            }
        }
        .return-back:hover {
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            transition: box-shadow 0.15s ease-in-out;
        }
    }
    .messages-block {
        background-color: white;
        min-height: 715px;
        overflow-y: auto;
        overflow-x: hidden;
        .message {
            background-color: white;
            padding: 0px, 15px, 15px 15px;
        }
    }
</style>