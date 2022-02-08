<template>
  <div class="lsh_news">
    <h2 class="lsh_title lsh--secondary-bg lsh--primary-accent-border-bottom font-weight-bold">
      News
    </h2>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-row :no-gutters="true">
          <b-col
            cols="12"
            v-for="number in 4"
            :key="number"
            class="bg-white mb-3"
          >
            <b-row>
              <b-col class="py-0" cols="4">
                <b-skeleton-img height="180px"></b-skeleton-img>
              </b-col>
              <b-col cols="8">
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
                <b-skeleton width="80%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
                <b-skeleton width="80%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
      <div class="lsh_news__list">
        <NewsItem v-for="(item, index) in news" :key="index" :item="item" />
      </div>
    </b-skeleton-wrapper>
    <b-row>
      <b-col>
        <b-pagination
          v-if="total > perPage"
          :per-page="perPage"
          :total-rows="total"
          :value="currentPage"
          aria-controls="my-table"
          @change="pageChanged"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      require: true,
    },
    loading: {
      type: Boolean,
      require: true,
    },
    currentPage: {
      type: Number,
      require: true,
    },
    perPage: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
  },

  methods: {
    pageChanged(page) {
      console.log("name");
      this.$emit("current-page-changed", page);
    },
  },
};
</script>
