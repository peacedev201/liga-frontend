<template>
  <div class="container-fluid">
    <div v-if="heroSlider.length !== 0" class="row">
      <HeroSlider :slides="heroSlider" />
    </div>
    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
    >
      <div class="row">
        <div class="container lsh_section lsh_section--small">
          <MatchList :useCols="true" :matches="matches" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-8">
          <NewsList
            :news="news.items"
            :total="news.total"
            :loading="news.loading"
            :perPage="news.perPage"
            :currentPage="news.currentPage"
            @current-page-changed="fetchNews"
          />
        </div>
        <div class="col-12 col-lg-4 lsh_sidebar">
          <div class="lsh_sidebar__item">
            <h2
              class="lsh_title lsh--secondary-bg lsh--primary-accent-border-bottom lsh_title--no-margin-bottom font-weight-bold"
            >
              Saison {{ new Date().getFullYear() }}
            </h2>
            <MatchPlan :matchplan="matchplan" />
          </div>
          <div
            style="margin-bottom: 0px !important"
            class="lsh_match-list lsh_sidebar__item"
          >
            <h2
              class="lsh_title lsh--secondary-bg lsh--primary-accent-border-bottom lsh_title--no-margin-bottom font-weight-bold"
            >
              Nächstes Turnier
            </h2>
            <!--<MatchList :useCols="false" :matches="matches.upcoming" />-->
          </div>
          <div class="lsh_sidebar__item">
            <Ads :ads="ads.sidebar" />
          </div>
        </div>
      </div>
      <div class="row">
        <!--<div class="col-12">
          <Highlight
            :image="highlights.image"
            :caption="highlights.caption"
            :link="highlights.link"
          />
        </div>-->
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
      news: {
        items: [
          {
            "id": "8",
            "date": "12.02.2021",
            "title": "Wir starten in die Saison 2021",
            "picture": "/images/news/thumbnails/Weekend-Cup-Detail-Modus.jpg",
            "slug": "/news/",
            "description": "Mit dem Weekend Cup #1 starten wir auf der PlayStation und Xbox in den ersten Cup der Saison 2021."
          },
          {
            "id": "7",
            "date": "01.02.2020",
            "title": "Die Sieger der Landesverbands-Trophy 2021 stehen fest!",
            "picture": "/images/news/thumbnails/news-trophy.jpg",
            "slug": "/news/",
            "description": "Auf der Playstation konnte sich der TSV Nordhastedt e.V. mit einem 3 zu 1 gegen den SV Henstedt-Ulzberg e.V. durchsetzen und sich den Titel sichern!"
          },
          {
            "id": "3",
            "date": "20.07.2020",
            "title": "Du bist neu auf Liga.sh? So kannst du direkt loslegen!",
            "picture": "/images/demo/news/news-2.jpg",
            "slug": "/news/",
            "description": "Liga.sh ist die Plattform für alle eFootball-Fans in Schleswig-Holstein. Mitzumachen ist ganz einfach und unkompliziert."
          },
          {
            "id": "4",
            "date": "20.07.2020",
            "title": "Discord-Server: Die Schaltzentrale von Liga.sh",
            "picture": "/images/demo/news/news-3.jpg",
            "slug": "/news/",
            "description": "Liga.sh verfügt über einen eigenen Discord-Server. Diesem kannst du beitreten, sobald wir ein Turnier zur Anmeldung öffnen. Einmal dem Server beigetreten, kannst du deinen Namen auswählen und über die unterschiedlichen Channel..."
          }
        ],
        total: 4,
        perPage: 4,
        currentPage: 1,
        loading: true,
      },
      matches: [],
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
      heroSlider: [
        {
          headline: "Wir starten in die Saison 2021",
          subline: "Mit dem Weekend Cup #1 starten wir auf der PlayStation und Xbox in den ersten Cup der Saison 2021",
          link: "/news/8",
          linkText: "Jetzt Ansehen",
          image: "/images/news/header/Liga-sh-Weekend-Cup-Header.png",
        },
        {
          headline:
            "Erste eFootball-Plattform in Schleswig-Holstein öffnet die Pforten",
          subline: "Liga.sh nimmt den Betrieb auf",
          link: "/news/1",
          linkText: "Jetzt Ansehen",
          image: "/images/demo/header-demo-banner2.png",
        },
      ],
      highlights: {
        link: "#",
        caption: "Liga.sh Highlights",
        image: "/images/demo/FIFA_Banner.png",
      },
      ads: {
        sidebar: {
          link: "/tournament",
          image: "/images/Weekend-Cup-Detail-Modus.jpg",
          blank: false,
        },
      },
    };
  },

  mounted() {
    //this.fetchNews();
    this.$cookiebot.consentBanner();
    this.$set(this.news, "loading", false);
    this.fetchLatestFourGames();
    this.fetchBestFivePlayers();
  },

  methods: {
    async fetchNews(page = 1) {
      console.log(page);
      this.$set(this.news, "loading", true);
      const { data } = await this.$axios({
        url: "data/news",
        params: {
          perPage: this.news.perPage,
          page,
        },
      });
      if (data.status.success) {
        this.$set(this.news, "items", data.data);
        this.$set(this.news, "currentPage", data.meta.current_page);
        this.$set(this.news, "total", data.meta.total);
      }
      this.$set(this.news, "loading", false);
    },

    fetchLatestFourGames() {
      this.$axios({
        url: "data/latestfourgames",
      }).then(({ data: { data } }) => (this.matches = data));
    },

    fetchBestFivePlayers() {
      this.$axios({
        url: "data/bestfiveplayers",
      }).then(({ data: { data } }) => this.$set(this.matchplan, 'data', data));
    },
  },
};
</script>
