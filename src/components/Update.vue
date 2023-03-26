<template>
    <Header/>
    <div>
  <h1 class="text-center font-extrabold text-3xl">Update Restaurant</h1>
    </div>

    
<form class="ml-20  flex flex-col justify-center ">
    <div class="mb-6 ">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text"  v-model="Restaurant.name"  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div class="mb-6">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
      <input type="text"  v-model="Restaurant.contact" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <div class="mb-6">
        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
        <input type="text" id="password"  v-model="Restaurant.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
    <div class="flex items-start mb-6">

    </div>
    <button v-on:click="update" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>

</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
    export default {
        name:"Add",
        components:{
            Header
        },
        data(){
            return{
              Restaurant:{
                name:'',
                address:'',
                contact:''
              }
            }
        },
        methods:{
            async update (){
               const result=await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,{
                    name:this.Restaurant.name,
                    address:this.Restaurant.address,
                    contact:this.Restaurant.contact
               });
               console.warn(result);
           if (result.status==200){
              this.$router.push({name:'Home'});
           }
            }
        
        },
        async mounted(){
            const result=await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
          this.Restaurant=result.data;
            
        }
    }
</script>
