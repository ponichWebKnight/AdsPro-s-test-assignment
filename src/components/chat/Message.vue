<template>
    <div class="row">
        <div v-if="incoming" class="col-5 mt-2 mb-2 ml-2">
            <div class="card">
                <div class="card-body">
                    <span class="card-text">{{message}}</span>
                </div>
            </div>
            <div class="text-left">
                <span class="time">{{time}}</span>
            </div>
        </div>
        <div v-else class="offset-7 col-5 mt-2 mb-2">
            <div class="card your-message mr-2">
                <div class="card-body">
                    <span class="card-text">{{message}}</span>
                </div>
            </div>
            <div class="text-right mr-2">
                <div v-if="checked">
                    <span class="time">{{time}}</span>
                    <span class="oi oi-check oi-sm pl-2"></span>
                    <span class="oi oi-check oi-sm"></span>
                </div>
                <div v-else>
                    <span class="time">{{time}}</span>
                    <span class="oi oi-check oi-sm pl-2"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'contact-user',
  props: {
    message: String,
    time: String,
    incoming: Boolean,
    checked: Boolean,
  }
}
</script>

<style lang="scss" scoped>
    .time {
        font-size: 12px;
        color: gray;
    }
    .your-message  {
        background-color: #dee6ed;
        .card-body {
            text-align: initial;
        }
    }
</style>