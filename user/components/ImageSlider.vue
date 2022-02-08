<template>
  <div class="lsh_logo-slide">
    <RingLoader v-if="slides.length === 0" :center="true" />
    <b-row class="w-100 justify-content-center">
      <b-col
        class="mb-4 d-flex align-items-center justify-content-center"
        lg="2"
        offset="1"
        v-for="(slide, i) in slides"
        :key="i"
      >
        <a target="_blank" :href="slide.link"><img style="max-height: 128px !important;" :src="slide.image" alt="logo-image" /></a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";

export default {
  props: {
    slides: {
      type: Array,
      default: [],
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Number,
      default: 4,
    },
  },
  components: {
    carousel,
  },
};
</script>
