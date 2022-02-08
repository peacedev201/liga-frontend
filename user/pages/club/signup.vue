<template>
  <div class="w-100">
    <div class="lsh_header lsh_header--secondary-bg py-3 mt-4">
      <h5 class="text-white text-center mb-0"><nuxt-link class="text-white" :to="{name: 'login'}">Ich habe bereits einen Account</nuxt-link></h5>
    </div>
    <br/>
    <div class="lsh_header lsh_header--secondary-bg py-3">
      <h5 class="text-white text-center mb-0">
        Vereins-Konto erstellen
      </h5>
      <p class="text--white text-center">Nur ein bevollmächtigtes Mitglied des Vereins darf ein Vereins-Konto anlegen. Wir behalten uns vor dies stichprobenartig zu prüfen.</p>
    </div>
    <b-form @submit.prevent="formSubmit">
      <ValidationErrorsList />
      <v-text-field
        v-model="data.name"
        v-validate.disable="'required|max:190'"
        data-vv-name="name"
        data-vv-as="name"
      >
        <template v-slot:label>
          <strong>Name des Vereins*</strong>
        </template>
      </v-text-field>
      <v-text-field
        v-model="data.email"
        v-validate.disable="'required|max:190|email'"
        data-vv-name="email"
      >
        <template v-slot:label>
          <strong>E-Mail*</strong>
        </template>
      </v-text-field>
      <div class="container-fluid">
        <b-row>
          <b-col class="pl-0">
            <v-text-field
              v-model="data.password"
              v-validate.disable="'required|min:8|max:190'"
              type="password"
              data-vv-name="password"
              ref="password"
            >
              <template v-slot:label>
                <strong>Passwort*</strong>
              </template>
            </v-text-field>
          </b-col>
          <b-col class="pr-0">
            <v-text-field
              v-model="data.password_confirmation"
              v-validate.disable="'required|confirmed:password'"
              type="password"
              data-vv-name="password_confirmation"
              data-vv-as="password"
            >
              <template v-slot:label>
                <strong>Passwort bestätigen*</strong>
              </template>
            </v-text-field>
          </b-col>
        </b-row>
      </div>
      <!--<v-textarea
        v-model="data.biography"
        v-validate.disable="'required|max:190'"
        data-vv-name="biography"
        data-vv-as="biografie"
        rows="3"
      >
        <template v-slot:label>
          <strong>Biografie*</strong>
        </template>
      </v-textarea>-->
      <!-- <small class="forgot-password">
            <router-link :to="{ name: 'forgot' }"
              >Forgot your password?</router-link
            >
          </small> -->
      <div class="btn-box">
        <!-- <button type="submit" class="login-btn">Einloggen</button> -->
        <b-form-checkbox
            id="privacy"
            name="privacy"
            v-model="data.privacy"
            value="accepted"
            unchecked-value="not_accepted"
            style="text-align: left;"
        >
          Ich habe die <a href="/privacy">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine persönlichen Daten verarbeitet werden.
        </b-form-checkbox>
        <br/>

        <b-form-checkbox
            v-model="data.optin_marketing"
            id="optin_marketing"
            name="optin_marketing"
            value="accepted"
            unchecked-value="not_accepted"
            style="text-align: left;"
        >
          Ich möchte weitere Informationen in Form von Newslettern zu Liga.sh erhalten.
        </b-form-checkbox>
        <br/>
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
          <template v-else>Konto anlegen</template>
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
      data: {
        type: "club",
        biography: "-",
      },
    };
  },

  methods: {
    async validated() {
      let formData = { ...this.data };
      const { data } = await this.$axios.post("register", formData);
      if (data.status.success) {
        this.$root.$bvToast.toast(
          "Du hast deinen Verein erfolgreich angemeldet.",
          {
            title: "Anmeldung erfolgreich!",
            variant: "success",
            solid: true,
          }
        );
        this.$auth.setUser(data.data);
        this.$auth.setToken(data.token);
      }
    },
  },
};
</script>
