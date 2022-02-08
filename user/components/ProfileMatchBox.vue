<template>
  <div class="col-12 col-md-6 col-xl-4">
    <div :class="'lsh_match-box' + ' lsh_match-box--upcoming'">
      <span class="lsh_match-box__profiledate">{{
        $moment.utc(match.held_date).local().format("DD.MM.YYYY")
      }}</span>
      <div class="lsh_match-box__data">
        <div class="lsh_match-box__data__player">
          <nuxt-link
            style="height: 64px; width: 64px; border-radius: 50%!important;"
            tag="img"
            :src="match.first_player.profile_picture"
            :to="{
                        name: 'member-player-id',
                        params: { id: match.first_player.id },
                      }">
          </nuxt-link>
        </div>
        <span class="lsh_match-box__data__result"> -/- </span>
        <div class="lsh_match-box__data__player">
          <nuxt-link
            style="height: 64px; width: 64px; border-radius: 50%!important;"
            tag="img"
            :src="match.second_player.profile_picture"
            :to="{
                        name: 'member-player-id',
                        params: { id: match.second_player.id },
                      }">
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    match: {
      type: Object,
    },
    useCols: {
      type: Boolean,
    },
  },
};
</script>
