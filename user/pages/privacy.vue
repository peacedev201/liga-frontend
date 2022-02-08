<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding">
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <h1>Datenschutzerklärung</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar text--white" style="background-color: #142034;">
            <br/>
            <p>
              Bei einem Aufruf dieser Webseite www.liga.sh werden personenbezogene Daten ("Daten") von den Besuchern erhoben und verarbeitet.
            </p>

            <p>
              Die Datenschutzerklärung erstreckt sich auch auf die Social-Media-Profile auf www.instagram.de, www.facebook.de und www.twitter.de. Die gemäss Artikel 13 der Datenschutz-Grundverordnung ("DS-GVO") zur Verfügung zu stellenden Informationen sind Folgende:
            </p>

            <p>
              1. Verantwortliche für die Datenverarbeitung<br>
              mienjung GmbH<br>
              Vertreten durch den Geschäftsführer Martin Freese<br>
              Friesische Straße 62, 24937 Flensburg<br>
              Telefon: 0461-4068 750<br>
              E-Mail: info@mienjung.de (bitte im Betreff "Datenschutz" angeben)<br>
            </p>

            <p>
              2. Zwecke der Datenverarbeitung und Rechtsgrundlage<br>
              Die Daten werden zu dem Zweck erhoben und verarbeitet, damit die Betroffenen sich zur Teilnahme an eFootball-Wettbewerben anmelden können. Sofern der Betroffene angegeben hat, dass er ggf. Mitglied in einem Verein sein möchte, werden die Daten zu diesem Zweck verarbeitet. Sofern der Betroffene den Newsletter abonniert hat, werden die Daten zur Versendung des Newsletters verarbeitet. Die einschlägigen Rechtsgrundlagen ergeben sich aus Artikel 6 Abs. 1 lit. a) und lit. b) der DS-GVO.
            </p>

            <p>
              3. Einwilligung der Träger der elterlichen Verantwortung für Betroffene unter 16 Jahren<br>
              Sind die Betroffenen unter 16 Jahre alt, müssen die Träger der elterlichen Verantwortung der Datenverarbeitung zustimmen. Dies erfolgt durch ein aktives Setzen eines Häkchens während der Registrierung.
            </p>

            <p>
              4. Die Empfänger bzw. Kategorien von Empfängern der Daten<br>
              Zu den Kategorien der Empfänger der Daten gehört der jeweilige Host dieser Webseite. Eine weitere Kategorie der Empfänger der Daten bilden Verbände und Vereine im Fußball sowie Betreiber von Analysetools.
            </p>

            <p>
              5. Speicherdauer<br>
              Die Speicherdauer der Daten kann im Vorhinein nicht genau bestimmt werden.<br>
              Die Speicherdauer ergibt sich anhand der folgenden Kriterien: Die Daten der Betroffenen werden für diejenige Dauer gespeichert, die für eine ordnungsgemäße Erfüllung der vertraglichen Beziehungen zwischen der Verantwortlichen und dem Betroffenen erforderlich ist (Zweckerreichung).
            </p>

            <p>
              6. Rechte der Betroffenen<br>
              Die Betroffenen haben das Recht auf Auskunft über ihre Daten, auf Berichtigung, Löschung (in gewissen Umfang), Einschränkung der Verarbeitung und Datenübertragbarkeit sowie ein Widerspruchsrecht gegen die Verarbeitung. Zusätzlich besteht ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Unabhängiges Landeszentrum für Datenschutz in S.-H., www.datenschutzzentrum.de). Soweit die Datenverarbeitung auf der Einwilligung des Betroffenen beruht, besteht das Recht, die Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
            </p>

            <p>
              7. Keine Pflicht der Datenbereitstellung<br>
              Der Betroffene unterliegt keiner Pflicht, Daten bereitzustellen. Würden die für die vertragliche Beziehung zwischen der Verantwortlichen und dem Betroffenen erforderlichen Daten jedoch nicht bereitgestellt, käme nach den Regelungen des Zivilrechts kein Vertrag zustande.
            </p>

            <p>Stand: Dezember 2020</p>

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
