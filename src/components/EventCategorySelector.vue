<template>
  <div>
    <multiselect v-model="selectedEventCategories" :options="eventCategories"
                 label="name" track-by="id" :allow-empty="true" :multiple="true"
                 :taggable="true" @tag="addEventCategory" @input="newEventCategory"/>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import EventCategoryService from '@/services/EventCategoryService';

export default {
  name: 'EventCategorySelector',
  components: {
    Multiselect,
  },
  props: {
    value: {
      type: Array,
    },
  },
  data() {
    return {
      eventCategories: [],
      selectedEventCategories: [],
    };
  },
  mounted() {
    this.selectedEventCategories = this.value || [];
    EventCategoryService.getAll()
      .then((response) => { this.eventCategories = response.result['event-categories']; });
  },
  methods: {
    addEventCategory(name) {
      EventCategoryService.create({ name })
        .then((response) => {
          const newEventCategory = response.result;
          this.eventCategories.push(newEventCategory);
          this.selectedEventCategories.push(newEventCategory);
        });
    },
    newEventCategory() {
      this.$emit('input', this.selectedEventCategories);
    },
  },
};
</script>

<style scoped>

</style>
