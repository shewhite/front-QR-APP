<template>
  <section class="glavni">
    <img class="title-image" src="~/static/images/qr-scan.png">
    <div class="container">
      <qrcode-stream v-if="readingQr" @decode="onDecode" @init="onInit"/>
      <div v-else>
        <h2 class="success-text">QR SCANED!</h2>
        <h3 class="success-text-sm">You will receive mail with new contact information</h3>
        <div class="btn-container">
          <button class="scanqr-btn" @click="goToContacts">Go to contacts</button>
          <button class="scanqr-btn" @click="readingQr = true">Scan new qr</button>
        </div>
      </div>
      <p class="error">{{ error }}</p>
    </div>
  </section>
</template>
<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  layout: "home",
  middleware: "authenticated",
  components: {
    QrcodeStream
  },
  data() {
    return {
      error: "",
      readingQr: true
    };
  },

  methods: {
    goToContacts() {
      this.$router.push({
        path: "/contacts"
      });
    },
    async onDecode(result) {
      try {
        result = JSON.parse(result);
        let token = localStorage.getItem("token");
        this.userToConnect = result.id;
        console.log(
          "Connecting user " +
            this.$store.state.userId +
            " with " +
            this.userToConnect
        );
        this.readingQr = false; //gasimo stream
        this.error = "";
        await this.$axios
          .$post(
            "connectUsers",
            {
              userId: this.$store.state.userId,
              userToConnect: this.userToConnect,
              token: token
            } /*config*/
          )
          .then(response => {
            console.log("Users connected");
          })
          .catch(error => {
            console.log(error);
          });
      } catch (err) {
        this.error = err.message;
      }
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style scoped>
.glavni {
  float: right;
  width: 87%;
  height: 100vh;
  background-color: #171717;
  overflow: hidden;
  transition: width 0.3s ease;
  display: initial;
}
.container {
  padding: 1%;
}
.btn-container {
  max-width: 700px;
  margin: auto;
}
@media screen and (min-width: 600px) {
  .glavni {
    width: calc(100% - 80px);
  }
  .title-image {
    max-width: 250px;
  }
}
.title-image {
  margin-top: 5%;
  margin-bottom: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.success-text {
  font-size: 2.5em;
}
.success-text-sm {
  font-size: 1.8em;
  color: #fdec06;
  text-align: center;
}
.scanqr-btn {
  background-color: #fdec06;
  outline: none;
  padding: 0.4em 0;
  width: 100%;
  text-align: center;
  font-size: 1.6em;
  margin-top: 1em;
  border: none;
  color: #171717;
  box-shadow: 0px 2px 1px rgba(28, 28, 29, 0.42);
  border-radius: 22px;
}
.scanqr-btn:hover {
  color: #fff;
  background: #002242;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.error {
  font-weight: bold;
  color: red;
  text-align: right;
}
</style>
