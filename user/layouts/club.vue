<template>
  <div class="lsh_layout lsh_layout--guest">
    <b-overlay :show="$store.state.loading" :opacity="0.3" rounded="sm">
      <template #overlay>
        <div class="text-center">
          <b-spinner></b-spinner>
          <p>Bitte warten...</p>
        </div>
      </template>
      <LazyClubHeader :user="user" />
      <Nuxt />
      <LazyClubFooter />
    </b-overlay>
  </div>
</template>

<script>
export default {
  middleware: ["verified", "club"],

  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>
