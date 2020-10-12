import Vue from 'vue';
import VueRouter from 'vue-router';
import Calendar from '@/views/Calendar.vue';
import CreateEvent from '@/views/CreateEvent.vue';
import EditEvent from '@/views/EditEvent.vue';
import EventList from '@/views/EventList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/new',
    name: 'new event',
    component: CreateEvent,
  },
  {
    path: '/edit',
    name: 'edit event',
    component: EditEvent,
  },
  {
    path: '/list',
    name: 'event list',
    component: EventList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
