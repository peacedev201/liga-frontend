<template>
  <div class="w-100">
    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding"
    >
      <div class="row">
        <div class="col-12">
          <Ads :ads="ad" />
        </div>
      </div>
    </div>

    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding"
    >
      <div class="row">
        <div class="col-12">
          <ImageSlider :slides="logoSlider" />
        </div>
      </div>
    </div>

    <footer class="container-fluid">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <img src="~/assets/images/logo/main.png" alt="liga-sh-logo" />
            </div>
            <div class="col-8">
              <ul class="lsh__footer-menu">
                <li>
                  <nuxt-link :to="{name: 'press'}">Presse</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'imprint'}">Impressum</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name: 'privacy'}">Datenschutz</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ad: {
        link: "https://dfb-efootball.de/",
        image: "/images/demo/ad_2.jpg",
      },
      logoSlider: [
        {
          link: "http://www.torwaerts.com/",
          image: "/images/sponsors/Sponsor-Logo-1.png",
        },
        {
          link: "https://mienjung.de/",
          image: "/images/demo/logos/logo2.png",
        },
        {
          link: "https://www.shfv-kiel.de/",
          image: "/images/demo/logos/SHFV-Logo.png",
        },
      ],
    };
  },
};
</script>
