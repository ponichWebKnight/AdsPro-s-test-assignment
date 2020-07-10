<template>
    <div class="container fill">
        <div class="row contacts-row">
            <div class="col-12">
                <div class="contact-list">
                    <div class="pt-3">
                        <span class="oi oi-person"></span>
                        <span class="pl-2">Контакты</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 offset-md-2 fill">
                <div v-if="contacts" class="contacts">
                    <div v-for="contact in contacts" :key="contact.id">
                        <contact-user :name="contact.name" :status="contact.status" @click="openChat(contact.id)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactUser from './Contact'
import {mapState} from 'vuex'

export default {
  name: 'contact-list',
  components: {
      ContactUser
  },
  methods: {
      openChat(userId) {
            this.$router.push({
                name: 'chat',
                params: {
                    chatId: userId
                },
            })
      }
  },
  computed: {
      ...mapState([
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
    .contacts-row {
        height: 100%;
        background-color: #9cb3c9;
        .contact-list {
            font-family: Arial, Helvetica, sans-serif;
            span {
                vertical-align: middle;
                font-size: 20px;
            }
        }
    }
</style>