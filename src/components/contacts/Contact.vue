<template>
    <div class="contact-card" @click="$emit('click', $event)">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <h3 class="card-title">{{name}}</h3>
                    </div>
                    <div class="col-12">
                        <h6 v-if="status" class="text-success">онлайн</h6>
                        <h6 v-else class="text-muted">оффлайн</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'contact-user',
  props: {
    name: String,
    status: Boolean,
  }
}
</script>

<style lang="scss" scoped>
    .contact-card {
        padding: 15px 20px 0px 20px;
        text-align: center;
        h3 {
            text-align: left;
        }
        h6 {
            text-align: right;
        }
    }
    .contact-card >.card:hover {
        background-color: #ced9e4;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        cursor: pointer;
        transition: box-shadow 0.15s ease-in-out;;
    }
</style>