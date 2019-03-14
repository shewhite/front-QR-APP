<template>
  <section class="glavni">
    <nuxt-link :to="'/scanqr'">
      <glavni title="SCAN"/>
    </nuxt-link>
    <nuxt-link :to="'/myqr'">
      <glavni title="MY QR"/>
    </nuxt-link>
    <nuxt-link :to="'/contacts'">
      <glavni title="CONTACTS"/>
    </nuxt-link>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Glavni from "@/components/Tridiv";
export default {
  layout: "home",
  middleware: "authenticated",
  components: {
    Glavni
  },
  created() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      let token = localStorage.getItem("token");
      await this.$axios
        .$get("user?token=" + token)
        .then(response => {
          console.log("Setting user id: " + response.user.id);
          this.$store.commit("setUserId", response.user.id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

