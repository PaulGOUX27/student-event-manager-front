<template>
  <div class="container">
    <EventCategorySelector v-model="eventCategories" class="event-category-selector"
                           @input="refresh" :taggable="false"/>
    <Calendar :events="events"/>
    <div>
      <div style="padding-top: 15px">
        Export link for selected events. You can enter this link in other calendar application to
        synchronize them with the Student Event Manager.
      </div>
      <pre style="padding-top: 15px">
        {{calendarPath()}}
      </pre>
    </div>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import EventService from '@/services/EventService';
import EventCategorySelector from '@/components/EventCategorySelector.vue';
import EventCategoryService from '@/services/EventCategoryService';

export default {
  components: {
    EventCategorySelector,
    Calendar,
  },
  name: 'CalendarView',
  data() {
    return {
      events: [],
      eventCategories: [],
    };
  },
  computed: {
    eventCategoriesIds() {
      // eslint-disable-next-line no-sequences
      return this.eventCategories.reduce((a, o) => (a.push(o.id), a), []);
    },
  },
  methods: {
    refresh() {
      this.$router.push({
        path: '/',
        query: {
          event_categories: this.eventCategoriesIds,
        },
      });
      EventService.getAllEvents(this.eventCategoriesIds)
        .then((events) => {
          this.events = events.result.events;
        });
    },
    calendarPath() {
      return `https://student-event-manager-back.herokuapp.com/calendar${this.$router.currentRoute.fullPath.substring(1)}`;
    },
  },
  async mounted() {
    const queryEventCategoriesIds = this.$route.query.event_categories;
    if (Array.isArray(queryEventCategoriesIds)) {
      const promises = [];
      queryEventCategoriesIds.forEach((id) => {
        promises.push(EventCategoryService.getOne(id)
          .then((response) => {
            this.eventCategories.push(response.result);
          }));
      });
      await Promise.all(promises);
    } else if (queryEventCategoriesIds) {
      await EventCategoryService.getOne(queryEventCategoriesIds)
        .then((response) => {
          this.eventCategories.push(response.result);
        });
    }
    EventService.getAllEvents(this.eventCategoriesIds)
      .then((events) => {
        this.events = events.result.events;
      });
  },
};
</script>

<style scoped>
.event-category-selector{
  padding-bottom: 20px;
}
</style>
