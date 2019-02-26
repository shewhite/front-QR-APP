<template>

<section class="glavni">
<div class="container">
  <p class="error" v-on:click="connectUsers">hablaa</p>
   <p class="error">{{ error }}</p>

    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <qrcode-stream @decode="onDecode" @init="onInit" />
   
</div>
</section>
   
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  layout: 'home',
  middleware: 'authenticated',
  components: {
      QrcodeStream,
      QrcodeDropZone,
      QrcodeCapture
  },
  data () {
    return {
      result: '',
      error: ''
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    },
    async connectUsers() {

      let parsedCookie = JSON.parse(Cookie.get('auth'));
      let token = parsedCookie.accessToken;
      this.userToConnect = 3;
      console.log("Connecting user " + this.$store.state.userId + " with " + this.userToConnect)
    await this.$axios.$post('connectUsers', {
            userId: this.$store.state.userId,
            userToConnect: this.userToConnect,
            token: token
          } /*config*/)
    .then((response) => {

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
.error {
  font-weight: bold;
  color: red;
  text-align: right;
}
</style>
