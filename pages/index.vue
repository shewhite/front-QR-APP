<template>
  <section class="glavni">
  <nuxt-link :to="'/scanqr'">
  <glavni
  title="SCAN"
  /> 

  </nuxt-link>
  <nuxt-link :to="'/myqr'">
   <glavni
  title="MY QR"
  />
  </nuxt-link>
  <nuxt-link :to="'/contacts'">
   <glavni
  title="CONTACTS"
  />   
  </nuxt-link>
  </section>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Glavni from '@/components/Tridiv'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  layout: 'home',
  middleware: 'authenticated',
  components: {
    Glavni
  },
  computed: mapState({
    userId: state => state.userId 
  }),
  created() {
    this.getDataFromApi();
  },
  methods: {
     async getDataFromApi() {
      let parsedCookie = JSON.parse(Cookie.get('auth'));
      let token = parsedCookie.accessToken;
      console.log(token);
      await this.$axios.$get('user?token=' + token)
      .then((response) => {
        console.log("Setting user id: " + response.user.id)
        this.$store.commit('setUserId', response.user.id);
      }).catch((error) => {
        console.log(error);
    });
    }
  }
}

</script>

<style>

body {
}
.regular {
  background: linear-gradient to right, #171717, #171717, #fdec06, #171717,
    #171717;
 }

</style>
