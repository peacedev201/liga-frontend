<template>
  <div
    class="lsh_liga-table"
    :class="{ 'lsh_liga-table--bg-light': matchplan.data.length !== 0 }"
  >
    <RingLoader v-show="matchplan.data.length === 0" :center="true" />
    <table v-if="matchplan.data.length !== 0">
      <thead>
      <th v-for="(th, i) in matchplan.header" :key="i">{{ th.label }}</th>
      </thead>
      <tbody>
      <tr v-for="(entry, i) in matchplan.data" :key="i">
        <td>{{ i + 1 }}</td>
        <td>
          <nuxt-link
            :to="{
                        name: 'member-player-id',
                        params: { id: entry.id },
                      }"
            class="lsh_table__link font-weight-bold"
          >
            {{ entry.full_name }}
          </nuxt-link>
        </td>
        <td>{{ entry.win_games }}</td>
        <td>{{ entry.lost_games }}</td>
        <td>{{ entry.points }}</td>
      </tr>
      </tbody>
    </table>
    <!--<a v-if="matchplan.data.length !== 0" href="#" class="lsh_btn lsh_btn--primary lsh_btn--round disabled">
      <span>Ganze Tabelle</span>
      <i class="fal fa-chevron-right"></i>
    </a>-->
  </div>
</template>

<script>
export default {
  props: {
    matchplan: {
      type: Object,
    },
  },
};
</script>
