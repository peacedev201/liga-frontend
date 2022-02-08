<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Add News</h3>
        <router-link :to="{ name: 'news' }" class="float-right">
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
              label="Title"
              :state="errors.has('title') ? false : null"
              label-for="title"
              :invalid-feedback="errors.first('title')"
              label-align-sm="right"
            >
              <b-form-input
                id="title"
                v-model="data.title"
                v-validate="'required|max:190'"
                placeholder="Type title here"
                data-vv-name="title"
                :state="errors.has('title') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Description"
              :state="errors.has('description') ? false : null"
              label-for="description"
              :invalid-feedback="errors.first('description')"
              label-align-sm="right"
            >
              <b-form-input
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
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Content"
              :state="errors.has('content') ? false : null"
              label-for="content"
              :invalid-feedback="errors.first('content')"
              label-align-sm="right"
            >
              <vue-editor
                id="content"
                v-model="data.content"
                v-validate="'required'"
                placeholder="Type content here"
                data-vv-name="content"
                data-vv-as="content"
                :state="errors.has('content') ? false : null"
                :editor-toolbar="customToolbar"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Image"
              :state="errors.has('image') ? false : null"
              label-for="image"
              :invalid-feedback="errors.first('image')"
              label-align-sm="right"
            >
              <b-form-file
                id="image"
                v-model="data.image"
                v-validate="'image'"
                placeholder="Type image here"
                data-vv-name="image"
                :state="errors.has('image') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group
              label-cols-sm="4"
              label-cols-lg="3"
              label="Content Image"
              :state="errors.has('content_image') ? false : null"
              label-for="content_image"
              :invalid-feedback="errors.first('content_image')"
              label-align-sm="right"
            >
              <b-form-file
                id="content_image"
                v-model="data.content_image"
                v-validate="'image'"
                placeholder="Type content image here"
                data-vv-name="content_image"
                data-vv-as="content image"
                :state="errors.has('content_image') ? false : null"
              />
            </b-form-group>
          </b-col>
          <b-col md="8" offset-md="2">
            <b-form-group label-cols-sm="4" label-cols-lg="3">
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

  async asyncData({ $axios, params }) {
    const data = await $axios.$get(`news/${params.id}`);
    return { data: data.data };
  },

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
          let formData = new FormData();
          for (var key in this.data) {
            formData.append(key, this.data[key]);
          }
          formData.append("_method", "put");
          this.$axios({
            method: "post",
            url: `news/${this.data.id}`,
            data: formData,
          }).then(({ data }) => {
            if (data.status.success) {
              this.$root.$bvToast.toast("News has been update successfully.", {
                title: "Update",
                variant: "success",
                solid: true,
              });
              this.$router.push({ name: "news" });
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