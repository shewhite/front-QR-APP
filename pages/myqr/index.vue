<template>
  <section class="glavni">
    <div class="container">
      <!--prikazuje se moj izgenerirani qr-->
      <div class="tridivqr">
        <h2 class="content-text">MY QR</h2>
        <qrcode-vue id="centar" :value="qrValue" :size="200" level="H" background="#fdec06"></qrcode-vue>
      </div>
    </div>
  </section>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import { mapGetters, mapState } from "vuex";

export default {
  layout: "home",
  created() {
    this.qrData();
  },
  data() {
    return {
      qrValue: null
    };
  },
  methods: {
    qrData: function() {
      this.qrValue = JSON.stringify({
        id: this.$store.state.userId
      });
    }
  },
  components: {
    QrcodeVue
  }
};
</script>
<style scoped>
.glavni {
  float: right;
  width: 87%;
  height: 100vh;
  background-color: #fdec06;
  overflow: hidden;
  transition: width 0.3s ease;
}
.container {
  padding: 1%;
}
.content-text {
  margin: 5%;
}
@media screen and (min-width: 600px) {
  .glavni {
    width: calc(100% - 80px);
  }
}
</style>

