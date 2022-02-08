<template>
  <div class="row lsh_match-list">
    <RingLoader v-show="matches.length === 0" />
    <MatchBox
      :useCols="useCols"
      :key="match.id"
      v-for="match in matches"
      :match="match"
    />
  </div>
</template>

<script>
export default {
  props: {
    matches: {
      type: Array,
    },
    useCols: {
      type: Boolean,
    },
  },
};
</script>
