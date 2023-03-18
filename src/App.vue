<script >
import { RouterLink, RouterView } from 'vue-router'
import Signup from './components/Signup.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
export default{
    name:'App',
    components:{
        Signup,
        Home,
        Login,
        Add,
    }
}
</script>

<template>
  <RouterView/>
  <!-- <Signup/> -->

</template>

<style scoped>

</style>
