<template>
  <div class="lsh_grass_background">
    <div class="container">
      <HeroHeading heading="Vereinsprofil bearbeiten" />

      <div class="lsh_dashboard_main justify-content-center">
        <b-form class="w-75" @submit.prevent="formSubmit">
          <b-form-row>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('name') ? false : null"
                label="Name"
                label-for="name"
                :invalid-feedback="errors.first('name')"
              >
                <b-form-input
                  id="name"
                  v-model="data.name"
                  v-validate="'required|max:190'"
                  placeholder="Vereinsname ändern"
                  data-vv-name="name"
                  data-vv-as="name"
                  :state="errors.has('name') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-6 pb-0">
              <b-form-group
                :state="errors.has('biography') ? false : null"
                label="Biographie"
                label-for="biography"
                :invalid-feedback="errors.first('biography')"
              >
                <b-form-textarea
                  id="biography"
                  v-model="data.biography"
                  v-validate="'required|max:190'"
                  placeholder="Beschreibung des Vereins"
                  data-vv-name="biography"
                  data-vv-as="biography"
                  :state="errors.has('biography') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-6 pb-0">
              <b-form-group
                :state="errors.has('avatar') ? false : null"
                label="Avatar"
                label-for="avatar"
                :invalid-feedback="errors.first('avatar')"
              >
                <b-form-file
                  id="avatar"
                  v-model="data.avatar"
                  placeholder="Ändere dein Profilbild"
                  data-vv-name="avatar"
                  data-vv-as="avatar"
                  :state="errors.has('avatar') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12">
              <b-button type="submit" class="bg-primary text-white">
                Speichern
              </b-button>
              <!-- <b-button
                :disabled="$store.state.loading"
                type="submit"
                class="bg-primary text-white"
              >
                <div
                  v-if="$store.state.loading"
                  class="d-flex align-items-center"
                >
                  <b-spinner variant="white" small />
                  <span class="ml-2">Please Wait</span>
                </div>
                <template v-else>Save</template>
              </b-button> -->
            </div>
          </b-form-row>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";
import countries from "@/assets/json/countries.json";

export default {
  layout: "club",

  mixins: [formMixin],

  data: function () {
    return {
      data: {
        profile: {},
      },
      countries,
    };
  },

  created() {
    let data = { ...this.$auth.user.profile };
    if (!data) {
      data = {};
    }
    this.data = {
      ...this.data,
      ...data,
    };
  },

  methods: {
    async validated() {
      let formData = new FormData();
      for (var key in this.data) {
        formData.append(key, this.data[key]);
      }
      const { data } = await this.$axios({
        method: "post",
        url: "club/profile",
        data: formData,
      });
      if (data.status.success) {
        this.$auth.setUser(data.data);
        this.$root.$bvToast.toast(
          "Du hast das Profil erfolgreich bearbeitet.",
          {
            title: "Profil bearbeitet!",
            variant: "success",
            solid: true,
          }
        );
      }
    },
  },
};
</script>
