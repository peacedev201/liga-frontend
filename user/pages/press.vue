<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding">
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <h1>Presse</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar text--white" style="background-color: #142034;">
            <br/>
            <h5>Willkommen in unserem Pressebereich, unter folgendem Link können Sie sich unser Press-Kit herunterladen</h5>
            <br>
            <b-button href="/downloads/Presskit.zip" size="sm" variant="primary" class="lsh_btn lsh_btn--primary lsh_btn--round">
              Pressekit herunterladen
              <b-icon class="font-weight-bold" icon="chevron-right" aria-hidden="true"></b-icon>
            </b-button>
            <br>
            <br>
            <p>Wenn Sie Fragen an uns haben, wenden Sie sich bitte per Mail an: <a href="mailto:info@liga.sh">info@liga.sh</a></p>
            <p>Telefonisch erreichen Sie uns unter <a href="tel:+4946140687513">+49 461 406875-13</a> von Montag-Freitag von 09:00 bis 17:00 Uhr.</p>
            <br>
            <p>Wir freuen uns von Ihnen zu hören</p>
            <p>- Das Liga.sh Team</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  auth: false,

  layout: "guest",

  data: function () {
    return {}
  },

  mounted() {
    this.$cookiebot.consentBanner()
  },

  methods: {},

};
</script>
