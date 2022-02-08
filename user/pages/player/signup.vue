<template>
  <div class="w-100">
    <br/>
    <div class="lsh_header lsh_header--secondary-bg py-3">
      <h5 class="text-white text-center mb-0">
        Bitte gebe deine Daten für deine Liga.SH-ID an
      </h5>
    </div>
    <b-form @submit.prevent="formSubmit">
      <ValidationErrorsList />
      <v-text-field
        v-model="data.first_name"
        v-validate="'required|max:190'"
        data-vv-name="first_name"
        data-vv-as="Vorname"
      >
        <template v-slot:label>
          <strong>Vorname*</strong>
        </template>
      </v-text-field>
      <v-text-field
        v-model="data.last_name"
        v-validate="'required|max:190'"
        data-vv-name="last_name"
        data-vv-as="Nachname"
      >
        <template v-slot:label>
          <strong>Nachname*</strong>
        </template>
      </v-text-field>
      <v-text-field
        v-model="data.nick_name"
        v-validate="'required|max:190'"
        data-vv-name="nick_name"
        data-vv-as="Nickname"
      >
        <template v-slot:label>
          <strong>Nickname*</strong>
        </template>
      </v-text-field>
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
      <div class="container-fluid">
        <b-row>
          <b-col class="pl-0">
            <v-text-field
              v-model="data.password"
              v-validate="'required|min:8|max:190'"
              type="password"
              data-vv-name="Passwort"
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
              v-validate="'required|confirmed:password'"
              type="password"
              data-vv-name="password_confirmation"
              data-vv-as="Passwort bestätigen"
            >
              <template v-slot:label>
                <strong>Passwort bestätigen*</strong>
              </template>
            </v-text-field>
          </b-col>
        </b-row>
      </div>
      <v-text-field
        v-model="data.street"
        v-validate="'required|max:190'"
        data-vv-name="street"
        data-vv-as="Straße und Hausnummer"
      >
        <template v-slot:label>
          <strong>Strasse und Hausnummer*</strong>
        </template>
      </v-text-field>
      <div class="container-fluid">
        <b-row>
          <b-col cols="4" class="pl-0">
            <v-text-field
              v-model="data.postal_code"
              v-validate="'required|max:190'"
              data-vv-name="postal_code"
              data-vv-as="Postleitzahl"
            >
              <template v-slot:label>
                <strong>Postleitzahl*</strong>
              </template>
            </v-text-field>
          </b-col>
          <b-col cols="8" class="pr-0">
            <v-text-field
              v-model="data.city"
              v-validate="'required|max:190'"
              data-vv-name="city"
              data-vv-as="Stadt"
            >
              <template v-slot:label>
                <strong>Stadt*</strong>
              </template>
            </v-text-field>
          </b-col>
        </b-row>
      </div>
      <div data-app>
        <v-autocomplete
          append-icon=""
          :items="clubs"
          item-text="name"
          item-value="id"
          data-vv-name="club"
          v-model="data.club"
        >
          <template #no-data> No Result Found </template>
          <template v-slot:label>
            <strong>Verein*</strong>
          </template>
        </v-autocomplete>
      </div>
      <v-text-field
        v-model="data.country"
        v-validate="'required|max:190'"
        data-vv-name="country"
        data-vv-as="Land"
      >
        <template v-slot:label>
          <strong>Land*</strong>
        </template>
      </v-text-field>
      <!--<v-textarea
        v-model="data.biography"
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
        <b-form-checkbox
          id="privacy"
          name="privacy"
          value="accepted"
          v-model="data.privacy"
          unchecked-value="not_accepted"
          style="text-align: left;"
        >
          Ich habe die <a href="/privacy">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine persönlichen Daten verarbeitet werden.
        </b-form-checkbox>
        <br/>

        <b-form-checkbox
            id="optin_marketing"
            name="optin_marketing"
            value="accepted"
            v-model="data.optin_marketing"
            unchecked-value="not_accepted"
            style="text-align: left;"
        >
          Ich möchte weitere Informationen in Form von Newslettern zu Liga.sh erhalten.
        </b-form-checkbox>
        <br/>

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
          <template v-else>Registrieren</template>
        </button>
        <p></p>
        <a><nuxt-link :to="{name: 'login'}">Ich habe bereits einen Account</nuxt-link></a>
      </div>
    </b-form>
    <b-modal
      title="Bestätige Vereinszugehörigkeit"
      footer-class="mt-0"
      id="club_confirm_modal"
      header-class="bg-dark text-white"
      ok-title="Ja"
      cancel-title="Nein"
      @cancel="handleNo"
      @ok="handleYes"
    >
      <p>Teilnehmer*innen an Vereinsturnieren sind die natürlichen Personen, die für den jeweiligen Verein antreten. Eine direkte Meldung durch einen eingetragenen Verein selbst ist nicht möglich.</p>
      <p>Preisgelder werden an die natürlichen Personen ausgezahlt, die für den jeweiligen Verein antreten, nicht an den Verein selbst.</p>
      <p class="mb-1"><strong>Ja:</strong> Ich bin offizielles Mitglied des Vereins</p>
      <p class="mb-0">
        <strong>Nein:</strong> Nein ich bin kein Mitglied aber ich würde gerne für den Verein spielen
      </p>
    </b-modal>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  auth: "guest",

  layout: "auth",

  mixins: [formMixin],

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`data/related/player/signup`);
    data.unshift({
      id: null,
      name: "Kein Verein",
    });
    return { clubs: data };
  },

  data() {
    return {
      data: {
        type: "player",
        country: "Deutschland",
      },
      clubs: [],
    };
  },

  beforeCreate() {
    this.$vuetify.lang = {
      t: () => {},
    };
    this.$vuetify.theme = { dark: false };
  },

  methods: {
    handleNo(event) {
      let formData = { ...this.data };
      formData.is_member = false;
      this.register(formData);
    },

    handleYes(event) {
      let formData = { ...this.data };
      formData.is_member = true;
      this.register(formData);
    },

    validated() {
      let formData = { ...this.data };
      if (formData.club) {
        this.$bvModal.show("club_confirm_modal");
      } else {
        this.register(formData);
      }
    },

    async register(formData) {
      const { data } = await this.$axios.post("register", formData);
      if (data.status.success) {
        this.$root.$bvToast.toast(
          "Du hast dich erfolgreich angemeldet!",
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
