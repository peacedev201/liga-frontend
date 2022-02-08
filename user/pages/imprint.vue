<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding">
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <h1>Impressum</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 lsh_sidebar text--white" style="background-color: #142034;">
            <br/>
            <h5>1. Angaben gemäss § 5 Telemediengesetz</h5>
            <p>
              mienjung GmbH<br>
              Friesische Straße 62, 24937 Flensburg<br>
              Telefon: 0461 – 4068 750<br>
              E-Mail: info@mienjung.de<br><br>
              Vertretungsberechtigter Geschäftsführer: Martin Freese<br><br>
              Registernummer: HRB 14265 FL<br>
              Registergericht: AG Flensburg<br>
              USt.-ID-Nr.: DE 3323 18665
            </p>

            <h5>2. Angaben gemäß § 18 Medienstaatsvertrag</h5>
            <p>
              Verantwortlich für die journalistisch-redaktionell gestalteten Angebote ist:<br><br>
              Martin Freese<br>
              Friesische Straße 62, 24937 Flensburg<br>
            </p>

            <h5>3. Angaben gemäß Artikel 14 ODR-Verordnung</h5>
            <p>
              Die Plattform der Europäischen Union zur aussergerichtlichen Online-Streitbeilegung ist abrufbar unter: https://ec.europa.eu/consumers/odr/<br>
              Aus praktischen Gründen sind wir grundsätzlich nicht bereit, an einem Verbraucherstreitbeilegungsverfahren teilzunehmen. In Ausnahmefällen behalten wir uns jedoch nach Rücksprache mit dem Verbraucher eine anderweitige Entscheidung vor. In diesen Fällen machen wir in Textform Angaben zu Anschrift und Webseite der Verbraucherschlichtungsstelle.
            </p>

            <h5>4. Angaben gemäß § 312d Abs. 1 BGB iVm. Art. 246a EGBGB</h5>
            <p>
              Die Webseite www.liga.sh bietet unentgeltliche Dienstleitungen im Bereich eFootball an. Die Kontaktdaten des Betreibers der Webseite, die mienjung GmbH, sind unter 1. der Impressumsangaben genannt. Für die Nutzung dieser Webseite fallen keine Kosten an. Die gemäß Art. 246a § 1 Abs. 2 EGBGB erforderliche Widerrufsbelehrung finden Sie als PDF-Download unter diesem <a href="https://efootball.liga.sh/downloads/2020-12-04%20-%20mienjung%20GmbH%20-%20Widerrufsbelehrung_final.pdf" target="_blank">Link</a>.
            </p>

            <h5>5. Angaben gemäß § 2 Dienstleistungs-Informationspflichten-Verordnung (DL-Info-VO)</h5>
            <p>
              Die gesetzlichen Pflichtangaben des § 2 DL-Info-VO sind unter 1. der Impressumsangaben genannt. Darüber hinaus besteht eine Berufshaftpflichtversicherung bei der […], geschäftsansäßig: […]. Der Versicherungsschutz erstreckt sich auf das Territorium der Europäischen Union.
            </p>
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
