<template>
  <b-form @submit="addEvent" class="container">
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
      <b-form-group id="start-date-input-group" label="Start date" label-for="start-date-input"
                    class="col">
        <b-form-input id="start-date-input" v-model="start_date" type="date" required
                      placeholder="Enter start date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="start-time-input-group" label="Start time" label-for="start-time-input"
                    class="col">
        <b-form-input id="start-time-input" v-model="start_time" type="time" required
                      placeholder="Enter start time">
        </b-form-input>
      </b-form-group>

      <b-form-group id="end-date-input-group" label="End date" label-for="end-date-input"
                    class="col">
        <b-form-input id="end-date-input" v-model="end_date" type="date" required
                      placeholder="Enter end date">
        </b-form-input>
      </b-form-group>

      <b-form-group id="end-time-input-group" label="End time" label-for="end-time-input"
                    class="col">
        <b-form-input id="end-time-input" v-model="end_time" type="time" required
                      placeholder="Enter end time">
        </b-form-input>
      </b-form-group>
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
  </b-form>
</template>

<script>
import EventService from '@/services/EventService';
import EventCategorySelector from '@/components/EventCategorySelector.vue';

export default {
  name: 'CreateEventView',
  components: { EventCategorySelector },
  data() {
    return {
      start_date: '',
      end_date: '',
      start_time: '',
      end_time: '',
      title: '',
      description: '',
      place: '',
      eventCategories: [],
    };
  },
  methods: {
    addEvent() {
      EventService.createEvent({
        start_date: `${this.start_date} ${this.start_time}`,
        end_date: `${this.end_date} ${this.end_time}`,
        title: this.title,
        description: this.description,
        place: this.place,
        // eslint-disable-next-line no-sequences
        event_categories_ids: this.eventCategories.reduce((a, o) => (a.push(o.id), a), []),
      })
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
