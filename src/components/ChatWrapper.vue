<template>
    <div class="chat-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'chat-wrapper',
        data() {
            return {
                changeStatus: null
            }
        },
        created() {
            if(!this.contacts.length) {
                this.fetchContacts()
            }
        },
        mounted() {
            if (this.changeStatus === null) {
                this.updateStatuses()
            }
        },
        beforeDestroy() {
            clearInterval(this.changeStatus)
        },
        methods: {
            ...mapActions([
                'updateContactsStatus',
                'fetchContacts'
            ]),
            updateStatuses() {           
                this.changeStatus = setInterval(function() {
                    if(this.contacts.length) {
                        this.updateContactsStatus()
                    }
                }.bind(this), 5000);
            }
        },
        computed: {
            ...mapState([
                'contacts'
            ])
        }
    }
</script>

<style>
    .chat-wrapper {
        height: 100%;
    }
</style>