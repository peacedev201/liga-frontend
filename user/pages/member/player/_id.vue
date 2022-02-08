<template>
  <div class="lsh_grass_background">
    <div class="container">
      <HeroHeading heading="Spielerprofil" />

      <Profile :player="player" :type="'guest'" />
    </div>
  </div>
</template>

<script>
export default {
  auth: false,

  layout: "guest",

  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`data/player/${params.id}`);
    if (data.status.success) {
      return { player: data.data };
    }
  },

  data: function () {
    return {
      player: {},
    };
  },
};
</script>
