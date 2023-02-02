<template>
    <button @click="reload">App</button>
    <Posts />
    <Albuns />
    <Todos />
</template>

<script>
import Posts from './components/Posts.vue'
import Albuns from './components/Albuns.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Posts,
    Albuns,
    Todos,
    
  },
  methods: {
    reload: function(){
      window.location.reload()
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  text-align: left;
}
</style>
