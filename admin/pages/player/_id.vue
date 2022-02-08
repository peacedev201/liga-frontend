<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Preview Player</h3>
        <div class="float-right">
          <button class="table-btn btn bg-warning" @click="updateClub">
            Update Club
          </button>
          <nuxt-link :to="{ name: 'player' }">
            <button class="table-btn btn">Back</button>
          </nuxt-link>
        </div>
      </div>
      <hr />
      <div class="table-section">
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">First Name</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.first_name }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Last Name</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.last_name }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Nick Name</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.nick_name }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Full Name</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.full_name }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Email Verified</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">
              {{ player.has_verified_email ? "Yes" : "No" }}
            </p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Profile Picture</p>
          </b-col>
          <b-col cols="9">
            <a :href="player.profile.profile_picture" target="_blank">
              <img
                class="rounded"
                height="30"
                width="30"
                :src="player.profile.profile_picture"
                alt=""
              />
            </a>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Street</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.street }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">City</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.city }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Country</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.country }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Postal Code</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.postal_code }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Biography</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">{{ player.profile.biography || "-" }}</p>
          </b-col>
        </b-row>
        <hr />
        <b-row v-if="player.profile.membership" no-gutters>
          <b-col cols="3">
            <p class="mb-0 font-weight-bold">Club</p>
          </b-col>
          <b-col cols="9">
            <p class="mb-0 text-break">
              {{ player.profile.membership.club.name }}
              <a
                class="ml-2"
                :href="player.profile.membership.club.profile_picture"
                target="_blank"
              >
                <img
                  class="rounded"
                  height="30"
                  width="30"
                  :src="player.profile.membership.club.profile_picture"
                  alt=""
                />
              </a>
            </p>
          </b-col>
        </b-row>
        <template v-else>
          <b-row v-if="player.profile.willing" no-gutters>
            <b-col cols="3">
              <p class="mb-0 font-weight-bold">Willing to join Club</p>
            </b-col>
            <b-col cols="9">
              <p class="mb-0 text-break">
                {{ player.profile.willing.club.name }}
                <a
                  class="ml-2"
                  :href="player.profile.willing.club.profile_picture"
                  target="_blank"
                >
                  <img
                    class="rounded"
                    height="30"
                    width="30"
                    :src="player.profile.willing.club.profile_picture"
                    alt=""
                  />
                </a>
              </p>
            </b-col>
          </b-row>
        </template>
      </div>
    </div>
    <UpdatePlayerClubModal :clubs="clubs" v-model="player" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`player/${params.id}`);
    return { player: data.data };
  },

  layout: "auth",

  data() {
    return {
      player: {},
      clubs: [],
    };
  },

  methods: {
    async updateClub() {
      const data = await this.$axios.$get("player/related");
      if (data.status.success) {
        this.clubs = data.data;
        this.$bvModal.show("update_player_club_modal");
      }
    },

    remove(id) {
      this.$bvModal
        .msgBoxConfirm("You won't be able to revert this!", {
          title: "Are you sure?",
          size: "sm",
          okTitle: "Yes",
          cancelTitle: "No",
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
        })
        .then((value) => {
          if (value) {
            let index = this.items.findIndex((x) => x.id == id);
            if (index !== -1) {
              let current = this.pagination.currentPage - 1;
              this.pagination.chunks[current].splice(index, 1);
            }
            this.$axios.delete(`player/${id}`, {
              loading: false,
            });
          }
        });
    },
  },
};
</script>
