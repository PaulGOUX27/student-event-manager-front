<template>
  <div>
    Edit event
    <EventForm @submit="updateEvent" @cancel="cancel" :display-delete="true" @remove="remove"
               :event="e" :key="isFetching + 'cheat'"/>
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import EventForm from '@/components/EventForm.vue';

export default {
  name: 'EditEventView',
  components: { EventForm },
  data() {
    return {
      e: {},
      isFetching: true,
    };
  },
  mounted() {
    return EventService.getOne(this.$route.params.event_id)
      .then((response) => {
        this.isFetching = false;
        this.e = response.result;
      });
  },
  methods: {
    updateEvent(event) {
      EventService.updateEvent({
        id: this.e.id,
        start_date: event.start_date,
        end_date: event.end_date,
        title: event.title,
        description: event.description,
        place: event.place,
        // eslint-disable-next-line no-sequences
        event_categories_ids: event.event_categories.reduce((a, o) => (a.push(o.id), a), []),
      })
        .then(() => { this.$router.push('/'); });
    },
    cancel() {
      this.$router.push('/');
    },
    remove() {
      EventService.deleteEvent(this.e.id)
        .then(() => this.$router.push('/'));
    },
  },
};
</script>

<style scoped>

</style>
