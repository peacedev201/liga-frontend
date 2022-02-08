<template>
  <div>
    <b-modal
      id="update_player_club_modal"
      ref="modal"
      title="Update Player's Club"
      @ok.prevent="formSubmit"
      :ok-disabled="$store.state.loading"
      @show="showModal"
      variant="dark"
    >
      <b-form @submit.prevent="formSubmit">
        <b-form-group
          label-cols-sm="3"
          label-cols-lg="2"
          label="Club"
          :state="errors.has('club') ? false : null"
          label-for="club"
          :invalid-feedback="errors.first('club')"
          label-align-sm="right"
        >
          <b-form-select
            :options="clubs"
            text-field="name"
            value-field="id"
            id="club"
            v-model="data.club"
            v-validate="'required'"
            placeholder="Select club here"
            data-vv-name="club"
            :state="errors.has('club') ? false : null"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  mixins: [formMixin],

  props: {
    clubs: {
      type: Array,
      require: true,
    },
    value: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      data: {},
    };
  },

  methods: {
    async validated() {
      const { data } = await this.$axios({
        method: "put",
        url: `player/${this.value.id}`,
        data: this.data,
      });
      if (data.status.success) {
        this.$emit("input", data.data);
        this.$bvModal.hide("update_player_club_modal");
      }
    },

    showModal() {
      if (this.value.profile.membership) {
        this.data.club = this.value.profile.membership.club.id;
      }
    },
  },
};
</script>