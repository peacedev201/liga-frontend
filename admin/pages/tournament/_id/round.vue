<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Create Round for {{ tournament.name }}</h3>
        <router-link :to="{ name: 'tournament' }" class="float-right">
          <button class="table-btn btn">Back</button>
        </router-link>
      </div>
      <hr />
      <div class="table-section">
        <b-form @submit.prevent="formSubmit">
          <b-col
            v-for="(round, index) in data.rounds"
            :key="index"
            md="8"
            offset-md="2"
          >
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              :label="`Name of Round ${index + 1}`"
              :state="errors.has(`rounds.${index}.name`) ? false : null"
              :label-for="`rounds.${index}.name`"
              :invalid-feedback="errors.first(`rounds.${index}.name`)"
              label-align-sm="right"
            >
              <b-form-input
                :id="`rounds.${index}.name`"
                v-model="round.name"
                placeholder="Type name here"
                :data-vv-name="`rounds.${index}.name`"
                v-validate="'required|max:190'"
                data-vv-as="name"
                :state="errors.has(`rounds.${index}.name`) ? false : null"
              />
            </b-form-group>
          </b-col>

          <b-col md="8" offset-md="2">
            <b-form-group label-cols-sm="4" label-cols-lg="3">
              <button
                :disabled="$store.state.loading"
                type="submit"
                class="form-btn btn"
              >
                <div
                  v-if="$store.state.loading"
                  class="d-flex align-items-center"
                >
                  <b-spinner variant="white" small />
                  <span class="ml-2">Please Wait</span>
                </div>
                <template v-else>Save</template>
              </button>
            </b-form-group>
          </b-col>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  async asyncData({ $axios, params }) {
    var { data } = await $axios.$get(`tournament/${params.id}`);
    return { tournament: data };
  },

  layout: "auth",

  mixins: [formMixin],

  data() {
    return {
      tournament: {},
      data: {},
    };
  },

  created() {
    this.data.rounds = this.tournament.rounds;
    let total_slots = this.tournament.total_slots;
    if (this.tournament.rounds < 1) {
      let index = 0;
      do {
        this.addRound(index);
        total_slots = total_slots / 2;
        index++;
      } while (total_slots != 2);
      index++;
      this.addRound(index);
    }
  },

  methods: {
    addRound(index) {
      if (!this.data.rounds[index]) {
        this.data.rounds.push({});
      }
    },
    async validated() {
      let formData = { ...this.data };
      const { data } = await this.$axios.post(
        "tournament/round/" + this.tournament.id,
        formData
      );
      if (data.status.success) {
        this.$root.$bvToast.toast(
          "Tournament Round have been updated successfully.",
          {
            title: "Created",
            variant: "success",
            solid: true,
          }
        );
        this.$router.push({ name: "tournament" });
      }
    },
  },
};
</script>