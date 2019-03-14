<template>
  <div class="notification is-danger">
    <p class="errorMessage">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["message"]
};
</script>
<style>
.errorMessage {
  color: red;
  margin-top: 2%;
}
</style>
