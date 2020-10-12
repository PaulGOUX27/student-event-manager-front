<template>
  <div class="header">
    <router-link to="/">
      <div>Student Event Manager</div>
    </router-link>
    <div class="buttons">
      <router-link to="/new" tag="button">
        New event
      </router-link>
      <router-link to="/list" tag="button">
        Manage events
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
