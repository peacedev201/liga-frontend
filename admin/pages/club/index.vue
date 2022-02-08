<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Clubs</h3>
      </div>
      <hr />
      <div class="table-section">
        <b-table
          :per-page="10"
          class="mt-2"
          striped
          hover
          :items="items"
          :fields="fields"
        >
          <template v-slot:cell(created_at)="row">
            <timeago
              :datetime="$moment.utc(row.item.created_at)"
              :auto-update="60"
            ></timeago>
          </template>
          <template v-slot:cell(actions)="row">
            <nuxt-link :to="{ name: 'club-id', params: { id: row.item.id } }">
              <b-button variant="info" size="sm">
                <i class="mdi mdi-eye"></i>
              </b-button>
            </nuxt-link>
            <b-button variant="danger" @click="remove(row.item.id)" size="sm">
              <i class="mdi mdi-delete"></i>
            </b-button>
          </template>
        </b-table>

        <div
          v-if="pagination.totalRows < 1"
          class="d-flex justify-content-center"
        >
          <h2>No Record Found</h2>
        </div>

        <div
          v-if="pagination.totalRows > pagination.perPage"
          class="d-flex justify-content-end"
        >
          <b-pagination
            v-model="pagination.currentPage"
            :total-rows="pagination.totalRows"
            :per-page="pagination.perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get("club");
    if (data.status.success) {
      let pagination = {
        currentPage: 1,
        totalRows: 0,
        perPage: 10,
      };
      pagination.totalRows = data.data.length;
      pagination.chunks = _.chunk(data.data, pagination.perPage);
      return { pagination: pagination };
    }
  },

  computed: {
    items() {
      return this.pagination.chunks[this.pagination.currentPage - 1];
    },
  },

  layout: "auth",

  data() {
    return {
      pagination: {},
      fields: [
        {
          key: "profile.name",
          label: "Name",
          class: "text-center",
        },
        {
          key: "email",
          class: "text-center",
        },
        {
          key: "created_at",
          class: "text-center",
        },
        {
          key: "actions",
          class: "text-center",
        },
      ],
    };
  },

  methods: {
    remove(id) {
      this.$bvModal
        .msgBoxConfirm("You won't be able to revert this!", {
          title: "Are you sure?",
          size: "sm",
          okTitle: "Yes",
          cancelTitle: "No",
          buttonSize: "sm",
          okVariant: "danger",
          centered: true,
        })
        .then((value) => {
          if (value) {
            let index = this.items.findIndex((x) => x.id == id);
            if (index !== -1) {
              let current = this.pagination.currentPage - 1;
              this.pagination.chunks[current].splice(index, 1);
            }
            this.$axios
              .delete(`club/${id}`, {
                loading: false,
              })
          }
        });
    },
  },
};
</script>