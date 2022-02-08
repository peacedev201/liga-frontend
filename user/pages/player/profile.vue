<template>
  <div class="lsh_grass_background">
    <div class="container">
      <div
        class="hero-heading d-flex align-item-center justify-content-between"
      >
        <h1 class="d-inline-block">Spielerprofil</h1>
        <b-button
          v-b-modal.update_profile
          variant="primary"
          class="my-4 text--white"
          >Profil bearbeiten</b-button
        >
      </div>

      <Profile :player="player" :friends="friends" :requests="requests" :type="'owner'" />

      <b-modal
        @ok.prevent="formSubmit"
        id="update_profile"
        title="Profil bearbeiten"
      >
        <template slot="modal-cancel">
          <div
            v-if="$store.state.loading"
            class="d-flex align-items-center justify-content-center"
          >
            <b-spinner variant="white" small />
            <span class="ml-2">Bitte warten</span>
          </div>
          <template v-else>Abbrechen</template>
        </template>
        <template slot="modal-ok">
          <div
            v-if="$store.state.loading"
            class="d-flex align-items-center justify-content-center"
          >
            <b-spinner variant="white" small />
            <span class="ml-2">Bitte warten</span>
          </div>
          <template v-else>Speichern</template>
        </template>
        <b-form class="w-75" @submit.prevent="formSubmit">
          <b-form-row>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('first_name') ? false : null"
                label="Vorname"
                label-for="first_name"
                :invalid-feedback="errors.first('first_name')"
              >
                <b-form-input
                  id="first_name"
                  v-model="data.first_name"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="first_name"
                  data-vv-as="first name"
                  :state="errors.has('first_name') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('last_name') ? false : null"
                label="Nachname"
                label-for="last_name"
                :invalid-feedback="errors.first('last_name')"
              >
                <b-form-input
                  id="last_name"
                  v-model="data.last_name"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="last_name"
                  data-vv-as="last name"
                  :state="errors.has('last_name') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('nick_name') ? false : null"
                label="Nickname"
                label-for="nick_name"
                :invalid-feedback="errors.first('nick_name')"
              >
                <b-form-input
                  id="nick_name"
                  v-model="data.nick_name"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="nick_name"
                  data-vv-as="nick name"
                  :state="errors.has('nick_name') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('street') ? false : null"
                label="Strasse"
                label-for="street"
                :invalid-feedback="errors.first('street')"
              >
                <b-form-input
                  id="street"
                  v-model="data.street"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="street"
                  data-vv-as="street"
                  :state="errors.has('street') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('postal_code') ? false : null"
                label="Postleitzahl"
                label-for="Postal_code"
                :invalid-feedback="errors.first('postal_code')"
              >
                <b-form-input
                  id="postal_code"
                  v-model="data.postal_code"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="postal_code"
                  data-vv-as="postal code"
                  :state="errors.has('postal_code') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('city') ? false : null"
                label="Stadt"
                label-for="city"
                :invalid-feedback="errors.first('city')"
              >
                <b-form-input
                  id="city"
                  v-model="data.city"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="city"
                  data-vv-as="city"
                  :state="errors.has('city') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <!--<b-form-group
                :state="errors.has('country') ? false : null"
                label="Land"
                label-for="country"
                :invalid-feedback="errors.first('country')"
              >
                <b-form-select
                  id="country"
                  value-field="text"
                  :options="countries"
                  v-model="data.country"
                  v-validate="'required|max:190'"
                  placeholder=""
                  data-vv-name="country"
                  data-vv-as="country"
                  :state="errors.has('country') ? false : null"
                >
                </b-form-select>
              </b-form-group>-->
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('avatar') ? false : null"
                label="Profilbild"
                label-for="avatar"
                :invalid-feedback="errors.first('avatar')"
              >
                <b-form-file
                  id="avatar"
                  v-model="data.avatar"
                  placeholder=""
                  data-vv-name="avatar"
                  data-vv-as="avatar"
                  :state="errors.has('avatar') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12 pb-0">
              <b-form-group
                :state="errors.has('name_setting') ? false : null"
                label="Anzeigeeinstellungen"
                label-for="name_setting"
                :invalid-feedback="errors.first('name_setting')"
              >
                <b-form-radio-group
                  :options="name_settings"
                  id="name_setting"
                  name="name_setting"
                  v-model="data.setting.name"
                  v-validate="'required'"
                  data-vv-name="name_setting"
                  data-vv-as="name_setting"
                  :state="errors.has('name_setting') ? false : null"
                />
              </b-form-group>
            </div>
            <div class="col-lg-12">
              <!-- <b-button type="submit" class="bg-primary text-white">
                Save
              </b-button> -->
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
      </b-modal>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin";
import countries from "@/assets/json/countries.json";

export default {
  layout: "player",

  async asyncData({ $axios, $auth }) {
    const data = await $axios.$get(`data/player/${$auth.user.profile.id}`);
    const friends = await $axios.$get(`friendlist/${$auth.user.profile.id}`);
    const requests = await $axios.$get(`requestlist/${$auth.user.profile.id}`)
    if (data.status.success) {
      return { player: data.data, friends: friends.data, requests: requests.data };
    }
  },

  mixins: [formMixin],

  data: function () {
    return {
      data: {
        profile: {},
      },
      player: {},
      friends: {},
      countries,
      name_settings: [
        { value: "first_nick", text: "Vorname und Nickname" },
        { value: "last_nick", text: "Nachname und Nickname" },
        { value: "first_last_nick", text: "Vor, Nach und Nickname" },
      ],
    };
  },

  created() {
    let data = { ...this.$auth.user.profile };
    data.setting = { ...this.$auth.user.profile.setting };
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
        if (key == "setting") {
          formData.append("setting[name]", this.data[key].name);
        } else {
          formData.append(key, this.data[key]);
        }
      }
      const { data } = await this.$axios({
        method: "post",
        url: "player/profile",
        data: formData,
      });
      if (data.status.success) {
        let player = { ...this.player, ...data.data.profile };
        this.player = player;
        this.$auth.setUser(data.data);
        this.$root.$bvToast.toast(
          "Du hast dein Profil erfolgreich bearbeitet.",
          {
            title: "Profil bearbeitet!",
            variant: "success",
            solid: true,
          }
        );
        this.$bvModal.hide("update_profile");
      }
    },
  },
};
</script>
