<template>
  <div class="container-fluid">
    <auth-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AuthHeader from "@/components/AuthHeader";
import AppFooter from "@/components/AppFooter";

export default {
  middleware: "auth",

  components: {
    AuthHeader,
    AppFooter,
  },
};
</script>
