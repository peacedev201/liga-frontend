<template>
  <div class="error-wrap">
    <h1 class="text-60">{{ error.statusCode }}</h1>
    <p class="text-36 subheading mb-3">Error!</p>
    <p class="mb-5 text-18">
      {{ error.message }}
    </p>
    <nuxt-link class="btn btn-lg" :to="{ name: 'index' }"
      >Zurück zur Startseite</nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: "error",

  props: ["error"],
};
</script>
