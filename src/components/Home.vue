<template>
    <Header/>
<h2 class="text-2xl md:text-5xl text-black font-extrabold text-center py-5">Home Page, {{username}}</h2>
<h3>{{username}}</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 text-center bg-red-300 h-96">
    <div>
        <h1 class="my-14 text-neutral-900 font-serif text-3xl font-bold">Welcome to Royal Deluxe Hotel Management</h1>
        <router-link to="/add" class="my-10 p-3 bg-purple-500 rounded-xl text-black font-semibold hover:bg-yellow-300">Add new Restaurant</router-link>
         <!-- <button class="my-10 p-3 bg-purple-500 rounded-xl text-black font-semibold hover:bg-yellow-300">Add new Hotel</button> -->
    </div>

    <div>
        <div class="ml-12 my-[12px]">
        <img src="../assets/photo.jpg" alt="photo">
    </div>
    </div>
    </div>
    
</template>


<script>
import Header from './Header.vue'
    export default {
        name:'Home',
        components:{
            Header
        },
        date(){
         return {
            username:''
         }
        },
        mounted(){
        //if a person didnot Signup, it should not go to Home page but signup
        let user=localStorage.getItem("user-info");
        let n=JSON.parse(user);
        this.username=n.email;
        if(!user){
            this.$router.push({name:'Signup'});
        }
        },
    }
</script>

