<template>
  <div class="p-dashboard-body">
    <div class="container admin-dashboard">
      <div class="heading">
        <h3 class="d-inline-block">Tournaments</h3>
        <nuxt-link :to="{ name: `tournament-create` }" class="float-right">
          <button class="table-btn btn">Add</button>
        </nuxt-link>
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
          <template v-slot:cell(status)="row">
            <b-badge :variant="statusVariant(row.item.status)">{{
              row.item.status
            }}</b-badge>
          </template>
          <template v-slot:cell(only_for_clubs)="{ item }">
            {{ item.only_for_clubs ? "Yes" : "No" }}
          </template>
          <template v-slot:cell(actions)="row">
            <b-button
              v-if="row.item.status == 'started'"
              variant="success"
              v-b-tooltip.hover
              title="Complete"
              @click="complete(row.item.id)"
              size="sm"
            >
              <i class="mdi mdi-check"></i>
            </b-button>
            <b-button
              v-if="row.item.status == 'started'"
              variant="warning"
              v-b-tooltip.hover
              title="Schedule"
              @click="schedule(row.item.id)"
              size="sm"
            >
              <i class="mdi mdi-clock-start"></i>
            </b-button>
            <b-button
              v-if="
                row.item.status == 'scheduled' || row.item.status == 'completed'
              "
              variant="info"
              v-b-tooltip.hover
              title="Start"
              @click="start(row.item.id)"
              size="sm"
            >
              <i class="mdi mdi-clock-start"></i>
            </b-button>
            <nuxt-link
              v-if="
                row.item.status == 'started' ||
                row.item.status == 'scheduled' ||
                row.item.status == 'completed' ||
                row.item.status == 'rounded'
              "
              :to="{
                name: 'tournament-id-plan',
                params: { id: row.item.id },
              }"
            >
              <b-button
                v-b-tooltip.hover
                title="Game Plan"
                variant="warning"
                size="sm"
              >
                <i class="mdi mdi-tournament"></i>
              </b-button>
            </nuxt-link>
            <nuxt-link
              v-if="row.item.status == 'closed' || row.item.status == 'rounded'"
              :to="{ name: 'tournament-id-round', params: { id: row.item.id } }"
            >
              <b-button
                v-b-tooltip.hover
                title="Make Round"
                variant="info"
                size="sm"
              >
                <i class="mdi mdi-account-multiple"></i>
              </b-button>
            </nuxt-link>
            <nuxt-link
              v-if="
                row.item.status == 'drafted' ||
                row.item.status == 'opened' ||
                row.item.status == 'closed'
              "
              :to="{ name: 'tournament-id', params: { id: row.item.id } }"
            >
              <b-button
                v-b-tooltip.hover
                title="Edit"
                variant="warning"
                size="sm"
              >
                <i class="mdi mdi-pencil"></i>
              </b-button>
            </nuxt-link>
            <b-button
              v-b-tooltip.hover
              title="Delete"
              variant="danger"
              @click="remove(row.item.id)"
              size="sm"
            >
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
    const { data } = await $axios.get("tournament");
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
      pagination: {
        chunks: [],
      },
      fields: [
        {
          key: "name",
          label: "Name",
          class: "text-center",
        },
        {
          key: "total_slots",
          class: "text-center",
        },
        {
          key: "only_for_clubs",
          class: "text-center",
        },
        {
          key: "registration_end_date_time",
          class: "text-center",
        },
        {
          key: "status",
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
    statusVariant(status) {
      let variant = "primary";
      switch (status) {
        case "drafted":
          variant = "info";
          break;
        case "opened":
          variant = "success";
          break;
        case "closed":
          variant = "danger";
          break;
        case "rounded":
          variant = "danger";
          break;
        case "scheduled":
          variant = "warning";
          break;
        case "started":
          variant = "info";
          break;
        case "completed":
          variant = "success";
          break;
      }
      return variant;
    },

    start(id) {
      this.$bvModal
        .msgBoxConfirm("You want to start the tournament!", {
          title: "Are you sure?",
          size: "sm",
          okTitle: "Yes",
          cancelTitle: "No",
          buttonSize: "sm",
          okVariant: "info",
          centered: true,
        })
        .then((value) => {
          if (value) {
            let index = this.items.findIndex((x) => x.id == id);
            if (index !== -1) {
              let current = this.pagination.currentPage - 1;
              this.$set(
                this.pagination.chunks[current][index],
                "status",
                "started"
              );
              this.$axios.post(`tournament/start/${id}`);
            }
          }
        });
    },

    complete(id) {
      this.$bvModal
        .msgBoxConfirm("You want to complete the tournament!", {
          title: "Are you sure?",
          size: "sm",
          okTitle: "Yes",
          cancelTitle: "No",
          buttonSize: "sm",
          okVariant: "info",
          centered: true,
        })
        .then((value) => {
          if (value) {
            let index = this.items.findIndex((x) => x.id == id);
            if (index !== -1) {
              let current = this.pagination.currentPage - 1;
              this.$set(
                this.pagination.chunks[current][index],
                "status",
                "completed"
              );
              this.$axios.post(`tournament/complete/${id}`);
            }
          }
        });
    },

    schedule(id) {
      this.$bvModal
        .msgBoxConfirm("You want to schedule the tournament!", {
          title: "Are you sure?",
          size: "sm",
          okTitle: "Yes",
          cancelTitle: "No",
          buttonSize: "sm",
          okVariant: "info",
          centered: true,
        })
        .then((value) => {
          if (value) {
            let index = this.items.findIndex((x) => x.id == id);
            if (index !== -1) {
              let current = this.pagination.currentPage - 1;
              this.$set(
                this.pagination.chunks[current][index],
                "status",
                "scheduled"
              );
              this.$axios.post(`tournament/schedule/${id}`);
            }
          }
        });
    },

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
            this.$axios.delete(`tournament/${id}`, {
              loading: false,
            });
          }
        });
    },
  },
};
</script>