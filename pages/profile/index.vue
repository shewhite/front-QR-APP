<template>
  <profile :profile="profile"></profile>
</template>
<script>
import Profile from "@/components/Profile";
import { reject, resolve } from 'q';

export default {
  layout: 'home',
  components:{
    Profile
  },
  asyncData(){
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({
          profile: {
            id: "1", 
            name: "Marko"
          }
        })
      })
    })
  },
  data(){

  }
}
</script>
