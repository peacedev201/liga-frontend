<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Add Tournament</h3>
        <router-link :to="{ name: 'tournament' }" class="float-right">
          <button class="table-btn btn">Back</button>
        </router-link>
      </div>
      <hr />
      <div class="table-section">
        <b-form @submit.prevent="formSubmit">
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
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
              label-cols-lg="4"
              label="System"
              :state="errors.has('system') ? false : null"
              label-for="system"
              :invalid-feedback="errors.first('system')"
              label-align-sm="right"
            >
              <b-form-input
                id="system"
                v-model="data.system"
                v-validate="'required|max:190'"
                placeholder="Type system here"
                data-vv-name="system"
                :state="errors.has('system') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Total Slots"
              :state="errors.has('total_slots') ? false : null"
              label-for="total_slots"
              :invalid-feedback="errors.first('total_slots')"
              label-align-sm="right"
            >
              <b-radio-group
                class="mt-2"
                :options="[8, 16, 32, 64, 128, 256]"
                id="total_slots"
                v-model="data.total_slots"
                v-validate="'required|max:190'"
                data-vv-name="total_slots"
                data-vv-as="total slots"
                :state="errors.has('total_slots') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Open Registration"
              :state="errors.has('open_for_registration') ? false : null"
              label-for="open_for_registration"
              :invalid-feedback="errors.first('open_for_registration')"
              label-align-sm="right"
            >
              <b-form-checkbox
                class="mt-2"
                id="open_for_registration"
                v-model="data.open_for_registration"
                data-vv-name="open_for_registration"
                data-vv-as="open registration"
                :state="errors.has('open_for_registration') ? false : null"
              >
                Open tournament for Registration
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Only For Clubs"
              :state="errors.has('only_for_clubs') ? false : null"
              label-for="only_for_clubs"
              :invalid-feedback="errors.first('only_for_clubs')"
              label-align-sm="right"
            >
              <b-form-checkbox
                class="mt-2"
                id="only_for_clubs"
                v-model="data.only_for_clubs"
                data-vv-name="only_for_clubs"
                data-vv-as="only for clubs"
                :state="errors.has('only_for_clubs') ? false : null"
              >
                Allow only player that have club
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Registration End Date"
              :state="errors.has('registration_end_date') ? false : null"
              label-for="registration_end_date"
              :invalid-feedback="errors.first('registration_end_date')"
              label-align-sm="right"
            >
              <b-form-datepicker
                :min="new Date()"
                id="registration_end_date"
                v-model="data.registration_end_date"
                v-validate="'required|max:190'"
                placeholder="Type registration end date here"
                data-vv-name="registration_end_date"
                data-vv-as="registration end date"
                :state="errors.has('registration_end_date') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Registration End Time"
              :state="errors.has('registration_end_time') ? false : null"
              label-for="registration_end_time"
              :invalid-feedback="errors.first('registration_end_time')"
              label-align-sm="right"
            >
              <b-form-timepicker
                :min="new Date()"
                id="registration_end_time"
                v-model="data.registration_end_time"
                v-validate="'required|max:190'"
                placeholder="Type registration end time here"
                data-vv-name="registration_end_time"
                data-vv-as="registration end time"
                :state="errors.has('registration_end_time') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Icon Image"
              :state="errors.has('icon_image') ? false : null"
              label-for="icon_image"
              :invalid-feedback="errors.first('icon_image')"
              label-align-sm="right"
            >
              <b-form-file
                id="icon_image"
                v-model="data.icon_image"
                v-validate="'required|image'"
                placeholder="Select icon image here"
                data-vv-name="icon_image"
                data-vv-as="icon image"
                :state="errors.has('icon_image') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Banner Image"
              :state="errors.has('banner_image') ? false : null"
              label-for="banner_image"
              :invalid-feedback="errors.first('banner_image')"
              label-align-sm="right"
            >
              <b-form-file
                id="banner_image"
                v-model="data.banner_image"
                v-validate="'required|image'"
                placeholder="Select banner image here"
                data-vv-name="banner_image"
                data-vv-as="banner image"
                :state="errors.has('banner_image') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="4"
              label="Description"
              :state="errors.has('description') ? false : null"
              label-for="description"
              :invalid-feedback="errors.first('description')"
              label-align-sm="right"
            >
              <b-form-textarea
                id="description"
                v-model="data.description"
                v-validate="'required'"
                placeholder="Type description here"
                data-vv-name="description"
                :state="errors.has('description') ? false : null"
              />
            </b-form-group>
          </b-col>

          <b-col md="8" offset-md="2">
            <b-form-group label-cols-sm="4" label-cols-lg="4">
              <button
                :disabled="$store.state.loading"
                type="submit"
                class="form-btn btn"
              >
                <div
                  v-if="$store.state.loading"
                  class="d-flex align-items-center"
                >
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
      data: {
        total_slots: 256,
        only_for_clubs: 0,
      },
    };
  },

  methods: {
    async validated() {
      let formData = { ...this.data };
      formData.registration_end_date_time = `${formData.registration_end_date} ${formData.registration_end_time}`;

      let form = new FormData();
      for (var key in formData) {
        form.append(key, formData[key]);
      }

      const { data } = await this.$axios.post("tournament", form);
      if (data.status.success) {
        this.$root.$bvToast.toast("Tournament has been created successfully.", {
          title: "Created",
          variant: "success",
          solid: true,
        });
        this.$router.push({ name: "tournament" });
      }
    },
  },
};
</script>