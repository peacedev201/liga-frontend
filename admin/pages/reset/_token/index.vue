<template>
  <div class="w-100">
    <div class="login-section">
      <div class="login-box">
        <div class="heading">
          <h2>Reset Password</h2>
        </div>
        <b-form @submit.prevent="formSubmit">
          <b-form-group
            class="field"
            :state="errors.has('email') ? false : null"
            label="Email"
            label-for="email"
            :invalid-feedback="errors.first('email')"
          >
            <b-form-input
              id="email"
              v-model="data.email"
              v-validate="'required|max:190|email'"
              placeholder="Enter your Email"
              data-vv-name="email"
              :state="errors.has('email') ? false : null"
            />
          </b-form-group>
          <b-form-group
            class="field"
            :state="errors.has('password') ? false : null"
            label="Your Password"
            label-for="password"
            :invalid-feedback="errors.first('password')"
          >
            <b-form-input
              id="password"
              ref="password"
              v-model="data.password"
              v-validate="'required|min:8|max:190'"
              placeholder="Your Password"
              data-vv-name="password"
              type="password"
              :state="errors.has('password') ? false : null"
            />
          </b-form-group>
          <b-form-group
            class="field"
            :state="errors.has('password_confirmation') ? false : null"
            label="Your Password"
            label-for="password_confirmation"
            :invalid-feedback="errors.first('password_confirmation')"
          >
            <b-form-input
              id="password_confirmation"
              v-model="data.password_confirmation"
              v-validate="'required|confirmed:password'"
              placeholder="Your Password"
              data-vv-as="password"
              data-vv-name="password_confirmation"
              type="password"
              :state="errors.has('password_confirmation') ? false : null"
            />
          </b-form-group>
          <div class="btn-box">
            <button :disabled="loading" type="submit" class="login-btn">
              <div v-if="loading" class="d-flex align-items-center">
                <b-spinner variant="white" small />
                <span class="ml-2">Please Wait</span>
              </div>
              <template v-else>Reset Password</template>
            </button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import formMixin from "@/mixins/formMixin";

export default {
  auth: "guest",

  mixins: [formMixin],

  data() {
    return {
      data: {},
      loading: false,
    };
  },

  created() {
    this.data.token = this.$route.params.token;
    this.data.email = this.$route.query.email;
  },

  methods: {
    formSubmit() {
      this.$validator.validate().then(async (result) => {
        if (result) {
          this.loading = true;
          this.$axios({
            method: "post",
            url: "reset",
            data: this.data,
          })
            .then(({ data }) => {
              if (data.status.success) {
                this.data = {};
                this.$root.$bvToast.toast(
                  "Your password has been reset successfully",
                  {
                    title: "Password Reset",
                    variant: "success",
                    solid: true,
                  }
                );
                this.$router.push({ name: "index" });
              }
            })
            .finally(() => (this.loading = false));
        } else {
          this.$store.dispatch("dataErrorToast", this);
        }
      });
    },
  },

  head: {
    title: "MYBRIGHTMAIDS",
  },

  layout: "guest",
};
</script>
