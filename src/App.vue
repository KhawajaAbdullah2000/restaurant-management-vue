<script >
import { RouterLink, RouterView } from 'vue-router'
import Signup from './components/Signup.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
export default{
    name:'App',
    components:{
        Signup,
        Home,
        Login,
    }
}
</script>

<template>
  <RouterView/>
  <!-- <Signup/> -->

</template>

<style scoped>

</style>
