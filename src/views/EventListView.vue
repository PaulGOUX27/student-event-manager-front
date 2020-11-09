<template>
  <div>
    <div v-for="e in events" :key="e.id">
      {{e.title}}
      <router-link :to="`/edit/${e.id}`" tag="button">
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  name: 'EventListView',
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    EventService.getAllEvents()
      .then((events) => {
        this.events = events.result.events;
      });
  },
};
</script>

<style scoped>

</style>
