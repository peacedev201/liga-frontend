<template>
  <div class="w-100">
    <div class="lsh_header lsh_header--secondary-bg py-3">
      <h5 class="text-white text-center mb-0">
        Bitte melde dich mit deiner Liga.sh ID an
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
      <div class="container-fluid">
        <b-row>
          <b-col class="pl-0">
            <v-text-field
              v-model="data.password"
              v-validate="'required|min:8|max:190'"
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
              v-validate="'required|confirmed:password'"
              type="password"
              data-vv-name="password_confirmation"
              data-vv-as="password"
            >
              <template v-slot:label>
                <strong>Passwort bestatigen*</strong>
              </template>
            </v-text-field>
          </b-col>
        </b-row>
      </div>
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
            <span class="ml-2">Please Wait</span>
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

  created() {
    this.data.token = this.$route.params.token;
    this.data.email = this.$route.query.email;
  },

  methods: {
    async validated() {
      let formData = {
        data: this.data,
      };
      const { data } = await this.$axios({
        method: "post",
        url: "reset",
        data: this.data,
      });
      if (data.status.success) {
        this.data = {};
        this.$root.$bvToast.toast("Your password has been reset successfully", {
          title: "Password Reset",
          variant: "success",
          solid: true,
        });
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
