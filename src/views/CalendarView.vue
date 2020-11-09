<template>
  <div>
    <Calendar :events="events"/>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import EventService from '@/services/EventService';

export default {
  components: {
    Calendar,
  },
  name: 'CalendarView',
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
