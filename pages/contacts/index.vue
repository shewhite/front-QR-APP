<template>
  <section class="glavni">
    <div class="container">
      <spinner v-if="!contentLoaded"/>
      <div v-else>
        <h1 class="title">Contacts</h1>
        <input class="search" type="text" placeholder="search" v-model="search">
        <contact v-for="contact in filteredContacts" :user="contact"/>
      </div>
    </div>
  </section>
</template>
<script>
import Contact from "~/components/Contact";
import Spinner from "~/components/Spinner";

export default {
  layout: "home",
  middleware: "authenticated",
  components: {
    Contact,
    Spinner
  },
  data() {
    return {
      contacts: [],
      search: "",
      contentLoaded: false
    };
  },
  created() {
    this.getDataFromApi();
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact => {
        return (
          contact.first_name.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          contact.last_name.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          contact.company.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    }
  },
  methods: {
    async getDataFromApi() {
      let token = localStorage.getItem("token");
      await this.$axios
        .$get("connectUsers?token=" + token + "&id=" + this.$store.state.userId)
        .then(response => {
          this.contacts = [];
          response.forEach(r => {
            this.contacts.push(r[0]);
          });
          this.contentLoaded = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 4rem;
  margin-left: 0vw;
  font-size: 3.5rem;
}
.glavni {
  float: right;
  width: 87%;
  height: 100vh;
  background-color: #171717;
  overflow: hidden;
  transition: width 0.3s ease;
  display: inline;
}
.container {
  padding: 1%;
}
.search[type="text"] {
  width: 40%;
  padding: 1em 1em 1em 1em;
  font-size: 0.8em;
  margin: 1em 0;
  outline: none;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fdec06;
  letter-spacing: 1px;
  text-align: left;
  background: none;
  display: block;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fdec06;
  opacity: 1; /* Firefox */
}

@media screen and (min-width: 600px) {
  .glavni {
    width: calc(100% - 80px);
  }
  .title {
    font-size: 4rem;
  }
}
</style>
