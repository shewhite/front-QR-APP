<template>

<section class="glavni">
<div class="container">
 <h1>Contacts</h1> 
 <div class="contacts-container">
   <h1 v-for="contact in contacts">{{ contact.name }}</h1>
  </div> 
</div>
</section>
   
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'home',
  middleware: 'authenticated',
  /*
  asyncData(){
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({
          contacts: [
            {
            id: 1, 
            name: "Sara"
            },
            {
            id: 2, 
            name: "Marko"
            }
          ]
        })
      })
    })
    
  },*/
  data() {
    return {
      contacts: [
        { name: 'Foo' },
        { name: 'Bar' }
      ]
    }
  },
 created() {
    this.getDataFromApi();
  },
  methods: {
     async getDataFromApi() {
      let parsedCookie = JSON.parse(Cookie.get('auth'));
      let token = parsedCookie.accessToken;
      console.log(token);
      await this.$axios.$get('connectUsers?token=' + token + '&id=' + this.$store.state.userId)
      .then((response) => {
        //this.contacts = response
        this.contacts = []
        response.forEach(r => {
          this.contacts.push(r[0]);
        });
        console.log(this.contacts)
        console.log(this.contacts[1])

       // this.contacts = response.data;
      }).catch((error) => {
        console.log(error);
    });
    }
  }


}
</script>

<style scoped>
	.container {
  min-width: 100vh;
  min-height: 100vh;
  background-color: #171717;
}
.contacts-container{
  /*overflow-y:scroll;*/
}
</style>
