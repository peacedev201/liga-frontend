<template>
  <div v-if="any" class="w-100 alert alert-danger">
    <ul>
      <li v-for="(error, index) in all" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["$validator"],

  computed: {
    any() {
      return this.errors.any();
    },

    all() {
      return this.errors.all();
    },
  },
};
</script>