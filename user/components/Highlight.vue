<template>
  <div class="lsh_banner__highlights">
    <RingLoader v-if="caption === undefined" :center="true" />
    <img v-if="caption !== undefined" :src="image" alt="highlight-image" />
    <div
      v-if="caption !== undefined"
      class="lsh_banner__highlights__caption lsh_banner__highlights__caption--has-play-button"
    >
      <span class="lsh_banner__highlights__caption__text">{{ caption }}</span>
      <a
        :href="link"
        class="lsh_btn lsh_btn--circle-medium lsh_btn--primary-accent"
      >
        <i class="mdi mdi-play mdi-36px text-black"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: "#",
    },
    image: {
      type: String,
    },
  },
};
</script>
