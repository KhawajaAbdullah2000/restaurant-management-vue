<template>
    <Header/>
<h2 class="text-2xl md:text-5xl text-black font-extrabold text-center py-5">Home Page, {{username}}</h2>
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

    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                       ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contact
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Address
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in restaurant" :key="item.id" >
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{item.id}}
                    </th>
                    <td class="px-6 py-4">
                        {{item.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{item.contact}}
                    </td>
                    <td class="px-6 py-4">
                        {{item.address}}
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    
    
</template>


<script>
import Header from './Header.vue'
import axios from 'axios'
    export default {
        name:'Home',
        components:{
            Header
        },
        data(){
         return {
          username:'',
            restaurant: []
         }
        },
        
        async mounted(){
        //if a person didnot Signup, it should not go to Home page but signup
        let user=localStorage.getItem("user-info");
        let n=JSON.parse(user);
        this.username=n.name;
        if(!user){
            this.$router.push({name:'Signup'});
        }
     let result=await axios.get("http://localhost:3000/restaurant/");
         this.restaurant=result.data;
      
        }
        
    }
</script>

