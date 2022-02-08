<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Update {{ data.name }}</h3>
        <router-link :to="{ name: 'setting' }" class="float-right">
          <button class="table-btn btn">Back</button>
        </router-link>
      </div>
      <hr />
      <div class="table-section">
        <b-form @submit.prevent="formSubmit">
          <b-col md="8" offset-md="2">
            <b-form-group
              label="Value"
              :state="errors.has('value') ? false : null"
              label-for="value"
              :invalid-feedback="errors.first('value')"
            >
              <b-form-input
                v-if="data.type == 'number'"
                id="value"
                v-model="data.value"
                v-validate="'required|numeric|max:190'"
                placeholder="Type value here"
                data-vv-name="value"
                data-vv-as="value"
                :state="errors.has('value') ? false : null"
              />
              <b-form-input
                v-if="data.type == 'email'"
                id="value"
                v-model="data.value"
                v-validate="'required|email|max:190'"
                placeholder="Type value here"
                data-vv-name="value"
                data-vv-as="value"
                :state="errors.has('value') ? false : null"
              />
              <vue-editor
                v-if="data.type == 'editor'"
                id="value"
                v-model="data.value"
                v-validate="'required'"
                placeholder="Type value here"
                data-vv-name="value"
                data-vv-as="value"
                :state="errors.has('value') ? false : null"
                :editor-toolbar="customToolbar"
              />
            </b-form-group>
          </b-col>
          <b-col md="8">
            <b-form-group label-cols-md="4" label-cols-lg="3">
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
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`setting/${params.id}`);
    if (data.status.success) {
      return { data: data.data };
    }
  },

  layout: "auth",

  mixins: [formMixin],

  data() {
    return {
      data: {},
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        ["link"],
        ["clean"],
      ],
    };
  },

  methods: {
    formSubmit() {
      this.$validator.validate().then(async (result) => {
        if (result) {
          this.$axios({
            method: "put",
            url: `setting/${this.data.id}`,
            data: this.data,
          })
            .then(({ data }) => {
              if (data.status.success) {
                this.$root.$bvToast.toast(
                  "Setting has been updated successfully.",
                  {
                    title: "Updated",
                    variant: "success",
                    solid: true,
                  }
                );
                this.$router.push({ name: "setting" });
              }
            })
        } else {
          this.$store.dispatch("dataErrorToast", this);
        }
      });
    },
  },
};
</script>