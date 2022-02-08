<template>
  <div class="lsh_grass_background">
    <div class="container-fluid">
      <div class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding">
        <div class="row">
          <div class="col-12">
            <div class="hero-heading">
              <h1>FAQ</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="align-center text--white pb-2">
            <p>Im Folgenden findest du häufig gestellte Fragen (FAQ), die dich bei deinen Aktivitäten auf liga.sh begleiten und unterstützen sollen. Sollten von deiner Seite Fragen auftauchen, dann schau bitte in die FAQ, bevor du einen Admin kontaktierst. Sollten deine Fragen durch die FAQ nicht geklärt worden sein, dann zögere bitte nicht uns über den Discord-Server anzuschreiben.</p>
          </div>
          <div style="width: 100%!important;" class="accordion" role="tablist">
            <b-card v-for="(data, index) in faqData" :key="index" style="background-color: unset; border-radius: unset" no-body class="mb-3">
              <b-card-header style="padding: unset;" header-tag="header" class="text--white" role="tab">
                <b-button class="font-weight-bold" style="border-radius: unset; background-color: #142034; border-color: #142034" block v-b-toggle="'accordion-' + index" variant="primary">{{ data.title }}</b-button>
              </b-card-header>
              <b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
                <b-card-body style="background-color: white;">
                  <p class="card-text" v-html="data.content"></p>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <div class="align-center text--white pt-4">
            <h5>Noch offene Fragen?</h5>
            <p>Dann schreib uns eine E-Mail an <a href="mailto:info@liga.sh">info@liga.sh</a> mit deinen Fragen.</p>
            <p>Du kannst uns auch telefonisch erreichen von Montag bis Freitag 09:00 bis 17:00 Uhr unter <a href="tel:+4946140687513">+49 461 406875-13</a></p>
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
      faqData: [
        {
          title: "Was ist Liga.sh?",
          content: "Liga.sh ist die erste eFootball Liga für das Land Schleswig-Holstein.<br>" +
            "Auf Liga.sh spielst du nicht nur in der Saison um den Titel des Schleswig-Holsteinischen eFootball Meisters, sondern auch um den Einzug in den DFB-ePOKAL!"
        },
        {
          title: "Wie erstelle ich mir einen Account auf Liga.sh?",
          content: "Du gehst auf <a href='/player/signin'>Login</a>/<a href='player/signup'>Registration</a>, " +
            "füllst das Anmeldeformular aus und schon hast du deinen Account bei uns erstellt.<br>" +
            "In deinem Profil kannst du dann ein Profilbild hochladen, deine Errungenschaften sehen und deine letzten gespielten Spiele sowie deine Statistik und Position in der laufenden Saison begutachten.<br>" +
            "Du kannst auch deinem favorisierten Verein aus Schleswig-Holstein beitreten und für diesen in den Cups und der laufenden Saison sowie in der Landesverbands-Trophy spielen!"
        },
        {
          title: "Wie kann ich einen Account für meinen Verein anlegen?",
          content: "In Kooperation mit dem Schleswig-Holsteinischen Fußballverband haben wir bereits alle Fußballvereine aus ganz Schleswig-Holstein auf unserer Seite. Wenn du von deinem Verein bevollmächtigt wurdest den Account auf Liga.sh für deinen Verein zu verwalten, schreibst du uns eine kurze E-Mail an <a href='mailto:info@liga.sh'>info@liga.sh</a> mit deinem Anliegen und um welchen Verein es sich handelt. Vergiss dabei bitte nicht einen Nachweis über deine Vollmacht/Position mit an die E-Mail zu hängen. Daraufhin bekommst du eine E-Mail von uns mit der du ein Passwort für den Account deines Vereins festlegen kannst. Schon kannst du dich in den Account einloggen, diesen gestalten und die Spieler verwalten.<br>" +
            "P.S.: Solltest du bereits einen Spieleraccount mit der gleichen E-Mail-Adresse angemeldet haben, nenn uns bitte eine alternative E-Mail-Adresse damit es dort zu keinen Problemen kommen kann."
        },
        {
          title: "Was sind Errungenschaften und wie kann ich sie erhalten?",
          content: "Auf liga.sh kannst du Errungenschaften für dein Profil freispielen, Errungenschaften sind Auszeichnungen, die du bekommen kannst für die verschiedensten Aktivitäten auf liga.sh.<br>" +
            "Zum Beispiel bekommst du eine Auszeichnung/Errungenschaft, wenn du an einem Cup teilnimmst und diesen gewinnst. Dabei haben die Errungenschaften verschiedene Qualitäten und Schwierigkeitsstufen. Wenn du den ersten Platz in einem Wochenend-Cup gewinnst bekommst du dafür eine goldene Errungenschaft, die du dann auf deinem Profil ausstellen kannst."
        },
        {
          title: "Wie kann ich an Turnieren teilnehmen?",
          content: "Alle Turniere, die aktuell laufen oder zur Anmeldung freigegeben sind, findest du <a href='/tournament'>hier</a><br>" +
            "Um dich für ein Turnier anzumelden musst du dich zuerst mit deinem Profil auf liga.sh anmelden, dann kannst du dich dann ganz einfach über den Button „Für Turnier anmelden“ für das Turnier deiner Wahl anmelden. Jedes Turnier wird es als PlayStation und als Xbox Version geben.<br>" +
            "Die Organisation der Turniere geschieht über unseren Discord-Server, dort erhalten die Teilnehmer alle weiteren Informationen und können direkt dem Support Fragen stellen."
        },
        {
          title: "Discord? Was ist das und wie kann ich es nutzen?",
          content: "Discord ist ein Onlinedienst für Instant-Messaging, Chat, Sprach- und Videokonferenzen, der vor allem für Computer- und Konsolenspieler geschaffen wurde.<br>" +
            "Unter folgenden <a href='https://discord.com/download'>Link</a> kannst du dir Discord herunterladen und dir dort einen Account anlegen.<br>" +
            "Nun musst du nur noch dem Liga.sh Server beitreten und kannst dich mit der Community austauschen und direkt mit den Admins in Kontakt treten.<br>" +
            "Dem Discord-Server von Liga.sh kannst du über folgendem Einladungslink beitreten: <a href='https://discord.gg/MJYtnZq89R  '>https://discord.gg/MJYtnZq89R</a>"
        },
        {
          title: "Was kann ich auf Liga.sh gewinnen und woran kann ich teilnehmen?",
          content: "Auf Liga.sh kannst du:<br>" +
            "<ul style='margin-left: 16px;'>" +
            "<li>an der laufenden Saison teilnehmen, diese läuft immer über ein Jahr hinweg und gipfelt in einem Live-Event mit Pokalvergabe der „Landesverbands-Trophy“</li>" +
            "<li>an Wochenend-Cups (Turniere) teilnehmen und um jede Menge Preise spielen</li>" +
            "<li>an Special-Events teilnehmen und um gesonderte Preise und Errungenschaften spielen</li>" +
            "<li>an saisonalen Turnieren teilnehmen (Oster-/Winter-/Sommer-Cup)</li>" +
            "<li>für deinen Verein verschiedene Errungenschaften freischalten</li>" +
            "<li>einen Verein in deiner Nähe finden, der eine E-Sport-Sparte hat, der du beitreten kannst</li>" +
            "<li>andere Mitspieler finden und mit diesen Teams für Events bilden</li>" +
            "</ul>"
        },
        {
          title: "Was ist die Landesverbands-Trophy?",
          content: "Bis zum 31.01.2020 wird der Landesmeister Schleswig-Holsteins über Liga.sh ermittelt, der dann wiederum als Vertreter des Landes zwischen den Meeren in den DFB-ePOKAL einziehen wird. Der ePOKAL ist der offizielle Pokalwettbewerb Deutschlands im eFootball.<br>" +
            "Teilnehmen können alle eFootballerinnen und eFootballer Schleswig-Holsteins in Teams, die unter der Flagge eines traditionellen Sportvereins spielen. Ob Amateur oder Profi spielt dabei keine Rolle: Jeder kann mitmachen und sein Bestes geben, um am Ende der offizielle Landesmeister im eFootball zu werden. Der Landesmeister-Titel ist anerkannt, da der Schleswig-Holsteinische Fußballverband (SHFV) zusammen mit der Flensburger Digitalagentur mienjung GmbH den Wettbewerb über Liga.sh organisiert.<br>" +
            "Die Qualifikationsrunden finden sowohl auf der PlayStation als auch auf der Xbox statt. Gespielt wird im sogenannten 90er-Modus in der Fußballsimulation FIFA, damit alle Teilnehmenden die gleichen Ausgangschancen haben.<br" +
            "Die Anmeldung zur Landesverbands-Trophy findest du <a href='/tournament'>hier</a>"
        },
        {
          title: "Was ist der DFB-ePokal powered by ERGO?",
          content: "Ein weltweit in dieser Form zum ersten Mal ausgetragener, deutschlandweiter eFootball-Pokalwettbewerb von der Basis bis zur Spitze. Im Frühjahr 2021 wird beim großen Finale – sofern es die pandemische Lage zulässt, in Berlin – der Premierenchampion ausgespielt. Davor warten eine Qualifikations- samt Vorrunde und die Hauptrunde auf alle Teilnehmer*innen. Klein gegen Groß, Amateure gegen Profis. Der ePOKAL verbindet Tradition und Moderne."
        },
        {
          title: "Wie kann ich Admin auf Liga.sh werden?",
          content: "Wenn du die liga.sh unterstützen möchtest und Teil des liga.sh Teams werden möchtest dann sende uns einfach eine Mail an <a href='mailto:info@liga.sh'>info@liga.sh</a> mit „Admin werden“ im Betreff und schreibe uns warum du Admin auf liga.sh werden möchtest.<br>" +
            "Unsere Admins bekommen die Möglichkeit exklusive Errungenschaften für ihre Profile freizuschalten und aktiv auf Liga.sh mitzuwirken. Wir erweitern unser Admin Programm und bieten unseren Admins zukünftig damit viele interessante Inhalte.<br>" +
            "Wir freuen uns auf deine Nachricht :)"
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
