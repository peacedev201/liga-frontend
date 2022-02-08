<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div
        class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
      >
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <b-row>
                <b-col
                  md="9"
                  class="d-flex justify-content-center justify-content-md-start"
                >
                  <h1 class="d-inline-block">{{ tournament.name }}</h1>
                </b-col>
                <b-col
                  md="3"
                  class="d-flex justify-content-center align-items-center align-items-md-end flex-column"
                >
                  <p class="mb-0 d-flex align-items-center text-white">
                    <i class="mdi mdi-account mdi-24px mr-2"></i>
                    <span style="width: 100px">
                      {{
                        `${tournament.total_participants}/${tournament.total_slots}`
                      }}
                      Spieler
                    </span>
                  </p>
                  <p class="mb-0 d-flex align-items-center text-white">
                    <i class="mdi mdi-trophy mdi-24px mr-2"></i>
                    <span style="width: 100px">
                      {{ tournament.system }}
                    </span>
                  </p>
                </b-col>
              </b-row>
              <!-- <h1 class="ml-auto d-inline-block">
                ,
                {{
                  `${tournament.total_participants}/${tournament.total_slots}`
                }}
                Player,
              </h1>
              <h1 class="ml-auto d-inline-block">
                {{ tournament.system }} System
              </h1> -->
            </div>
            <div class="w-100 d-flex flex-column flex-md-row">
              <img style="min-width: 50%;" :src="tournament.banner_picture" />
              <p
                v-html="tournament.html_description"
                class="text-white mb-0 w-100 p-3"
                style="background: #262f3e"
              ></p>
            </div>
          </div>
        </div>
        <br/>
        <div v-if="started" class="w-100 d-flex">
          <div class="lsh_plan">
            <div
              v-for="(round, roundIndex) in tournament.rounds"
              :key="roundIndex"
              class="lsh_plan__rounds"
            >
              <div class="lsh_header lsh_header--secondary-bg py-3 mb-4">
                <h5 class="text-white text-center mb-0">{{ round.name }}</h5>
              </div>
              <div :id="`round${roundIndex}`" class="w-100 d-flex flex-column">
                <TreeMatch
                  v-for="(match, index) in round.matches"
                  :key="index"
                  :match="match"
                  :roundIndex="roundIndex"
                  :isOnlyForClubs="tournament.only_for_clubs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`data/tournament/${params.id}`);
    if (data.status.success) {
      let tournament = data.data;
      let number = 1;
      for (var round of tournament.rounds) {
        for (var match of round.matches) {
          match.number = number;
          number++;
        }
      }
      return { tournament };
    }
  },

  mixins: [formMixin],

  auth: false,

  layout: "guest",

  data: function () {
    return {
      tournament: {},
      data: {},
    };
  },

  computed: {
    started() {
      return (
        this.tournament.status == "started" ||
        this.tournament.status == "completed"
      );
    },
  },
};
</script>
