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
    <div>
      <EventCategorySelector v-model="eventCategories"/>
    </div>
    <button @click="addEvent">Add event</button>
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import EventCategorySelector from '@/components/EventCategorySelector.vue';

export default {
  name: 'CreateEventView',
  components: { EventCategorySelector },
  data() {
    return {
      start_date: '',
      end_date: '',
      title: '',
      description: '',
      place: '',
      eventCategories: [],
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
        // eslint-disable-next-line no-sequences
        event_categories_ids: this.eventCategories.reduce((a, o) => (a.push(o.id), a), []),
      })
        .then((response) => console.log(response));
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>
