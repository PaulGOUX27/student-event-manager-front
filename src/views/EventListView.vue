<template>
  <div class="container">
    <div v-for="e in events" :key="e.id" class="event-list">
      <div class="event-info">
        <div>
          {{e.title}}
        </div>
        <div>
          {{e.place}}
        </div>
        <div>
          {{e.start_date}}
        </div>
      </div>
      <b-button @click="$router.push(`/edit/${e.id}`)" class="green-button">
        Edit
      </b-button>
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
.event-list{
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin-bottom: 15px;
  align-items: center;
}

.green-button{
  width: 200px;
}

.event-info{
  display: flex;
  justify-content: space-evenly;
}

.event-info,div{
  margin-right: 40px;
}
</style>
