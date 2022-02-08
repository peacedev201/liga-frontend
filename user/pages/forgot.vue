<template>
  <div class="w-100">
    <br/>
    <div class="lsh_header lsh_header--secondary-bg py-3">
      <h5 class="text-white text-center mb-0">
        Gebe deine Liga.sh E-Mail Adresse an um dein Passwort zurückzusetzen
      </h5>
    </div>
    <b-form @submit.prevent="formSubmit">
      <ValidationErrorsList />
      <v-text-field
        v-model="data.email"
        v-validate.disable="'required|max:190|email'"
        data-vv-name="email"
      >
        <template v-slot:label>
          <strong>E-Mail*</strong>
        </template>
      </v-text-field>
      <div class="btn-box">
        <!-- <button type="submit" class="login-btn">Einloggen</button> -->
        <button
          :disabled="$store.state.loading"
          type="submit"
          class="login-btn"
        >
          <div
            v-if="$store.state.loading"
            class="d-flex justify-content-center align-items-center"
          >
            <b-spinner variant="white" small />
            <span class="ml-2">Bitte warten...</span>
          </div>
          <template v-else>Passwort ändern</template>
        </button>
      </div>
    </b-form>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  auth: "guest",

  layout: "auth",

  mixins: [formMixin],

  data() {
    return {
      data: {},
    };
  },

  methods: {
    async validated() {
      let formData = {
        data: this.data,
      };
      const { data } = await this.$axios({
        method: "post",
        url: "forgot",
        data: this.data,
      });
      if (data.status.success) {
        this.data = {};
        this.$root.$bvToast.toast(
          "Du solltest in wenigen Minuten eine E-Mail mit weiteren Informationen erhalten!",
          {
            title: "Passwort reset erfolgreich",
            variant: "success",
            solid: true,
          }
        );
      }
    },
  },

  mounted() {
    this.$cookiebot.consentBanner()
  }

};
</script>
