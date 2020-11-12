<template>
  <div class="header">
    <h1 @click="$router.push('/')" class="hover-pointer">Student Event Manager</h1>
    <div class="buttons">
      <button class="green-button new-event-button" @click="$router.push('/new')">
        New event
      </button>
      <button class="green-button manage-event-button" @click="$router.push('/list')">
        Manage events
      </button>
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
  margin: 20px;
}

.buttons {
  display: flex;
  justify-content: space-between
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
