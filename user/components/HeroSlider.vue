<template>
  <div class="lsh_heroslider">
    <carousel class="lsh_heroslider__owl" :nav="false" :dots="true" :items="1">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="lsh_heroslider__item"
        :style="'background-image: url(' + slide.image + ')'"
      >
        <div class="lsh_heroslider__item__inner d-flex">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-10">
                <div class="lsh_heroslider__item__caption">
                  <span class="lsh_heroslider__item__caption__headline">{{
                    slide.headline
                  }}</span>
                  <span class="lsh_heroslider__item__caption__subline">{{
                    slide.subline
                  }}</span>
                  <b-button :href="slide.link" size="sm" variant="primary" class="lsh_btn lsh_btn--primary lsh_btn--round">
                    {{ slide.linkText }}
                    <b-icon class="font-weight-bold" icon="chevron-right" aria-hidden="true"></b-icon>
                  </b-button>
                  <!-- <a
                    :href="slide.link"
                    class="lsh_btn lsh_btn--primary lsh_btn--round"
                  >
                    <span>{{ slide.linkText }}</span>
                  </a>
                  <i class="mdi mdi-chevron-right mdi-36px text-dark"></i> -->
                </div>
              </div>
            </div>
          </div>
          <div class="lsh_overlay lsh_overlay--gradient-primary-bottom"></div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";

export default {
  props: {
    slides: {
      type: Array,
    },
  },
  components: {
    carousel,
  },
};
</script>
