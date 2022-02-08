<template>
  <div class="w-100">
    <div class="lsh_header lsh_header--secondary-bg py-3">
      <h5 class="text-white text-center mb-0">
        Bitte melde dich mit deiner Liga.sh-ID an
      </h5>
    </div>
    <b-form @submit.prevent="formSubmit">
      <ValidationErrorsList />
      <v-text-field
        v-model="data.email"
        v-validate="'required|max:190|email'"
        data-vv-name="email"
        data-vv-as="E-Mail"
      >
        <template v-slot:label>
          <strong>E-Mail*</strong>
        </template>
      </v-text-field>
      <v-text-field
        v-model="data.password"
        v-validate="'required|min:8|max:190'"
        type="password"
        data-vv-name="password"
        data-vv-as="Passwort"
      >
        <template v-slot:label>
          <strong>Passwort*</strong>
        </template>
      </v-text-field>
      <small class="forgot-password">
        <router-link :to="{ name: 'forgot' }"
          >Passwort vergessen?</router-link
        >
      </small>
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
            <span class="ml-2">Bitte warten</span>
          </div>
          <template v-else>Anmelden</template>
        </button>
        <p></p>
        <a><nuxt-link :to="{name: 'player-signup'}">Ich habe noch keinen Account</nuxt-link></a>
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
      const { data } = await this.$auth.login(formData);
      if (data.status.success) {
        this.$auth.setUser(data.data);
      }
    },
  },
};
</script>
