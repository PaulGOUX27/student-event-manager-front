<template>
  <div class="header">
    <router-link to="/">
      <div>Student Event Manager</div>
    </router-link>
    <div class="buttons">
      <router-link to="/new">
        <button class="green-button new-event-button">New event</button>
      </router-link>
      <router-link to="/list">
        <button class="green-button manage-event-button">Manage events</button>
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

.buttons {
  display: flex;
}

.new-event-button {
  width: 188px;
  text-align: center;
  justify-content: center;
}

.manage-event-button {
  width: 273px;
  text-align: center;
  justify-content: center;
}
</style>
