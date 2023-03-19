<template>
    
<nav class=" bg-yellow-300 border-gray-200 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-xl font-sans font-semibold whitespace-nowrap dark:text-white">Restaurant Management</span>
      </a>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-red-400 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-bold md:border-0 ">
           <router-link to="/">Home</router-link>
          <li>
    
            <router-link to="/add">Add restaurant</router-link>
         </li>
          <li>

            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Update restaurant</a>
          </li>

          <li>
            <a v-on:click="logout" class="block py-2 pl-3 pr-4 cursor-pointer text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>

          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
    export default {
        name:"Header",
    methods:{
      logout(){
      localStorage.clear();
      this.$router.push({name:"Login"})
      }
    },


}
</script>

