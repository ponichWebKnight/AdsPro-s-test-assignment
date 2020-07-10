import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '../components/contacts/ContactList'
import UserChat from '../components/chat/UserChat'

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    hashbang: false,
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: ContactList
        },
        {
            path: '/chat/:chatId',
            name: 'chat',
            component: UserChat
        }
    ]
})

export default router