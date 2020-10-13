<template>
  <vue-cal class="calendar"
           :disable-views="['years', 'year', 'month', 'day']"
           :hide-view-selector="true"
           :time-from="0" :time-to="24 * 60" :time-step="60"
           :events="events"
  />
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal,
  },
  name: 'Calendar',
  data() {
    return {
      events: [
        {
          start: '2020-10-12 16:00',
          end: '2020-10-12 20:00',
          title: 'Overall Adventure',
          class: 'tik',
        },
        {
          start: '2020-10-14 19:30',
          end: '2020-10-14 21:00',
          title: 'Sauna',
          class: 'sauna',
        },
      ],
    };
  },
};
</script>

<style>
.calendar {
  height: 500px;
}

.vuecal__event.tik {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.sauna {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
</style>
