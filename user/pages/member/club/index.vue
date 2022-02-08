<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div
        class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
      >
        <div class="row">
          <div class="col-12">
            <HeroHeading heading="Vereine" />
            <p class="text--white font-weight-bold">Ihr möchtet einen Verein registrieren oder gehört zum Vorstand eines Vereins aus unserer Liste?<br>Damit ihr Zugang zum Vereinskonto erhaltet, schreibt uns eine E-Mail an <a href="mailto:info@liga.sh">info@liga.sh</a> mit eurem Anliegen und einem Nachweis, dass ihr zum Vorstand des Vereins gehört oder eine Vollmacht habt und einen Account anlegen dürft.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar">
            <div class="search-wrapper">
              <input v-on:keyup.enter="searchFunction()" type="text" v-model="search" placeholder="Suchen..."/>
              <button class="search-icon" @click="searchFunction()">Suchen</button>
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
                  <b-th>Mitglied seit</b-th>
                  <b-th>Spieleranzahl</b-th>
                </b-tr>
              </b-thead>
              <b-tbody class="bg-white">
                <b-tr v-if="clubs.length < 1">
                  <b-td class="text-center" colspan="3">Es existieren keine Vereine</b-td>
                </b-tr>
                <b-tr v-else v-for="(club, index) in clubs" :key="index">
                  <b-td
                  ><img
                    class="lsh_table__profile_picture"
                    :src="club.profile_picture"
                  />
                    <span>{{ club.name }}</span>
                  </b-td>
                  <b-td>{{
                      $moment.utc(club.created_at).local().format("YYYY-MM-DD")
                    }}</b-td>
                  <b-td>
                    <nuxt-link
                      :to="{ name: 'member-club-id', params: { id: club.id } }"
                    >
                      <b-button size="sm" class="text-white" variant="primary"
                      >Ansehen</b-button
                      >
                    </nuxt-link>
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
    const data = await $axios.$get(`data/clubs`);
    const clubs = await $axios.$get(`data/clubs/1`);
    let pages = [];
    for (let index = 1; index <= Math.floor(data.data / 25); index++) {
      pages.push(index);
    }
    return { clubs: clubs.data, pages: pages, registered: data.registered };
  },

  auth: false,

  layout: "guest",

  data: function () {
    return {
      clubs: [],
      registered: [],
      search: '',
      pages: [],
      page: 1,
    };
  },
  computed: {
    // filteredList() {
    //   return this.clubs.filter(club => {
    //     return club.name.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
  },
  methods: {
    select(option) {
      this.page = option;
      if (this.search == "") {
        this.$axios.$get(`data/clubs/${option}`).then(res => {
          this.clubs = res.data;
        });
      } else {
        this.$axios.$get(`data/clubs/${option}/${this.search}`).then(res => {
          this.clubs = res.data;
        })
      }
    },

    searchFunction() {
      if (this.search == "") {
        this.$axios.$get(`data/clubs`).then(res => {
          let pages = [];
          for (let index = 1; index <= Math.floor(res.data / 16); index++) {
            pages.push(index);
          }
          this.pages = pages
        });
        this.$axios.$get(`data/clubs/1`).then(res => {
          this.clubs = res.data;
          this.page = 1;
        });
      } else {
        this.$axios.$get(`data/clubs/all/${this.search}`).then(res => {
          let pages = [];
          for (let index = 1; index <= Math.floor(res.data / 16); index++) {
            pages.push(index);
          }
          this.pages = pages
        });
        this.$axios.$get(`data/clubs/1/${this.search}`).then(res => {
          this.page = 1;
          this.clubs = res.data;
        });
      }
    }
  }
};
</script>
