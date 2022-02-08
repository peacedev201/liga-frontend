<template>
  <div class="lsh_extern">
    <a v-if="ads.blank !== false" target="_blank" :href="ads.link"><img :src="ads.image" alt="ads-image" /></a>
    <a v-else :href="ads.link"><img :src="ads.image" alt="ads-image" /></a>
    <RingLoader v-else :center="true" />
  </div>
</template>

<script>
export default {
  props: {
    ads: {
      type: Object,
    },
  }
};
</script>
