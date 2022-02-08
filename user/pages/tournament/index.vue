<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div
        class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
      >
        <div class="row">
          <div class="col-12">
            <HeroHeading heading="Turniere" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar">
            <b-table-simple
              responsive
              thead-class="text-center"
              tbody-class="text-center"
              striped
              hover
            >
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>Name</b-th>
                  <b-th>Angemeldete Spieler</b-th>
                  <b-th>Status</b-th>
                  <b-th></b-th>
                </b-tr>
              </b-thead>
              <b-tbody class="bg-white">
                <b-tr v-if="tournaments.length < 1">
                  <b-td colspan="3" class="text-center">
                    Keine Turniere verfügbar
                  </b-td>
                </b-tr>
                <b-tr v-for="(tournament, index) in tournaments" :key="index">
                  <b-td
                  ><span class="mr-2">{{ index + 1 }}</span>
                    <img
                      class="lsh_table__profile_picture"
                      :src="tournament.icon_picture"
                    />
                    <nuxt-link
                      :to="{
                        name: 'tournament-id-plan',
                        params: { id: tournament.id },
                      }"
                      class="lsh_table__link"
                    >
                      <span>
                        {{ tournament.name }} ({{ tournament.system }})
                      </span>
                    </nuxt-link>
                  </b-td>
                  <b-td>{{ tournament.total_participants }}</b-td>
                  <b-td>
                    <b-badge v-if="tournament.status === 'completed'" :variant="statusVariant(tournament.status)">
                      Beendet
                    </b-badge>
                  </b-td>
                  <b-td v-if="$auth.loggedIn">
                    <b-badge
                      v-if="registered.includes(tournament.id)"
                      variant="success"
                      size="sm"
                      class="lsh_btn lsh_btn--success lsh_btn--round"
                    >Angemeldet</b-badge
                    >
                    <b-button
                      v-if="
                        !registered.includes(tournament.id) &&
                        tournament.status === 'opened'
                      "
                      size="sm"
                      variant="primary"
                      style="width: 180px"
                      class="lsh_btn lsh_btn--primary lsh_btn--round"
                      @click="registerTournament(tournament.id)"
                    >Für Turnier anmelden</b-button
                    >
                    <!-- <nuxt-link
                      v-if="tournament.status == 'started'"
                      :to="{
                        name: 'tournament-id-plan',
                        params: { id: tournament.id },
                      }"
                    >
                      <b-button size="sm" class="text-white" variant="primary"
                        >Spielplan</b-button
                      >
                    </nuxt-link> -->
                  </b-td>
                  <b-td v-else>
                    <nuxt-link :to="{ name: 'login' }">
                      <b-button size="sm" class="text-white" variant="primary"
                      >Bitte einloggen</b-button
                      >
                    </nuxt-link>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`data/tournaments`);
    if (!data.registered) {
      data.registered = [];
    }
    return { tournaments: data.data, registered: data.registered };
  },

  auth: false,

  layout: "guest",

  data: function () {
    return {
      tournaments: [],
      registered: [],
    };
  },

  methods: {
    async registerTournament(id) {
      let { data } = await this.$axios.put(`tournament/${id}`);
      if (data.status.success) {
        this.$root.$bvToast.toast(
          "Du hast dich erfolgreich zum Turnier angemeldet. Viel erfolg!",
          {
            title: "Erfolgreich",
            variant: "success",
            solid: true,
          }
        );
        this.registered.push(id);
      } else {
        if (data.status.code == 100) {
          this.$bvModal.msgBoxOk(
            "Nur Spieler mit einer Vereinszugehörigkeit können sich für dieses Turnier anmelden.",
            {
              okVariant: "danger",
            }
          );
        }
      }
    },
  },

  mounted() {
    this.$cookiebot.consentBanner();
  },

  methods: {
    statusVariant(status) {
      let variant = "primary";
      switch (status) {
        case "drafted":
          variant = "info";
          break;
        case "opened":
          variant = "success";
          break;
        case "closed":
          variant = "danger";
          break;
        case "rounded":
          variant = "danger";
          break;
        case "scheduled":
          variant = "warning";
          break;
        case "started":
          variant = "info";
          break;
        case "completed":
          variant = "success";
          break;
      }
      return variant;
    },
  },
};
</script>
