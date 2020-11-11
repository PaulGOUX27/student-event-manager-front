<template>
  <b-form @submit="submit" @reset="cancel" class="container">
    <div class="row">
      <b-form-group id="title-input-group" label="Title" label-for="title-input" class="col">
        <b-form-input id="title-input" v-model="title" type="text" required
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>

      <b-form-group id="place-input-group" label="Place" label-for="place-input" class="col">
        <b-form-input id="place-input" v-model="place" type="text" required
                      placeholder="Enter place">
        </b-form-input>
      </b-form-group>
    </div>

    <div class="row categories">
      <div class="col">
        <label for="categories-input">Categories</label>
        <EventCategorySelector id="categories-input" v-model="eventCategories"/>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label for="start-date-input">Start date</label>
        <b-form-datepicker v-model="start_date" required id="start-date-input"
                           placeholder="Enter start date" :state="validDate"/>
      </div>

      <div class="col">
        <label for="start-time-input-group">Start date</label>
        <b-form-timepicker v-model="start_time" required id="start-time-input-group"
                           placeholder="Enter start time" :state="validDate"/>
      </div>

      <div class="col">
        <label for="end-date-input-group">Start date</label>
        <b-form-datepicker v-model="end_date" required id="end-date-input-group"
                           placeholder="Enter end date" :state="validDate"/>
      </div>

      <div class="col">
        <label for="end-time-input-group">Start date</label>
        <b-form-timepicker v-model="end_time" required id="end-time-input-group"
                           placeholder="Enter end time" :state="validDate"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="description-input">Description</label>
        <b-form-textarea
          id="description-input"
          v-model="description"
          placeholder="Enter description"
          rows="3"
          max-rows="6"
        />
      </div>
      <div class="col buttons-area">
        <b-button class="green-button button" type="submit">Validate</b-button>
        <b-button class="red-button button" type="reset">Cancel</b-button>
      </div>
    </div>
    <div class="row" v-if="displayDelete">
      <div class="col">
        <b-button class="red-button" @click="remove">Delete event</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import EventCategorySelector from '@/components/EventCategorySelector.vue';

export default {
  name: 'EventForm',
  components: { EventCategorySelector },
  props: {
    displayDelete: {
      type: Boolean,
      default: false,
    },
    event: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      start_date: '',
      end_date: '',
      start_time: '00:00:00',
      end_time: '00:00:00',
      title: '',
      description: '',
      place: '',
      eventCategories: [],
    };
  },
  mounted() {
    if (this.event) {
      [this.start_date, this.start_time] = this.event.start_date.split('T');
      [this.end_date, this.end_time] = this.event.end_date.split('T');
      this.title = this.event.title;
      this.description = this.event.description;
      this.place = this.event.place;
      this.eventCategories = this.event.event_categories;
    }
  },
  computed: {
    validDate() {
      if (!this.start_date || !this.end_date) return false;
      return new Date(`${this.start_date} ${this.start_time}`)
        < new Date(`${this.end_date} ${this.end_time}`);
    },
  },
  methods: {
    submit() {
      if (!this.validDate) return;
      this.$emit('submit', {
        start_date: `${this.start_date} ${this.start_time}`,
        end_date: `${this.end_date} ${this.end_time}`,
        title: this.title,
        description: this.description,
        place: this.place,
        event_categories: this.eventCategories,
      });
    },
    cancel() {
      this.$emit('cancel');
    },
    remove() {
      this.$emit('remove');
    },
  },
};
</script>

<style scoped>
.row{
  margin-bottom: 20px;
}

.categories{
  padding-bottom: 11px;
}

.buttons-area{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}

.button{
  flex-grow: 0;
  width: 200px
}
</style>
