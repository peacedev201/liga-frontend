<template>
  <div class="lsh_grass_background">
    <div class="container">
      <HeroHeading heading="E-Mail verifizieren" />

      <div class="lsh_dashboard_main justify-content-center">
        <div class="w-75">
          <h4 class="text-white">
            Bevor du deinen Account nutzen kannst, bitte verifiziere dich über den Link den wir dir per E-Mail geschickt haben.<br>
            Solltest du keine E-Mail erhalten haben, überprüfe bitte deinen Spam-Ordner<br><hr/>
            <!-- <span @click="resend" class="text-primary cursor-pointer"
              >click here to request another</span
            > -->
            <b-spinner
              v-if="$store.state.loading"
              label="Spinning"
              class="mb-1"
              small
            ></b-spinner>
            <span v-else @click="resend" class="text-primary cursor-pointer"
              >E-Mail erneut senden</span
            >
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "guest",

  async middleware({ $axios, $auth, query, redirect }) {
    if ($auth.user.has_verified_email) {
      return redirect({ path: process.env.REDIRECT_AFTER_LOGIN });
    } else {
      const { key, secret } = query;
      if (key && secret) {
        const { data } = await $axios({
          method: "post",
          url: "email/verify",
          data: { key, secret },
        });
        if (data.status.success) {
          $auth.setUser(data.data);
          return redirect({ path: process.env.REDIRECT_AFTER_LOGIN });
        }
      }
    }
  },

  methods: {
    async resend() {
      const { data } = await this.$axios({
        method: "post",
        url: "email/resend",
      });
      if (data.status.success) {
        if (data.data) {
          this.$auth.setUser(data.data);
          this.$router.push({ path: process.env.REDIRECT_AFTER_LOGIN });
        } else {
          this.$root.$bvToast.toast(
            "Ein neuer Verifizierungslinks wurde erneut an ihre E-Mail Adresse gesendet.",
            {
              title: "Link zugeschickt",
              variant: "success",
              solid: true,
            }
          );
        }
      }
    },
  },
};
</script>
