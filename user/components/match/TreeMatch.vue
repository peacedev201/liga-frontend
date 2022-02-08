<template>
  <div
    class="lsh_plan__rounds__match"
    :style="{
      height: matchHeight + 'px',
    }"
  >
    <div class="lsh_plan__rounds__match__players">
      <div class="match_number" style="position: relative">
        {{ match.number }}
        <template v-if="roundIndex != 0">
          <div class="match_number__upperline"></div>
          <div class="match_number__lowerline"></div>
        </template>
      </div>

      <!-- :style="{ 'margin-left': roundIndex == 0 ? '' : '8%' }" -->
      <div class="players-detail">
        <div class="player">
          <template v-if="match.first_player">
            <div class="common points">
              {{
                match.first_player_points == null
                  ? "-"
                  : match.first_player_points
              }}
            </div>
            <div class="common name">
              <p class="text-truncate d-inline-block mb-0">
                <template v-if="isOnlyForClubs && match.first_player.membership">
                  {{ match.first_player.membership.club.name }}
                </template>
                <template v-else>
                  {{ match.first_player.full_name }}
                </template>
              </p>
            </div>
            <div class="common score">
              {{
                match.first_player_score == null
                  ? "-"
                  : match.first_player_score
              }}
            </div>
          </template>
          <template v-else>
            <div class="common tbd">TBD</div>
          </template>
        </div>
        <div class="player">
          <template v-if="match.second_player">
            <div class="common points">
              {{
                match.second_player_points == null
                  ? "-"
                  : match.second_player_points
              }}
            </div>
            <div class="common name">
              <p class="text-truncate d-inline-block mb-0">
                <template v-if="isOnlyForClubs && match.second_player.membership">
                  {{ match.second_player.membership.club.name }}
                </template>
                <template v-else>
                  {{ match.second_player.full_name }}
                </template>
              </p>
            </div>
            <div class="common score">
              {{
                match.second_player_score == null
                  ? "-"
                  : match.second_player_score
              }}
            </div>
          </template>
          <template v-else>
            <div class="common tbd">TBD</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["match", "roundIndex", "isOnlyForClubs"],

  data() {
    return {
      matchHeight: 70,
    };
  },

  mounted() {
    this.matchHeight = this.roundIndex == 0 ? 70 : 70 * (this.roundIndex * 2);
    if (this.roundIndex != 0) {
      setTimeout(() => {
        this.matchHeight =
          document.getElementById(`round${this.roundIndex - 1}`).children[0]
            .offsetHeight * 2;
      }, 500);
    }
  },
};
</script>
