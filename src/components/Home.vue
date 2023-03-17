<template>
 
<h2 class="text-2xl md:text-5xl text-black font-extrabold text-center py-5">Home Page {{user}}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 text-center bg-red-300 h-96">
    <div>
        <h1 class="my-14 text-neutral-900 font-serif text-3xl font-bold">Welcome to Royal Deluxe Hotel</h1>
         <button class="my-10 p-3 bg-purple-500 rounded-xl text-black font-semibold hover:bg-yellow-300">Order now</button>
    </div>

    <div class="bg-yellow-200">
        <h3>Image</h3>
    </div>
    </div>
    
</template>


<script>
    export default {
        name:'Home',
        mounted(){
        //if a person didnot Signup, it should not go to Home page but signup
        let user=localStorage.getItem("user-info");
        if(!user){
            this.$router.push({name:'Signup'});
        }
        }
    }
</script>

