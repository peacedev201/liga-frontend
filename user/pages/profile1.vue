<template>
  <div class="container">
    <HeroHeading heading="Spielerprofil" />

    <Profile />

    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding"
    >
      <div class="row">
        <div class="col-12">
          <Ads :ads="ad" />
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
    return {
      ad: {
        link: "#",
        image: "/images/demo/ad_2.jpg",
      },
      matches: {
        completed: [],
        upcoming: [],
        next: {},
      },
      news: [],
      matchplan: {
        data: [],
        header: [
          { label: "" },
          { label: "SPIELER" },
          { label: "S" },
          { label: "N" },
          { label: "P" },
        ],
      },
      heroSlider: [],
      logoSlider: [],
      highlights: {},
    };
  },
  computed: {},
  methods: {
    loadMatches(type = "completed") {
      this.$axios.get(`/matches/${type}`).then((result) => {
        this.matches[type] = result.data.data.matches;
      });
    },
    loadNews() {
      this.$axios.get(`news`).then((result) => {
        this.news = result.data.data.news;
      });
    },
    loadMatchplan() {
      this.$axios.get(`matchplan`).then((result) => {
        this.matchplan.data = result.data.data.matchplan;
      });
    },
    loadSlides() {
      this.$axios.get(`heroSlider`).then((result) => {
        this.heroSlider = result.data.data.slides;
      });
      this.$axios.get(`logoSlider`).then((result) => {
        this.logoSlider = result.data.data.slides;
      });
    },
    loadHighlights() {
      this.$axios.get(`highlights`).then((result) => {
        this.highlights = result.data.data.highlights;
      });
    },
    loadContentAds() {
      this.$axios.get(`ads`).then((result) => {
        this.ads.content = result.data.data.ads.long;
      });
    },
  },
  created: function () {
    this.loadSlides();

    setTimeout(() => {
      this.loadMatches();
    }, 1000);

    setTimeout(() => {
      this.loadMatches("upcoming");
    }, 2000);

    setTimeout(() => {
      this.loadNews();
    }, 3000);

    setTimeout(() => {
      this.loadMatchplan();
    }, 4000);

    setTimeout(() => {
      this.loadHighlights();
    }, 5000);

    setTimeout(() => {
      this.loadSidebarAds();
      this.loadContentAds();
    }, 6000);
  },
};
</script>
