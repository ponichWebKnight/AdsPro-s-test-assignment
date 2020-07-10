<template>
  <div id="app">
    <chat-wrapper />
  </div>
</template>

<script>
import ChatWrapper from './components/ChatWrapper'

export default {
  name: 'App',
  components: {
    ChatWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
  height: 100%;
}
</style>
