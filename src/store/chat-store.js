import Vue from 'vue'
import Vuex from 'vuex'
import DB from '../../db.json'

Vue.use(Vuex)

const store = new Vuex.Store ({
    actions: {
        fetchContacts({commit}) {
            commit('SET_CONTACTS_LIST', DB.contacts)
        },
        fetchChats({commit}) {
            commit('SET_CHATS_LIST', DB.chats)
        },
        updateContactsStatus({commit}) {
            commit('UPDATE_CONTACTS_STATUS')
        },
        sendNewMessage({commit}, data) {
            commit('ADD_NEW_MESSAGE', data)
        }
    },
    getters: {},
    mutations: {
        SET_CONTACTS_LIST(state, contacts) {
            state.contacts = contacts
        },
        SET_CHATS_LIST(state, chats) {
            state.chats = chats
        },
        UPDATE_CONTACTS_STATUS(state) {
            for (let i = 0; i < state.contacts.length; i++) {
                state.contacts[i].status = Boolean(Math.floor(Math.random() * Math.floor(2)));
                if(state.contacts[i].status) {
                    state.chats.forEach((chat) => {
                        if(chat.id === state.contacts[i].id) {
                            chat.messages.forEach((message) => {
                                if(!message.checked) {
                                    message.checked = true;
                                }
                            })
                        }
                    })
                }
            }
        },
        ADD_NEW_MESSAGE(state, data) {
            let chatId = data.chatId
            let message_id=state.chats[chatId-1].messages.length+1

            let date = new Date();
            let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
            let hours = date.getHours();

            let new_message = {
                id: message_id,
                time: hours + ":" + minutes,
                text: data.message,
                incoming: false,
                checked: false
            }
            state.chats[chatId-1].messages = [...state.chats[chatId-1].messages, new_message]
        }
    },
    state: {
        contacts: [],
        chats: []
    }
})

export default store