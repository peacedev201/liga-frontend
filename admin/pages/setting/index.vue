<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Settings</h3>
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
          <template v-slot:cell(value)="row">
            <template v-if="row.item.value">{{
              row.item.value | truncate
            }}</template>
            <template v-else>-</template>
          </template>
          <template v-slot:cell(actions)="row">
            <router-link
              :to="{ name: `setting-id`, params: { id: row.item.id } }"
            >
              <b-button variant="warning" size="sm">
                <i class="mdi mdi-pencil"></i>
              </b-button>
            </router-link>
          </template>
        </b-table>
        <div class="d-flex justify-content-end">
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
    const { data } = await $axios.get("setting");
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
          key: "name",
          class: "text-center",
        },
        {
          key: "value",
          class: "text-center",
        },
        {
          key: "actions",
          class: "text-center",
        },
      ],
    };
  },
};
</script>