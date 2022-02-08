<template>
  <div class="lsh_layout lsh_layout--guest">
    <b-overlay :show="$store.state.loading" :opacity="0.3" rounded="sm">
      <template #overlay>
        <div class="text-center">
          <b-spinner></b-spinner>
          <p>Bitte warten...</p>
        </div>
      </template>
    </b-overlay>
    <LazyGuestHeader
      :loggedIn="loggedIn"
      :user="user"
      :isPlayer="isPlayer"
      :isClub="isClub"
    />
    <Nuxt />
    <LazyGuestFooter />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },

    user() {
      return this.$auth.user;
    },

    isPlayer() {
      return this.loggedIn && this.user.type == "player";
    },

    isClub() {
      return this.loggedIn && this.user.type == "club";
    },
  },
};
</script>
