<template>
  <div>
    <multiselect v-model="value" :options="eventCategories"
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
      default() { return []; },
    },
  },
  data() {
    return {
      eventCategories: [],
    };
  },
  mounted() {
    EventCategoryService.getAll()
      .then((response) => { this.eventCategories = response.result['event-categories']; });
  },
  methods: {
    addEventCategory(name) {
      EventCategoryService.create({ name })
        .then((response) => {
          const newEventCategory = response.result;
          this.eventCategories.push(newEventCategory);
          this.value.push(newEventCategory);
        });
    },
    newEventCategory() {
      this.$emit('input', this.value);
    },
  },
};
</script>

<style scoped>

</style>
