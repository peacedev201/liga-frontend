<template>
  <div class="container-fluid">
    <guest-header />
    <nuxt />
  </div>
</template>

<script>
import GuestHeader from "@/components/GuestHeader";

export default {
  components: {
    GuestHeader,
  },
};
</script>
