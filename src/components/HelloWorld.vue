<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ persons }}</div>
  </div>
</template>

<script>
import PersonService from '@/services/PersonService';
import SEMService from '@/services/SEMService';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      persons: [],
      service: new PersonService(),
    };
  },
  mounted() {
    SEMService.get('persons')
      .then((response) => {
        this.persons = response.data.result.persons;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
