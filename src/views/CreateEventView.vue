<template>
  <EventForm @submit="addEvent" @cancel="cancel"/>
</template>

<script>
import EventService from '@/services/EventService';
import EventForm from '@/components/EventForm.vue';

export default {
  name: 'CreateEventView',
  components: { EventForm },
  data() {
    return {};
  },
  methods: {
    validDate(event) {
      // this.showRequireDate = false;
      if (!event.start_date || !event.end_date) return false;
      return new Date(event.start_date)
        < new Date(event.end_date);
    },
    addEvent(event) {
      if (!this.validDate(event)) {
        return;
      }
      EventService.createEvent({
        start_date: event.start_date,
        end_date: event.end_date,
        title: event.title,
        description: event.description,
        place: event.place,
        // eslint-disable-next-line no-sequences
        event_categories_ids: event.event_categories.reduce((a, o) => (a.push(o.id), a), []),
      })
        .then(() => {
          this.$router.push('/');
        });
    },
    cancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

</style>
