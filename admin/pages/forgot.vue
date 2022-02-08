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
              v-validate.disable="'required|max:190|email'"
              placeholder="Enter your Email"
              data-vv-name="email"
              :state="errors.has('email') ? false : null"
            />
          </b-form-group>
          <div class="btn-box">
            <button :disabled="loading" type="submit" class="login-btn">
              <div v-if="loading" class="d-flex align-items-center">
                <b-spinner variant="white" small />
                <span class="ml-2">Please Wait</span>
              </div>
              <template v-else>Send Reset Link</template>
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
          this.$axios({
            method: "post",
            url: "forgot",
            data: this.data,
          })
            .then(({ data }) => {
              if (data.status.success) {
                this.data = {};
                this.$root.$bvToast.toast(
                  "We have e-mailed your password reset link!",
                  {
                    title: "Link E-mailed",
                    variant: "success",
                    solid: true,
                  }
                );
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
