<template>
  <div class="w-100">
    <div class="login-section">
      <div class="login-box">
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
          <small class="forgot-password">
            <router-link :to="{name: 'forgot'}">Forgot your password?</router-link>
          </small>
          <div class="btn-box">
            <button :disabled="loading" type="submit" class="login-btn">
              <div v-if="loading" class="d-flex align-items-center">
                <b-spinner variant="white" small />
                <span class="ml-2">Please Wait</span>
              </div>
              <template v-else>Login</template>
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

  methods: {
    formSubmit() {
      this.$validator.validate().then(async (result) => {
        if (result) {
          this.loading = true;
          await this.$auth
            .login({
              data: this.data,
            })
            .then(({ data }) => {
              if (data.status.success) {
                this.$auth.setUser(data.data);
              }
            })
            .finally(() => (this.loading = false));
        } else {
          this.$store.dispatch("dataErrorToast", this);
        }
      });
    },
  },

  layout: "guest",
};
</script>
