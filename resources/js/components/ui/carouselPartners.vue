<template>
  <carousel>
    <slide 
        class="d-flex flex-column align-items-center" 
        v-for="(el, i) in items"
        :key="i">
        <img class="img-thumbnail rounded-circle" :src="el.url" :alt="el.placeholder">
        <span style="margin: 20px">{{ el.name }}</span>
    </slide>
</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'App',
  props: {
      items: {
          type: Array,
          required: true
      }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>