<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Add Admin</h3>
        <router-link :to="{ name: 'admin' }" class="float-right">
          <button class="table-btn btn">Back</button>
        </router-link>
      </div>
      <hr />
      <div class="table-section">
        <b-form @submit.prevent="formSubmit">
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Name"
              :state="errors.has('name') ? false : null"
              label-for="name"
              :invalid-feedback="errors.first('name')"
              label-align-sm="right"
            >
              <b-form-input
                id="name"
                v-model="data.name"
                v-validate="'required|max:190'"
                placeholder="Type name here"
                data-vv-name="name"
                :state="errors.has('name') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Email"
              :state="errors.has('email') ? false : null"
              label-for="email"
              :invalid-feedback="errors.first('email')"
              label-align-sm="right"
            >
              <b-form-input
                id="email"
                v-model="data.email"
                v-validate="'required|max:190|email'"
                placeholder="Type email here"
                data-vv-name="email"
                :state="errors.has('email') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Password"
              :state="errors.has('password') ? false : null"
              label-for="password"
              :invalid-feedback="errors.first('password')"
              label-align-sm="right"
            >
              <b-form-input
                id="password"
                v-model="data.password"
                v-validate="'required|min:8|max:190'"
                placeholder="Type password here"
                data-vv-name="password"
                type="password"
                :state="errors.has('password') ? false : null"
                ref="password"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Confirm Password"
              :state="errors.has('password_confirmation') ? false : null"
              label-for="password_confirmation"
              :invalid-feedback="errors.first('password_confirmation')"
              label-align-sm="right"
            >
              <b-form-input
                id="password_confirmation"
                v-model="data.password_confirmation"
                v-validate="'required|confirmed:password'"
                placeholder="Type password_confirmation here"
                data-vv-name="password_confirmation"
                type="password"
                data-vv-as="password"
                :state="errors.has('password_confirmation') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group label-cols-sm="4" label-cols-lg="3">
              <button :disabled="$store.state.loading" type="submit" class="form-btn btn">
                <div v-if="$store.state.loading" class="d-flex align-items-center">
                  <b-spinner variant="white" small />
                  <span class="ml-2">Please Wait</span>
                </div>
                <template v-else>Save</template>
              </button>
            </b-form-group>
          </b-col>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";

export default {
  layout: "auth",

  mixins: [formMixin],

  data() {
    return {
      data: {},
    };
  },

  methods: {
    formSubmit() {
      this.$validator.validate().then(async (result) => {
        if (result) {
          this.$axios({
            method: "post",
            url: "admin",
            data: this.data,
          }).then(({ data }) => {
            if (data.status.success) {
              this.$root.$bvToast.toast(
                "Admin has been created successfully.",
                {
                  title: "Created",
                  variant: "success",
                  solid: true,
                }
              );
              this.$router.push({ name: "admin" });
            }
          });
        } else {
          this.$store.dispatch("dataErrorToast", this);
        }
      });
    },
  },
};
</script>