<template>
  <div class="contact-card">
    <button class="collapsible" v-on:click="onClick">
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    </button>
    <div class="content" v-show="colapsed">
      <h3 class="content-text">{{ user.company }}</h3>
      <h3 class="content-text">{{ user.email }}</h3>
      <h3 class="content-text">{{ user.phone }}</h3>
      <h3 class="content-text">{{ user.website }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  props: ["user"],
  data() {
    return {
      colapsed: false
    };
  },
  methods: {
    onClick() {
      console.log(this.colapsed);
      this.colapsed = !this.colapsed;
    }
  }
};
</script>

<style scoped>
.contact-card {
  padding: 1%;
}
@media screen and (min-width: 600px) {
  .contact-card {
    padding: 0;
  }
}
.collapsible {
  background-color: #c0c0c0;
  border: solid 2px #171717;
  color: #171717;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: center;
  outline: none;
  font-size: 15px;
  text-transform: uppercase;
}

.active,
.collapsible:hover {
  background-color: #fdec06;
  color: #171717;
}

.content {
  padding: 0 18px;
  max-height: 100vh;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #171717;
}
.content-text {
  color: white;
  text-align: center;
  margin: 5px;
  font-weight: normal;
}
</style>
