<template>
<h2 class="text-center text-5xl font-bold text-red-700">Login</h2>
<div class="flex flex-col mx-10 my-10 text-black">
    <input type="text" class="hover:bg-purple-300 w-2/3 border-4 mb-4" v-model="email" placeholder="Enter email" />
    <br>
    <input type="password" class="hover:bg-purple-300 w-2/3 border-4 mb-4" v-model="password" placeholder="Enter password" />
    <br>
    <button v-on:click="login" class="bg-orange-600 text-white w-[76px] rounded-lg shadow-lg"> Login</button>
</div>
</template>

    
<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                );
                console.warn(result)
             if (result.status == 200 & result.data.length > 0) {
                
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({
                    name: 'Home'
                })
             }
         
        },

        mounted(){
  //if a person alreasdy this.Signup, it should not go to signin page again
            let user=localStorage.getItem("user-info");
            if(user){
                this.$router.push({name:'Home'});
            }
}

    }

}
</script>
