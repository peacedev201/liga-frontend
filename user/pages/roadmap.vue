<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding">
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <h1>Roadmap</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <FeaturedImage :featured-image="'/images/demo/content/default-header.png'" :display-title="true" :title="'Roadmap'"/>
          <div class="container">
            <div class="lsh_section lsh_section--page lsh_section--roadmap">
              <div class="row">
                <div class="col-12 py-xl-5 py-sm-0">
                  <div class="lsh_roadmap">

                    <h3 class="text--white text--thin pt-xl-5 pt-sm-0 py-xl-5 py-sm-0">Wir haben eine Menge für die Zukunft geplant - auf dieser Seite findet Ihr unsere aktuelle Roadmap. </h3>

                    <div class="lsh_section lsh_section--small">
                      <div class="row">
                        <div v-for="(update, i) in roadmap" :key="i" class="col-12 col-sm-6 col-md-4 col-xl-3 lsh_roadmap__item">
                          <div  class="lsh_roadmap__item-wrap" >
                            <h4 class="text--center text--white" v-html="update.title"></h4>
                            <span class="lsh_roadmap__date-arrow " :class="update.class">{{update.date}}</span>
                            <p class="text--white" v-html="update.text"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="lsh_section lsh_section--small  lsh_section--no-bottom-padding lsh_section--no-top-padding">
                      <div class="row">
                        <div class="col-12 col-lg-8">
                          <div class="lsh_content lsh_content--secondary-bg">
                            <h2>
                              Roadmap –Was ist das?
                            </h2>
                            <p style="color: white!important; font-size: 14px;">
                              Bei Liga.sh gibt es in regelmäßigen Abständen spannende neue Inhalte für Spieler und Vereine. Auf  unserer  Roadmap  könnt  ihr  genau  sehen,  wann  etwas  Neues  erscheinen  wird.  Dabei beschreiben  wir  kommende  Inhalte  nicht  nur,  sondern  wir  zeigen  euch  auch  genau  den zeitlichen Ablauf.
                            </p>
                            <p class="text--white" style="margin-bottom: unset!important; color: white!important; font-size: 14px;">
                              Alles  verraten  wir  aber  nicht.  Bei  weit  in  der  Zukunft  liegenden  Verbesserungen  und Zusatzinhalten seht ihr zwar, dass etwas kommt –was kommt bleibt aber erstmal geheim. Schließlich ist nichts schöner als Spannung und Vorfreude.
                            </p>
                          </div>

                        </div>
                        <div class="col-12 col-lg-4">
                          <h2 class="lsh_title lsh--secondary-bg lsh--primary-accent-border-bottom no-margin-bottom">Ansprechpartner</h2>
                          <div class="lsh_content lsh_content--white-bg">
                            <div class="lsh_contact-person" style="height: 100%!important;">
                              <div class="lsh_contact-person__name">
                                <h5>Fabian</h5>
                                <h6>Projektmanager</h6>
                              </div>
                              <div class="lsh_contact-person__image">
                                <img src="/images/roadmap/Fabian-500px.jpg" alt="profile-picture" />
                              </div>
                            </div>
                            <a href="mailto:info@liga.sh" class="lsh_btn lsh_btn--primary lsh_btn--round lsh_btn--block">Jetzt Kontakt aufnehmen!</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
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
    return {
      roadmap: [
        {
          "title": "Kleines <br> Update",
          "date": "01/21",
          "class": "lsh_roadmap__date-arrow--secondary-accent",
          "text": "<p>- Roadmap Seite veröffentlicht<br>" +
            "- Presse Seite veröffentlicht<br>" +
            "- FAQ Seite veröffentlicht<br>" +
            "- Optimierung verschiedener Funktionen<br>" +
            "- Kleinere Fehler behoben</p>"
        },
        {
          "title": "Großes <br> Update",
          "date": "02/21",
          "class": "lsh_roadmap__date-arrow--primary-accent",
          "text": "<p>- Freundesliste<br>" +
            "- Freunschaftsanfragen<br>" +
            "- On-/Offline Symbol<br>" +
            "- Chat für Freunde<br>" +
            "- Chat für Turniere<br>" +
            "- Livechat Support<br>" +
            "- Adminsystem</p>"
        },
        {
          "title": "Kleines <br> Update",
          "date": "03/21",
          "class": "lsh_roadmap__date-arrow--secondary-accent",
          "text": "<p>- Anpassung der Weboberfläche<br>" +
            "- Anpassung des Spielerprofils<br>" +
            "- Service updates</p>" +
            "<p>Weitere Informationen findest du auf der News Seite</p>"
        },
        {
          "title": "Großes <br> Update",
          "date": "-",
          "class": "lsh_roadmap__date-arrow--disabled-accent",
          "text": ""
        }
      ]
    }
  },

  mounted() {
    this.$cookiebot.consentBanner()
  },

  methods: {},

};
</script>
