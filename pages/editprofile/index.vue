<template>
  <section class="glavni">
    <div class="container">
      <div class="agile">
        <div class="signin-form profile">
          <h3>EDIT MY PROFILE</h3>

          <div class="login-form">
            <spinner v-if="showSpinner"/>
            <form action="#" method="post" @submit.prevent="update" v-else>
              <input
                type="text"
                v-model="user.first_name"
                name="firstName"
                placeholder="First name"
                required
              >
              <input
                type="text"
                v-model="user.last_name"
                name="lastName"
                placeholder="Last name"
                required
              >
              <input
                type="text"
                v-model="user.company"
                name="company"
                placeholder="Company"
                required
              >
              <input type="text" v-model="user.email" name="email" placeholder="E-mail" required>
              <input type="text" v-model="user.phone" name="phone" placeholder="Phone" required>
              <input
                type="text"
                v-model="user.website"
                name="website"
                placeholder="Website"
                required
              >
              <input type="submit" value="UPDATE">
            </form>
            <modal
              v-if="showModal"
              @close="showModal = false"
              :header="modalHeader"
              :body="modalBody"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Modal from "~/components/Modal";
import Spinner from "~/components/Spinner";

export default {
  layout: "home",
  middleware: "authenticated",
  components: {
    Modal,
    Spinner
  },
  data() {
    return {
      showModal: false,
      showSpinner: true,
      modalHeader: "",
      modalBody: "",
      user: {
        first_name: "",
        last_name: "",
        company: "",
        companyAddress: "",
        phone: "",
        website: ""
      }
    };
  },
  computed: {
    fullName: {
      get: function() {
        if (this.firstName && this.lastName) {
          return this.firstName + " " + this.lastName;
        } else {
          return this.firstName || this.lastName;
        }
      },
      set: function(newFullName) {
        const names = newFullName.split(" ");

        if (names.length === 2) {
          this.firstName = names[0];
          this.lastName = names[1];
        }

        if (names.length <= 1) {
          this.firstName = names[0] || "";
          this.lastName = "";
        }
      }
    },

    formIsValid: function() {
      return this.firstName && this.lastName && this.email;
    }
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
          console.log(response.user);
          this.user = response.user;
          this.showSpinner = false;
        })
        .catch(error => {
          console.log(error);
          this.showSpinner = false;
        });
    },
    async update() {
      this.showSpinner = true;
      console.log("Updating profile...");
      await this.$axios
        .$post(
          "update",
          {
            token: localStorage.getItem("token"),
            userId: this.$store.state.userId,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            email: this.user.email,
            company: this.user.company,
            website: this.user.website,
            phone: this.user.phone
          } /*config*/
        )
        .then(response => {
          this.modalHeader = "Success";
          this.modalBody = "Your profile is updated";
          this.showModal = true;
        })
        .catch(error => {
          this.modalHeader = "Error";
          this.modalBody = String(error);
          this.showModal = true;
          console.log(error);
        });
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
  display: inline;
}
@media screen and (min-width: 600px) {
  .glavni {
    width: calc(100% - 80px);
  }
}
.container {
  min-width: 100vh;
  min-height: 100vh;
  background-color: black;
}

.form-container {
  margin-left: 20vh;
  margin-right: 10vh;
}

.container {
  min-width: 100vw;
  min-height: 120vh;
  background-color: #fdec06;
}

blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/*--start editing from here--*/
a {
  text-decoration: none;
}
.txt-rt {
  text-align: right;
} /* text align right */
.txt-lt {
  text-align: left;
} /* text align left */
.txt-center {
  text-align: center;
} /* text align center */
.float-rt {
  float: right;
} /* float right */
.float-lt {
  float: left;
} /* float left */
.clear {
  clear: both;
} /* clear float */
.pos-relative {
  position: relative;
} /* Position Relative */
.pos-absolute {
  position: absolute;
} /* Position Absolute */
.vertical-base {
  vertical-align: baseline;
} /* vertical align baseline */
.vertical-top {
  vertical-align: top;
} /* vertical align top */
nav.vertical ul li {
  display: block;
} /* vertical menu */
nav.horizontal ul li {
  display: inline-block;
} /* horizontal menu */
img {
  max-width: 100%;
}
/*--end reset--*/
body {
  font-family: "Hind Guntur", sans-serif;
  background: #ccbd00;
}
h1 {
  color: #fff;
  text-align: center;
  padding: 1em 0 0 0;
  font-size: 3em;
  font-weight: 700;
}

h3 {
  font-family: "Hind Guntur", sans-serif;
}
/*-- main --*/
.main {
  margin: 4em auto;
  width: 50%;
}
.banner {
  background-color: #171717;
  background-size: cover;
}

/*--signin-form--*/
.w3 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 48%;
  margin: auto;
  margin-top: 50px;
}
.agile {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 48%;
  margin: auto;
  margin-top: 50px;
}
.signin-form {
  background-color: #171717;
  background-size: cover;
  padding: 2em 2em;
  text-align: center;
}
.signin-form h3 {
  font-size: 2em;
  color: #fdec06;
  font-weight: 700;
  margin-bottom: 1.5em;
}
.signin-form h3 span {
  color: #fdec06;
}
.signin-form img {
  border-radius: 50%;
}
.login-form {
  margin: 1em 0 2.5em;
}
.signin-form input[type="text"],
.signin-form input[type="password"] {
  width: 92%;
  padding: 1em 1em 1em 1em;
  font-size: 0.8em;
  margin: 1em 0;
  outline: none;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fdec06;
  letter-spacing: 1px;
  text-align: center;
}
.signin-form input[type="text"] {
  background: none;
  display: block;
}
.signin-form input[type="password"] {
  background: none;
  display: block;
}
::-webkit-input-placeholder {
  color: #4b4a43 !important;
}
.signin-form input[type="submit"] {
  outline: none;
  padding: 0.9em 0;
  width: 100%;
  text-align: center;
  font-size: 1em;
  margin-top: 1em;
  border: none;
  color: #171717;
  cursor: pointer;
  background: #c9bc06;
  box-shadow: 0px 2px 1px rgba(28, 28, 29, 0.42);
  border-radius: 22px;
}
.signin-form input[type="submit"]:hover {
  color: #fff;
  background: #002242;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.signin-form p a {
  font-size: 0.875em;
  color: #fff;
  letter-spacing: 1px;
}
/*--//signin-form--*/
.header-social {
  text-align: center;
  margin-bottom: 2em;
}
.tp {
  margin: 3.7em 0 0;
}
h5 {
  border-left: 1px dotted #7467b9;
  padding: 0.5em;
}

.header-social h4 {
  font-size: 17px;
  color: #6a67ce;
  text-align: center;
  margin: 20px 0px;
  font-family: "Hind Guntur", sans-serif;
}
.header-social h4 a {
  color: #6a67ce;
}
.header-social h4 a:hover {
  color: #ffb900;
}
/*--copyright--*/
.copyright {
  margin: 2em;
  text-align: center;
}
.copyright p {
  font-size: 1em;
  color: #fff;
  line-height: 1.8em;
}
.copyright p a {
  color: #fff;
}
.copyright p a:hover {
  color: #56c8dc;
}

/*---- responsive-design -----*/
@media (max-width: 1440px) {
  .main {
    width: 56%;
  }
}
@media (max-width: 1366px) {
  .main {
    width: 59%;
  }
}
@media (max-width: 1280px) {
  h1 {
    font-size: 2.5em;
  }
  .main {
    width: 63%;
  }
}
@media (max-width: 1080px) {
  .main {
    width: 74%;
    margin: 2em auto;
  }
}
@media (max-width: 1024px) {
  .main {
    width: 82%;
  }
  .signin-form {
    padding: 3em 2.5em;
  }
}
@media (max-width: 991px) {
  .main {
    width: 85%;
  }
}
@media (max-width: 900px) {
  .main {
    width: 93%;
  }
}
@media (max-width: 800px) {
  .main {
    width: 51%;
  }
  .w3 {
    float: none;
    width: 100%;
    margin-right: 0;
    margin-bottom: 5%;
  }
  .agile {
    float: none;
    width: 100%;
    margin-top: 0px;
  }
  .signin-form p a {
    line-height: 1.8em;
  }
}
@media (max-width: 768px) {
  .main {
    width: 53%;
  }
}
@media (max-width: 736px) {
  .main {
    width: 55%;
  }
}
/*-- w3layouts --*/
@media (max-width: 667px) {
  .main {
    width: 61%;
  }
}
@media (max-width: 640px) {
  .main {
    width: 64%;
  }
}
@media (max-width: 600px) {
  .main {
    width: 68%;
  }
}
@media (max-width: 568px) {
  .main {
    width: 72%;
  }
}
@media (max-width: 480px) {
  .main {
    width: 78%;
  }
  .header-social a.face {
    width: 27%;
  }
  .header-social a.goog {
    width: 21%;
  }
  .w3 {
    margin-bottom: 0%;
  }
  .signin-form input[type="text"],
  .signin-form input[type="password"] {
    width: 91%;
  }
  h1 {
    font-size: 2.2em;
  }
  .profile {
    margin-top: 2em;
  }
  .signin-form {
    padding: 2em 2em;
  }
  .copyright p {
    font-size: 0.9em;
  }
  /*-- agileits --*/
}
@media (max-width: 414px) {
  .signin-form input[type="text"],
  .signin-form input[type="password"] {
    width: 89%;
  }
  .signin-form {
    padding: 2em 1.5em;
  }
  .header-social a.face {
    width: 25%;
  }
  .header-social a.goog {
    width: 19%;
  }
  .tp {
    margin: 1.7em 0 0;
  }
  .header-social {
    margin-bottom: 1em;
  }
  .signin-form h3 {
    margin-bottom: 1em;
  }
  .login-form {
    margin: 1em 0 1.5em;
  }
}
@media (max-width: 384px) {
  h1 {
    font-size: 2em;
  }
  .header-social a.face {
    width: 22%;
  }
  .header-social a.goog {
    width: 17%;
  }
}
@media (max-width: 375px) {
  .main {
    width: 79%;
  }
  .header-social a.goog {
    width: 15%;
  }
}
@media (max-width: 320px) {
  h1 {
    font-size: 1.6em;
  }
  .main {
    width: 89%;
    margin: 1.5em auto;
  }
  .login-form {
    margin: 1em 0 1.5em;
  }
  .signin-form {
    padding: 1.5em 1.5em;
  }
  .signin-form h3 {
    font-size: 1.5em;
  }
  .signin-form input[type="text"],
  .signin-form input[type="password"] {
    width: 88%;
  }
  .signin-form input[type="submit"] {
    padding: 0.7em 0;
    font-size: 0.9em;
  }
  .signin-form p a {
    font-size: 0.9em;
  }

  .signin-form p a {
    line-height: 1.5em;
  }
  .copyright {
    margin: 1em;
  }
}
</style>

