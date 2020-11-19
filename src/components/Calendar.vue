<template>
  <vue-cal class="calendar"
           :disable-views="['years', 'year', 'month', 'day']"
           :hide-view-selector="true"
           :time-from="0" :time-to="24 * 60" :time-step="60"
           :events="eventsToCalendar"
  >
    <template v-slot:time-cell="{ hours }">
      <div>
        <span style="color: black;">{{ hours }}:00</span>
      </div>
    </template>
  </vue-cal>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal,
  },
  props: {
    events: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: 'Calendar',
  data() {
    return {
    };
  },
  computed: {
    eventsToCalendar() {
      const events = [];
      this.events.forEach((e) => events.push({
        start: e.start_date.replace('T', ' '),
        end: e.end_date.replace('T', ' '),
        title: e.title,
        class: 'tik',
      }));
      return events;
    },
  },
};
</script>

<style>
.calendar {
  height: 500px;
}

.vuecal__menu {
  color: black;
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

.vuecal__weekdays-headings {
  color: black;
}

.vuecal--view-with-time {
  color: black;
}

.vuecal__no-event {
  color: black;
}
</style>
