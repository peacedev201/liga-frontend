<template>
  <div class="hero-heading">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      required: true,
      type: String,
    },
  },
};
</script>
