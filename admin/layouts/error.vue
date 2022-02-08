<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="error-wrap text-center">
          <h1 class="text-60">{{ error.statusCode }}</h1>
          <p class="text-36 subheading mb-3">Error!</p>
          <p class="mb-5 text-muted text-18">
            {{ error.message }}
          </p>
          <nuxt-link class="btn btn-lg" :to="{ name: 'index' }"
            >Go back to home</nuxt-link
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "error",

  props: ["error"],
};
</script>