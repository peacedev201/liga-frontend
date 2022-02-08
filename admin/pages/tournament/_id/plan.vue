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
          <div class="schedule">
            <div
              v-for="(round, roundIndex) in data.rounds"
              :key="roundIndex"
              class="schedule__rounds"
            >
              <h4 class="text-center">{{ round.name }}</h4>
              <div
                v-for="(match, index) in round.matches"
                :key="index"
                class="schedule__rounds__match"
                :style="{
                  height: roundIndex == 0 ? 290 : 290 * (roundIndex * 2) + 'px',
                }"
              >
                <div class="fields">
                  <b-form-group
                    label-class="schedule__rounds__match__label"
                    label-cols-lg="2"
                    :label="`P 1`"
                    :state="
                      errors.has(
                        `rounds.${roundIndex}.matches${index}.first_player_id`
                      )
                        ? false
                        : null
                    "
                    :label-for="`rounds.${roundIndex}.matches${index}.first_player_id`"
                    :invalid-feedback="
                      errors.first(
                        `rounds.${roundIndex}.matches${index}.first_player_id`
                      )
                    "
                  >
                    <b-form-select
                      size="sm"
                      :id="`rounds.${roundIndex}.matches${index}.first_player_id`"
                      v-model="match.first_player_id"
                      placeholder="Type name here"
                      :data-vv-name="`rounds.${roundIndex}.matches${index}.first_player_id`"
                      data-vv-as="player 1"
                      :state="
                        errors.has(
                          `rounds.${roundIndex}.matches${index}.first_player_id`
                        )
                          ? false
                          : null
                      "
                    >
                      <option :value="null">Select player 1 here</option>
                      <option
                        v-for="(participant, index) in tournament.participants"
                        :key="index"
                        :value="participant.id"
                      >
                        {{ participant.full_name }}
                        <template v-if="participant.membership">
                          ({{ participant.membership.club.name }})
                        </template>
                      </option>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    label-class="schedule__rounds__match__label"
                    label-cols-lg="2"
                    :label="`P 2`"
                    :state="
                      errors.has(
                        `rounds.${roundIndex}.matches${index}.second_player_id`
                      )
                        ? false
                        : null
                    "
                    :label-for="`rounds.${roundIndex}.matches${index}.second_player_id`"
                    :invalid-feedback="
                      errors.first(
                        `rounds.${roundIndex}.matches${index}.second_player_id`
                      )
                    "
                  >
                    <b-form-select
                      size="sm"
                      :options="tournament.participants"
                      text-field="full_name"
                      value-field="id"
                      :id="`rounds.${roundIndex}.matches${index}.second_player_id`"
                      v-model="match.second_player_id"
                      placeholder="Type name here"
                      :data-vv-name="`rounds.${roundIndex}.matches${index}.second_player_id`"
                      data-vv-as="player 2"
                      :state="
                        errors.has(
                          `rounds.${roundIndex}.matches${index}.second_player_id`
                        )
                          ? false
                          : null
                      "
                    >
                      <template #first>
                        <option :value="null">Select player 1 here</option>
                      </template>
                    </b-form-select>
                  </b-form-group>

                  <b-form-group
                    label-class="schedule__rounds__match__label"
                    label-cols-lg="2"
                    :label="`Date`"
                    :state="
                      errors.has(`rounds.${roundIndex}.matches${index}.date`)
                        ? false
                        : null
                    "
                    :label-for="`rounds.${roundIndex}.matches${index}.date`"
                    :invalid-feedback="
                      errors.first(`rounds.${roundIndex}.matches${index}.date`)
                    "
                  >
                    <b-form-datepicker
                      :date-format-options="{
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        weekday: 'short',
                      }"
                      size="sm"
                      :min="new Date()"
                      :id="`rounds.${roundIndex}.matches${index}.date`"
                      v-model="match.held_date"
                      placeholder="Type name here"
                      :data-vv-name="`rounds.${roundIndex}.matches${index}.date`"
                      data-vv-as="date"
                      :state="
                        errors.has(`rounds.${roundIndex}.matches${index}.date`)
                          ? false
                          : null
                      "
                    />
                  </b-form-group>

                  <b-form-group
                    label-class="schedule__rounds__match__label"
                    label-cols-lg="2"
                    :label="`Time`"
                    :state="
                      errors.has(`rounds.${roundIndex}.matches${index}.time`)
                        ? false
                        : null
                    "
                    :label-for="`rounds.${roundIndex}.matches${index}.time`"
                    :invalid-feedback="
                      errors.first(`rounds.${roundIndex}.matches${index}.time`)
                    "
                  >
                    <b-form-timepicker
                      size="sm"
                      :min="new Date()"
                      :id="`rounds.${roundIndex}.matches${index}.time`"
                      v-model="match.held_time"
                      placeholder="Type name here"
                      :data-vv-name="`rounds.${roundIndex}.matches${index}.time`"
                      data-vv-as="time"
                      :state="
                        errors.has(`rounds.${roundIndex}.matches${index}.time`)
                          ? false
                          : null
                      "
                    />
                  </b-form-group>

                  <div class="container-fluid">
                    <b-row>
                      <b-col cols="6">
                        <b-form-group
                          label-class="schedule__rounds__match__label mb-0"
                          :label="`P 1 Score`"
                          :state="
                            errors.has(
                              `rounds.${roundIndex}.matches${index}.first_player_score`
                            )
                              ? false
                              : null
                          "
                          :label-for="`rounds.${roundIndex}.matches${index}.first_player_score`"
                          :invalid-feedback="
                            errors.first(
                              `rounds.${roundIndex}.matches${index}.first_player_score`
                            )
                          "
                        >
                          <b-form-input
                            size="sm"
                            :id="`rounds.${roundIndex}.matches${index}.first_player_score`"
                            v-model="match.first_player_score"
                            placeholder="Type score here"
                            :data-vv-name="`rounds.${roundIndex}.matches${index}.first_player_score`"
                            data-vv-as="player 1 score"
                            :state="
                              errors.has(
                                `rounds.${roundIndex}.matches${index}.first_player_score`
                              )
                                ? false
                                : null
                            "
                          />
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          label-class="schedule__rounds__match__label mb-0"
                          :label="`P 2 Score`"
                          :state="
                            errors.has(
                              `rounds.${roundIndex}.matches${index}.second_player_score`
                            )
                              ? false
                              : null
                          "
                          :label-for="`rounds.${roundIndex}.matches${index}.second_player_score`"
                          :invalid-feedback="
                            errors.first(
                              `rounds.${roundIndex}.matches${index}.second_player_score`
                            )
                          "
                        >
                          <b-form-input
                            size="sm"
                            :id="`rounds.${roundIndex}.matches${index}.second_player_score`"
                            v-model="match.second_player_score"
                            placeholder="Type score here"
                            :data-vv-name="`rounds.${roundIndex}.matches${index}.second_player_score`"
                            data-vv-as="player 2 score"
                            :state="
                              errors.has(
                                `rounds.${roundIndex}.matches${index}.second_player_score`
                              )
                                ? false
                                : null
                            "
                          />
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </div>

                  <div class="container-fluid">
                    <b-row>
                      <b-col cols="6">
                        <b-form-group
                          label-class="schedule__rounds__match__label mb-0"
                          :label="`P 1 Points`"
                          :state="
                            errors.has(
                              `rounds.${roundIndex}.matches${index}.first_player_points`
                            )
                              ? false
                              : null
                          "
                          :label-for="`rounds.${roundIndex}.matches${index}.first_player_points`"
                          :invalid-feedback="
                            errors.first(
                              `rounds.${roundIndex}.matches${index}.first_player_points`
                            )
                          "
                        >
                          <b-form-input
                            size="sm"
                            :id="`rounds.${roundIndex}.matches${index}.first_player_points`"
                            v-model="match.first_player_points"
                            placeholder="Type points here"
                            :data-vv-name="`rounds.${roundIndex}.matches${index}.first_player_points`"
                            data-vv-as="player 1 points"
                            :state="
                              errors.has(
                                `rounds.${roundIndex}.matches${index}.first_player_points`
                              )
                                ? false
                                : null
                            "
                          />
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group
                          label-class="schedule__rounds__match__label mb-0"
                          :label="`P 2 Points`"
                          :state="
                            errors.has(
                              `rounds.${roundIndex}.matches${index}.second_player_points`
                            )
                              ? false
                              : null
                          "
                          :label-for="`rounds.${roundIndex}.matches${index}.second_player_points`"
                          :invalid-feedback="
                            errors.first(
                              `rounds.${roundIndex}.matches${index}.second_player_points`
                            )
                          "
                        >
                          <b-form-input
                            size="sm"
                            :id="`rounds.${roundIndex}.matches${index}.second_player_points`"
                            v-model="match.second_player_points"
                            placeholder="Type points here"
                            :data-vv-name="`rounds.${roundIndex}.matches${index}.second_player_points`"
                            data-vv-as="player 2 points"
                            :state="
                              errors.has(
                                `rounds.${roundIndex}.matches${index}.second_player_points`
                              )
                                ? false
                                : null
                            "
                          />
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <b-form-group
              label-class="schedule__rounds__match__label"
              label-cols-sm="4"
              label-cols-lg="3"
            >
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
          </div>
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
    let index = 0;
    do {
      total_slots = total_slots / 2;
      this.addRound(index, total_slots);
      index++;
    } while (total_slots != 2);
    this.addRound(index, 1);
  },

  methods: {
    addRound(index, total_slots) {
      let matches = null;
      if (!this.data.rounds[index].matches) {
        matches = [];
      } else {
        matches = this.data.rounds[index].matches;
      }
      for (let i = 0; i < total_slots; i++) {
        if (!matches[i]) {
          matches.push({
            first_player_id: null,
            second_player_id: null,
            held_date: null,
            held_time: null,
            first_player_score: null,
            second_player_score: null,
          });
        }
      }
      this.data.rounds[index].matches = matches;
    },

    async validated() {
      let formData = { ...this.data };
      const { data } = await this.$axios.post(
        "tournament/plan/" + this.tournament.id,
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
