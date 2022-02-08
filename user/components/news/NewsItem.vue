<template>
  <div class="lsh_news__list__item">
    <div class="lsh_news__list__item__image">
      <img :src="item.picture" alt="news-image" />
    </div>
    <div class="lsh_news__list__item__content">
      <div class="lsh_news__list__item__content__title">
        <nuxt-link :to="{ name: 'news-slug', params: { slug: item.id } }">
          <h3>{{ item.title }}</h3>
        </nuxt-link>
        <span class="badge badge--date">
          <span>
            {{ date.format("DD") }}.{{ date.format("MM") }}<br />
            {{ date.format("YYYY") }}
          </span>
        </span>
      </div>
      <div class="lsh_news__list__item__content__excerpt">
        <p style="font-size: 12px;">{{ item.description }}</p>
        <nuxt-link class="lsh_btn lsh_btn--primary-small lsh_btn--round" :to="{ name: 'news-slug', params: { slug: item.id } }">
          Mehr lesen
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    date() {
      return this.$moment.utc(this.item.created_at).local();
    },
  },
};
</script>
