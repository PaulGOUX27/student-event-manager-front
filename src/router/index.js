import Vue from 'vue';
import VueRouter from 'vue-router';
import CalendarView from '@/views/CalendarView.vue';
import CreateEventView from '@/views/CreateEventView.vue';
import EditEventView from '@/views/EditEventView.vue';
import EventListView from '@/views/EventListView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'calendar view',
    component: CalendarView,
  },
  {
    path: '/new',
    name: 'new event view',
    component: CreateEventView,
  },
  {
    path: '/edit',
    name: 'edit event view',
    component: EditEventView,
  },
  {
    path: '/list',
    name: 'event list view',
    component: EventListView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
