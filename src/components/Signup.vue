<template>
 
   <h2 class="text-center text-5xl font-bold text-red-700">Signup</h2>
<div class="flex flex-col mx-10 my-10 text-black">
  <input type="text" class="hover:bg-purple-300 w-2/3 border-4 mb-4 " v-model="name" placeholder="Enter name"/>
  <br> 
  <input type="text" class="hover:bg-purple-300 w-2/3 border-4 mb-4" v-model="email" placeholder="Enter email"/>
  <br>
  <input type="password" class="hover:bg-purple-300 w-2/3 border-4 mb-4" v-model="password" placeholder="Enter password"/>
  <br>
  <button v-on:click="Signup" class="bg-orange-600 text-white w-[76px] rounded-lg shadow-lg"> Signup</button>
</div>
   
   
</template>

<script>
import axios from 'axios'
export default {
  name:'Signup',
  data() 
  {
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
   async Signup()
   {
      let result=await axios.post("http://localhost:3000/user",{
        email:this.email,
        password:this.password,
        name:this.name
      });
    console.warn(result);
    if (result.status==201)
    {
      //alert(result.data.email);
      localStorage.setItem("user-info",JSON.stringify(result.data))
      this.$router.push({name:'Home'})
    }


  },
},
mounted(){
  //if a person alreasdy this.Signup, it should not go to signup page again
  let user=localStorage.getItem("user-info");
  if(user){
    this.$router.push({name:'Home'});
  }
}
}
</script>


