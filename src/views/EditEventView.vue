<template>
  <div>
    Edit event
    <label>
      Title
      <input v-model="e.title"/>
    </label>
    <label>
      Description
      <input v-model="e.description"/>
    </label>
    <label>
      Place
      <input v-model="e.place">
    </label>
    <label>
      Start date
      <input v-model="e.start_date" type="datetime-local">
    </label>
    <label>
      End date
      <input v-model="e.end_date" type="datetime-local">
    </label>

    <button @click="updateEvent">Edit event</button>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  name: 'EditEventView',
  data() {
    return {
      e: {},
    };
  },
  mounted() {
    EventService.getOne(this.$route.params.event_id)
      .then((response) => { this.e = response.result; });
  },
  methods: {
    updateEvent() {
      EventService.updateEvent(this.e)
        .then(() => { console.log('update ok'); });
    },
  },
};
</script>

<style scoped>

</style>
