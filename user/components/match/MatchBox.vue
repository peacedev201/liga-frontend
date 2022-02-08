<template>
  <div :class="{ 'col-12 col-md-6 col-xl-3': useCols, 'col-12': !useCols }">
    <div :class="'lsh_match-box' + ' lsh_match-box--completed'">
      <div class="lsh_match-box__data">
        <div class="lsh_match-box__data__player">
          <nuxt-link
            :to="{
                        name: 'member-player-id',
                        params: { id: match.first_player.id },
                      }"
            class="lsh_table__link"
          >
            <img
              style="
                      max-height: 52px;
                      min-height: 52px;
                      max-width: 52px;
                      min-width: 52px;
                      border-radius: 50%;
                      border:2px solid #015fff;
                    "
              :src="match.first_player.profile_picture"
              alt="profile-picture"
            />
          </nuxt-link>
        </div>
        <span class="lsh_match-box__data__result">
          {{ `${match.first_player_score}:${match.second_player_score}` }}
        </span>
        <div class="lsh_match-box__data__player">
          <nuxt-link
            :to="{
                        name: 'member-player-id',
                        params: { id: match.second_player.id },
                      }"
            class="lsh_table__link"
          >
            <img
              style="
                      max-height: 52px;
                      min-height: 52px;
                      max-width: 52px;
                      min-width: 52px;
                      border-radius: 50%;
                      border:2px solid #015fff;
                    "
              :src="match.second_player.profile_picture"
              alt="profile-picture"
            />
          </nuxt-link>
        </div>
      </div>
      <span class="lsh_match-box__event">
        {{ match.tournament_round.tournament.name }}<br>
        <small>{{ match.first_player.nick_name }} - {{ match.second_player.nick_name }}</small><br>
        <small>{{ match.tournament_round.name }}</small>
      </span>
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
