<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div
        class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
      >
        <div class="row">
          <div class="col-12">
            <HeroHeading :heading="`${club.name} Mitglieder`" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar">
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
                  <b-th>Profile</b-th>
                </b-tr>
              </b-thead>
              <b-tbody class="bg-white">
                <b-tr v-if="club.members.length < 1">
                  <b-td class="text-center" colspan="2">Dieser Verein hat noch keine Mitglieder</b-td>
                </b-tr>
                <b-tr
                  v-else
                  v-for="(player, index) in club.members"
                  :key="index"
                >
                  <b-td class="lsh_table__profile_detail">
                    <div class="lsh_table__serial_no">{{ index + 1 }}</div>
                    <img class="lsh_table__profile_picture" :src="player.player.profile_picture"/>
                    <span>{{ player.player.full_name }}</span>
                  </b-td>
                  <b-td>
                    <nuxt-link
                      :to="{
                        name: 'member-player-id',
                        params: { id: player.player.id },
                      }"
                    >
                      <b-button size="sm" class="text-white" variant="primary"
                      >Profil ansehen</b-button
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
    const data = await $axios.$get(`data/club/${params.id}`);
    return { club: data.data };
  },

  auth: false,

  layout: "guest",

  data: function () {
    return {
      club: [],
    };
  },
};
</script>
