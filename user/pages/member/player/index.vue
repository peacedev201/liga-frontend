<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div
        class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
      >
        <div class="row">
          <div class="col-12">
            <HeroHeading heading="Spieler" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar">
            <div class="settingbar" style>
              <div class="search-wrapper">
                <input type="text" v-model="search" placeholder="Suchen..." />
                <button class="search-icon" @click="searchFunction()">Suchen</button>
              </div>

            </div>

            <b-table-simple
              class="lsh_table"
              responsive
              thead-class="text-center"
              tbody-class="text-center"
              striped
              hover
            >
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>Name</b-th>
                  <b-th class="text-center">Spiele</b-th>
                  <b-th class="text-center">Punkte</b-th>
                  <b-th class="text-center">S</b-th>
                  <b-th class="text-center">U</b-th>
                  <b-th class="text-center">N</b-th>
                  <b-th class="text-center">Tore</b-th>
                  <b-th class="text-center">Diff</b-th>
                </b-tr>
              </b-thead>
              <b-tbody class="bg-white">
                <b-tr v-if="players.length < 1">
                  <b-td class="text-center" colspan="8">No Result Found</b-td>
                </b-tr>
                <b-tr v-else v-for="(player, index) in players" :key="index">
                  <b-td>
                    <!--<span class="mr-2">{{ player.id }}</span>-->
                    <img class="lsh_table__profile_picture" :src="player.profile_picture" />
                    <nuxt-link
                      :to="{
                        name: 'member-player-id',
                        params: { id: player.id },
                      }"
                      class="lsh_table__link"
                    >
                      <span>{{ player.full_name }}</span>
                    </nuxt-link>
                  </b-td>
                  <b-td class="text-center">{{ player.played_games }}</b-td>
                  <b-td class="text-center">{{ player.points }}</b-td>
                  <b-td class="text-center">{{ player.win_games }}</b-td>
                  <b-td class="text-center">{{ player.draw_games }}</b-td>
                  <b-td class="text-center">{{ player.lost_games }}</b-td>
                  <b-td class="text-center">{{ player.goals }}</b-td>
                  <b-td class="text-center">
                    {{
                    players[index + 1]
                    ? player.points - players[index + 1].points
                    : player.points
                    }}
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button type="button" class="page-link" :disabled="page == 1" @click="page--"> <fa icon="angle-left"></fa> </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="select(pageNumber)" v-bind:key="pageNumber">  {{pageNumber}} </button>
                </li>
                <li class="page-item">
                  <button type="button" @click="page++" :disabled="page >= pages.length" class="page-link"> <fa icon="angle-right"></fa> </button>
                </li>
              </ul>
            </nav>	

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`data/players`);
    const players = await $axios.$get(`data/players/1`);
    let pages = [];
    for (let index = 1; index <= Math.floor(data.data / 25); index++) {
      pages.push(index);
    }
    return { players: players.data, pages: pages };
  },

  auth: false,

  layout: "guest",

  data: function() {
    return {
      players: [],
      search: "",
      pages: [],
      page: 1,
    };
  },
  computed: {
  },

  methods: {
    select(option) {
      this.page = option;
      if (this.search == "") {
        this.$axios.$get(`data/players/${option}`).then(res => {
          this.players = res.data;
        });
      } else {
        this.$axios.$get(`data/players/${option}/${this.search}`).then(res => {
          this.players = res.data;
        });
      }
    },
    searchFunction() {
      if (this.search == "") {
        this.$axios.$get(`data/players`).then(res => {
          let pages = [];
          for (let index = 1; index <= Math.floor(res.data / 25); index++) {
            pages.push(index);
          }
          this.pages = pages
        });
        this.$axios.$get(`data/players/1`).then(res => {
          this.players = res.data;
          this.page = 1;
        });
      } else {
        this.$axios.$get(`data/players/all/${this.search}`).then(res => {
          let pages = [];
          for (let index = 1; index <= Math.floor(res.data / 25); index++) {
            pages.push(index);
          }
          this.pages = pages
        });
        this.$axios.$get(`data/players/1/${this.search}`).then(res => {
          this.page = 1;
          this.players = res.data;
        });
      }
    }
  }
};
</script>
