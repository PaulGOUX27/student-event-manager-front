<template>
  <div>
    <label>
      Title
      <input v-model="title"/>
    </label>
    <label>
      Description
      <input v-model="description"/>
    </label>
    <label>
      Place
      <input v-model="place">
    </label>
    <label>
      Start date
      <input v-model="start_date" type="datetime-local">
    </label>
    <label>
      End date
      <input v-model="end_date" type="datetime-local">
    </label>

    <button @click="addEvent">Add event</button>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  name: 'CreateEventView',
  data() {
    return {
      start_date: '',
      end_date: '',
      title: '',
      description: '',
      place: '',
    };
  },
  methods: {
    addEvent() {
      EventService.createEvent({
        start_date: this.start_date,
        end_date: this.end_date,
        title: this.title,
        description: this.description,
        place: this.place,
      })
        .then((response) => console.log(response));
    },
  },
};
</script>

<style scoped>

</style>
