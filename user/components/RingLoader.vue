<template>
  <div class="lsh_ring_loader" :class="{ 'mx-auto block': center }">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
