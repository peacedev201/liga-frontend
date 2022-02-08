<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">{{ club.profile.name }} Members</h3>
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
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`club/${params.id}`);
    if (data.status.success) {
      let pagination = {
        currentPage: 1,
        totalRows: 0,
        perPage: 10,
      };
      let members = data.data.profile.members;
      pagination.totalRows = members.length;
      pagination.chunks = _.chunk(members, pagination.perPage);
      return { pagination, club: data.data };
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
          key: "player.full_name",
          label: "Name",
          class: "text-center",
        },
        {
          key: "player.country",
          label: "Country",
          class: "text-center",
        },
        {
          key: "created_at",
          class: "text-center",
        },
      ],
    };
  },
};
</script>