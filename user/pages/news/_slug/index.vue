<template>
  <div class="container-fluid">
    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
    >
      <div class="row">
        <div class="col-12 col-lg-12 py-3">
          <div class="lsh_news">
            <img :src="news.content_picture" :alt="news.title" class="w-100" />

            <h2 style="font-size: 20px; font-weight: bold;" class="lsh_title lsh--secondary-bg lsh--primary-accent-border-bottom">
              {{ news.title }}
            </h2>
            <div style="background-color: #27303e;" class="p-3">
              <b-button href="/" size="sm" variant="primary" class="lsh_btn lsh_btn--primary lsh_btn--round">
                Zurück zur Startseite
                <b-icon class="font-weight-bold" icon="chevron-right" aria-hidden="true"></b-icon>
              </b-button>
              <p class="text-white text-break mt-4" v-html="news.content"></p>
              <b-button href="/" size="sm" variant="primary" class="lsh_btn lsh_btn--primary lsh_btn--round">
                Zurück zur Startseite
                <b-icon class="font-weight-bold" icon="chevron-right" aria-hidden="true"></b-icon>
              </b-button>
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
      newsData: {
        1: {
          title: "Erste eFootball-Plattform in Schleswig-Holstein öffnet die Pforten – Liga.sh nimmt den Betrieb auf ",
          content_picture: '/images/demo/header-demo-banner2.png',
          content: "Das wettbewerbsorientierte Spielen von Computer- und Videogames, der E-Sport, hat in der Gesellschaft einen immer größeren Stellenwert. Er ist Teil der Lebenswirklichkeit und des Alltags zahlreicher Menschen. " +
              "<br><br>" +
              "Schleswig-Holstein gilt deutschlandweit als Vorreiter in Sachen E-Sport. Das Land fördert E-Sport, nicht nur monetär, sondern auch ganz praktisch durch das Vorantreiben von Projekten. In Flensburg hat im Oktober 2020 die erste E-Sport-Einrichtung im Land physisch eröffnet, namentlich das Vereinsheim vom eSports Nord e.V. " +
              "<br><br>" +
              "Darüber hinaus befindet sich in Kiel das erste Landeszentrum für E-Sport und Digitalisierung in der Entstehung, das bereits digitale Events und Seminare anbietet. Viele traditionelle Breitensportvereine Schleswig-Holsteins haben eigene Abteilungen gegründet, häufig mit einem Fokus auf eFootball und die Fußballsimulation FIFA. " +
              "<br><br>" +
              "Was bisher fehlte: Eine Plattform, auf der sich eFootball-Spieler im Land miteinander messen können. Liga.sh füllt diese Lücke nicht nur aus, sondern bietet darüber hinaus ein breites Spektrum an Mehrwerten für Vereine und Spieler. " +
              "<br><br>" +
              "Auf Liga.sh können eigene Profile angelegt werden, es gibt unterschiedliche Ligen und Wettbewerbe, Trophäen können errungen und präsentiert werden, Spieler können ihre Zugehörigkeit zu einem Verein zeigen. Zur Weihnachtszeit wird es einen Christmas Cup geben." +
              "<br><br>" +
              "Die Liga ist von der Flensburger Agentur mienjung GmbH gemeinsam mit dem Schleswig-Holsteinischen Fußballverband (SHFV) entwickelt worden. Damit wird über Liga.sh nicht nur der offizielle Landesmeister im eFootball ermittelt, sondern die Plattform bietet Teams von schleswig-holsteinischen Amateurvereinen die Möglichkeit, sich für die Teilnahme am DFB-ePOKAL zu qualifizieren." +
              "<br><br>" +
              "Der ePOKAL des Deutschen Fußball-Bundes (DFB) ist der deutsche Pokalwettbewerb im eFootball. Wer sich als Schleswig-Holsteiner für die Finalrunde des Pokals in Berlin qualifizieren möchte, spielt sich über Liga.sh nach oben." +
              "<br><br>" +
              "Liga.sh wird für die beiden großen Spielekonsolen-Communities ein Zuhause sein. Sowohl PlayStation- als auch Xbox-Spieler können sich daher auf Liga.sh miteinander messen. Dabei bietet die Plattform für jeden etwas: Vom Amateurspieler bis zum Vollzeitprofi." +
              "<br><br>" +
              "Tim Cassel, Geschäftsführer des Schleswig-Holsteinischen Fußballverbandes, zeigt sich erfreut über den Release von Liga.sh und die Zusammenarbeit mit der mienjung GmbH:" +
              "<br>" +
              "„Wir sind froh, dass es diese Plattform für Spielerinnen und Spieler in Schleswig-Holstein gibt. Mit eFootball-Wettbewerben können Verbände und Vereine den eigenen Mitgliedern ein moderneres, attraktiveres Angebot bieten – davon profitieren letztlich die Fußballabteilungen.“" +
              "<br><br>" +
              "Martin Freese, der geschäftsführende Gesellschafter der mienjung GmbH, bringt bereits viel Erfahrung mit. Er war 2017 maßgeblich für die Organisation der gamescom mitverantwortlich und war darüber hinaus selbst viele Jahre aktiver Wettbewerbsspieler:" +
              "<br>" +
              "„Mit Liga.sh haben wir gemeinsam mit dem SHFV eine deutschlandweit einmalige Plattform geschaffen. Nun haben alle eFootball-Spieler Schleswig-Holsteins die Möglichkeit gemeinsam den virtuellen Fußball zu leben, mit all seinen tollen Facetten: Gemeinschaft, Fairplay, Wir-Gefühl und dem sportlichen Wettkampf.“" +
              "<br><br>" +
              "Die Plattform wird am 04.12.2020 unter www.liga.sh released. Anfragen können vorab und auch im Anschluss unter info@liga.sh gestellt werden. Alle Informationen zum DFB-ePOKAL finden sich unter: www.dfb-efootball.de." +
              "<br><br>" +
              "Eine Besonderheit wartet auf alle Schnellstarter: Bis zum Release am 04.12.2020 läuft ein Countdown auf einer Landingpage unter www.liga.sh. Spieler, die sich während des Countdowns für die Liga registrieren, erhalten eine limitierte Auszeichnung für ihr Spielerprofil, die danach nie wieder erhältlich sein wird.",
        },
        2: {
          title: "Liga.sh – Der Weg zum DFB-ePOKAL powered by ERGO",
          content_picture: '/images/demo/header-demo-banner2.png',
          content: " Der DFB-ePOKAL, also der deutsche Pokalwettbewerb in Sachen eFootball, setzt bei der Kür des deutschen Pokalsiegers ganz auf die Zusammenarbeit mit Fußball-Landesverbänden. " +
            "<br><br>" +
            " Im Land zwischen den Meeren ist daher der Schleswig-Holsteinische Fußballverband (SHFV) zuständig für das Ausspielen des Landesmeisters, der dann an der Finalrunde des DFB-ePOKALs in Berlin teilnehmen wird. " +
            "<br><br>" +
            " Bei der Suche nach dem nördlichsten Landesmeister Deutschlands arbeitet der SHFV exklusiv mit Liga.sh zusammen. " +
            "<br><br>" +
            "Daher ist die Plattform für alle Nordlichter der Anlaufpunkt, wenn es um eFootball und die FIFA-Gemeinschaft in Schleswig-Holstein geht. " +
            "<br><br>" +
            " Also: Wer Landesmeister werden und vielleicht sogar nach Berlin reisen möchte, der kommt an Liga.sh nicht vorbei. Anmelden, mitspielen, Trophäen sammeln.",
        },
        3: {
          title: "Du bist neu auf Liga.sh? So kannst du direkt loslegen!",
          content_picture: '/images/demo/header-demo-banner2.png',
          content: " Liga.sh ist die Plattform für alle eFootball-Fans in Schleswig-Holstein. Mitzumachen ist ganz einfach und unkompliziert. " +
            "<br><br>" +
            " Registriere dich auf der Webseite mit deiner E-Mail-Adresse und folge dem Registrierungsprozess." +
            "<br><br>" +
            " Anschließend kannst du dich kinderleicht anmelden, hierfür benötigst du nur deine E-Mail-Adresse und das von dir festgelegt Passwort." +
            "<br><br>" +
            " Einmal eingeloggt hast du viele Möglichkeiten. Du kannst dein Profil anpassen, deinen Verein suchen und ihm auf Liga.sh beitreten und natürlich spielen. " +
            "<br><br>" +
            " Die Teilnahme an der Liga ist sehr leicht. Es gibt Spielplänen, denen du entnehmen kannst, gegen welchen Verein dein Verein antreten wird und gegen wen du spielen musst." +
            "<br><br>" +
            " Die Ergebnisse der Spieltage werden jeweils sekundenaktuell in der Liga abgebildet, sodass du jederzeit sehen kannst, auf welchem Tabellenplatz sich dein Verein befindet." +
            "<br><br>" +
            " Also: Losspielen und deinen Verein ganz nach vorne bringen!",
        },
        4: {
          title: "Discord-Server: Die Schaltzentrale von Liga.sh",
          content_picture: '/images/demo/header-demo-banner2.png',
          content: "Liga.sh verfügt über einen eigenen Discord-Server. Diesem kannst du beitreten, sobald wir ein Turnier zur Anmeldung öffnen. Einmal dem Server beigetreten, kannst du deinen Namen auswählen und über die unterschiedlichen Channel des Servers mit anderen Spielern und den Admins von Liga.sh interagieren." +
              "<br><br>" +
            "Der Discord-Server dient primär zwei Funktionen:" +
            "<ul>" +
            "<li>Eintragen der Spiele mittels Übermittlung der Ergebnisse via Screenshots / Fotos an die Liga-Admins.</li>" +
            "<li>Kontaktanfragen bei Problemen und Unklarheiten an die Liga-Admins.</li>" +
            "</ul>" +
            "<br>" +
            "Wir sind für dich da. Melde dich gerne bei Fragen und Problemen jeder Art.",
        },
        5: {
          title: "Weihnachten bei Liga.sh: Der X-Mas Cup 2020 ",
          content_picture: '/images/news/header/Liga-sh-XMAS-Header.png',
          content: "<br><p>Kaum sind wir am Start, haben wir auch gleich den ersten coolen Wettbewerb für euch: den X-Mas Cup 2020!</p>" +
            "<p class='font-weight-bold'>Worum geht's?</p>" +
            "<p>Beim X-Mas Cup kann jeder auf seiner Lieblingsplattform spielen. So können PlayStation- sowie Xbox-Freunde am Cup teilnehmen.</p>" +
            "<p>Die Anmeldephase läuft ab morgen, dem 10.12.2020 und geht bis einschließlich zum 16.12.2020. Danach geht es dann auch direkt los mit dem Turnier. Die Vorrundenpartien werden am 17.12. und am 18.12. ausgespielt, anschließend messen sich die Besten der Besten am 19.12. im Halbfinale, bevor am Tag darauf das große Finale stattfinden wird.</p>" +
            "<p class='font-weight-bold'>Gewinne, Gewinne, Gewinne!</p>" +
            "<p>Der Spaß am Spiel ist immer das Wichtigste, aber großartige Preise sind nochmal die Kirsche auf der FIFA-Sahnetorte. Deshalb sponsern wir (mienjung GmbH) gleich mehrere Preise für die drei besten Spieler beider Plattformen:</p>" +
            "<ul class='px-3'>" +
            "<li>Platz 1: 50 Euro Guthaben (jeweils für PlayStation und Xbox)</li>" +
            "<li>Platz 2: 30 Euro Guthaben (jeweils für PlayStation und Xbox)</li>" +
            "<li>Platz 3: 20 Euro Guthaben (jeweils für PlayStation und Xbox)</li>" +
            "</ul>" +
            "<p>Gesamtwert: 200 Euro.</p>" +
            "<p class='font-weight-bold'>Was muss ich tun, um teilzunehmen?</p>" +
            "<p>Einfach auf Liga.sh einloggen und unter dem Punkt „Turniere“ dem Registrierungsprozess folgen. Anschließend dem Discord-Server beitreten, damit eure Spiele auch gewertet werden können: <a target='_blank' href='https://discord.gg/MJYtnZq89R'>https://discord.gg/MJYtnZq89R</a></p>" +
            "<p>Bitte achtet darauf, dass der Nickname auf dem Discord der gleiche sein muss, den ihr auch auf Liga.sh nutzt.</p>" +
            "<p>Also: Auf geht’s! Bringen wir den virtuellen Ball zum Rollen. Wir freuen uns auf spannende und ereignisreiche Tage mit euch.</p>" +
            "<p class='font-weight-bold'>Euer Liga.sh-Team</p><br>" +
            "<iframe style=\"max-width: 100%\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/khN-7zEeeh4\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        },
        6: {
          title: "Liga.sh startet mit Qualifikation für den DFB-ePOKAL powered by ERGO",
          content_picture: '/images/news/header/Liga-sh-Trophy-News-header.jpg',
          content: "Flensburg und Kiel, 22.12.2020" +
            "<br><br>" +
            "Die eFootball-Plattform Liga.sh startet ab dem kommenden Jahr mit der Qualifikation für den ePOKAL des Deutschen Fußballbundes (DFB). Bis zum 31.01.2020 wird der Landesmeister Schleswig-Holsteins über Liga.sh ermittelt, der dann wiederum als Vertreter des Landes zwischen den Meeren in den DFB-ePOKAL einziehen wird. Der ePOKAL ist der offizielle Pokalwettbewerb Deutschlands im eFootball." +
            "<br><br>" +
            "Teilnehmen können alle eFootballerinnen und eFootballer Schleswig-Holsteins in Teams, die unter der Flagge eines traditionellen Sportvereins spielen. Ob Amateur oder Profi spielt dabei keine Rolle: Jeder kann mitmachen und sein Bestes geben, um am Ende der offizielle Landesmeister im eFootball zu werden. Der Landesmeister-Titel ist anerkannt, da der Schleswig-Holsteinische Fußballverband (SHFV) zusammen mit der Flensburger Digitalagentur mienjung GmbH den Wettbewerb über Liga.sh organisiert." +
            "<br><br>" +
            "Die Qualifikationsrunden finden sowohl auf der PlayStation als auch auf der Xbox statt. Gespielt wird im sogenannten 90er-Modus in der Fußballsimulation FIFA, damit alle Teilnehmenden die gleichen Ausgangschancen haben. Die Registrierung erfolgt über die Plattform <a href='https://www.liga.sh'>www.liga.sh</a> – alle weiteren Informationen werden dort zusammengefasst." +
            "<br><br>" +
            "Der Landesmeister wird dann im Frühjahr 2021 an der DFB-ePOKAL Vorrunde teilnehmen. Die Vorrunden werden online ausgetragen. Insgesamt schüttet der DFB beim ePOKAL rund 50.000 Euro an Preisgeldern aus. Der DFB-ePOKAL ist weltweit der erste in dieser Form ausgetragene Pokalwettbewerb im eFootball." +
            "<br><br>" +
            "Darüber hinaus wird das Finale des DFB-ePOKALs via Twitch, also einem Livestreaming-Format übertragen. Der DFB hat hierfür eigens einen Channel auf <a href='https://www.twitch.tv'>www.twitch.tv</a> erstellt. Ergänzend wird die Webseite <a href='https://www.esports.com'>www.esports.com</a> über den DFB-ePOKAL berichten." +
            "<br><br>" +
            "Weitere Informationen können <a href='https://www.liga.sh'>www.liga.sh</a> und <a href='https://www.dfb-efootball.de'>www.dfb-efootball.de</a> entnommen werden" +
            "<br><br>" +
            "<iframe style=\"max-width: 100%\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/vCI01hGtRlU\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        },
        7: {
          title: "Die Sieger der Landesverbands-Trophy 2021 stehen fest!",
          content_picture: '/images/news/header/Liga-sh-Trophy-News-header.jpg',
          content: "Auf der Playstation konnte sich der TSV Nordhastedt e.V. mit einem 3 zu 1 gegen den SV Henstedt-Ulzberg e.V. durchsetzen und sich den Titel sichern!<br><br>" +
            "Wir gratulieren den Spielern,<br>" +
            "Furkan 'Furkan_21' Demir,<br>" +
            "Chris 'ChrisTange_' Tange,<br>" +
            "Colin 'Cooolliiin' Völter,<br>" +
            "zum Titel des eFootball-Landesmeisters 2021 PlayStation<br><br>" +
            "Auf der Xbox konnte sich der TSV Husby mit einem 3 zu 0 gegen den TuS Jevenstedt durchsetzen und sich den Titel sichern!<br><br>" +
            "Wir gratulieren den Spielern,<br>" +
            "Sören 'Sobo' Böhm,<br>" +
            "Sondre 'sondre2101' Bartelsen,<br>" +
            "Finn 'Finn1006' Ebsen,<br>" +
            "Jannes 'Jannes1211' Meyer,<br>" +
            "Tim 'Timme44' Werth,<br>" +
            "zum Titel des eFootball-Landesmeisters 2021 Xbox",
        },
        8: {
          title: "Wir starten in die Saison 2021",
          content_picture: '/images/news/header/Liga-sh-weekend-News-header.jpg',
          content: "Mit dem Weekend Cup #1 starten wir auf der PlayStation und Xbox in den ersten Cup der Saison 2021.<br><br>" +
            "Meldet euch jetzt an, um die ersten Punkte der Saison zu ergattern und spielt um weitere Errungenschaften!<br><br>" +
            "Mit dem Weekend Cup #1 starten wir mit einer Serie von Turniere & Cups mit interessanten Preisen und limitierten Errungeschaften.<br><br>" +
            "Melden euch heute noch zum Weekend Cup #1 an!<br><br>" +
            "Die Anmeldefrist endet am Freitag 12.02 um 13:00!<br><br>" +
            "Zur Anmeldung geht es <a href='https://efootball.liga.sh/tournament'>hier</a>",
        }
      },
      news: {},
      matches: {
        completed: [
          {
            id: "1",
            date: "22. Oktober 2020",
            data: {
              result: "3:0",
              pl1: {
                goals: 3,
                userMeta: {
                  nickname: "Karsten",
                  avatar: "/images/demo/players/player-1.png",
                },
              },
              pl2: {
                goals: 0,
                userMeta: {
                  nickname: "Thorsten",
                  avatar: "/images/demo/players/player-2.png",
                },
              },
            },
            event: "Summer Cup",
            type: "completed",
          },
          {
            id: "2",
            date: "25. Oktober 2020",
            data: {
              result: "1:4",
              pl1: {
                goals: 1,
                userMeta: {
                  nickname: "Lörri",
                  avatar: "/images/demo/players/player-2.png",
                },
              },
              pl2: {
                goals: 4,
                userMeta: {
                  nickname: "Hanno",
                  avatar: "/images/demo/players/player-3.png",
                },
              },
            },
            event: "Winter Cup",
            type: "completed",
          },
          {
            id: "3",
            date: "28. Oktober 2020",
            data: {
              result: "2:2",
              pl1: {
                goals: 2,
                userMeta: {
                  nickname: "Bally",
                  avatar: "/images/demo/players/player-3.png",
                },
              },
              pl2: {
                goals: 2,
                userMeta: {
                  nickname: "Pfeife",
                  avatar: "/images/demo/players/player-1.png",
                },
              },
            },
            event: "Online Match",
            type: "completed",
          },
          {
            id: "4",
            date: "31. Oktober 2020",
            data: {
              result: "5:2",
              pl1: {
                goals: 5,
                userMeta: {
                  nickname: "Jürgii",
                  avatar: "/images/demo/players/player-1.png",
                },
              },
              pl2: {
                goals: 2,
                userMeta: {
                  nickname: "Gustavo",
                  avatar: "/images/demo/players/player-2.png",
                },
              },
            },
            event: "Online Match",
            type: "completed",
          },
        ],
        upcoming: [
          {
            id: "1",
            date: "01. Januar 2021",
            data: {
              result: "",
              pl1: {
                goals: 0,
                userMeta: {
                  nickname: "Karsten",
                  avatar: "/images/demo/players/player-1.png",
                },
              },
              pl2: {
                goals: 0,
                userMeta: {
                  nickname: "Thorsten",
                  avatar: "/images/demo/players/player-3.png",
                },
              },
            },
            event: "Summer Cup",
            type: "upcoming",
          },
        ],
        next: {},
      },
      matchplan: {
        data: [
          {
            position: 1,
            name: 'Tjorven "T-Goal" Tormann',
            wins: 5,
            draws: 0,
            loses: 0,
            points: 15,
          },
          {
            position: 2,
            name: 'Mark "Reddi" Rote',
            wins: 4,
            draws: 1,
            loses: 1,
            points: 12,
          },
          {
            position: 3,
            name: 'Toni "Momo" Mor',
            wins: 3,
            draws: 2,
            loses: 2,
            points: 9,
          },
          {
            position: 4,
            name: 'Billy "Bally" Ball',
            wins: 2,
            draws: 3,
            loses: 3,
            points: 6,
          },
          {
            position: 5,
            name: 'Jonas "Joni" Schussow',
            wins: 1,
            draws: 0,
            loses: 4,
            points: 3,
          },
          {
            position: 6,
            name: 'Lars "Larsen" Minute',
            wins: 0,
            draws: 0,
            loses: 5,
            points: 3,
          },
        ],
        header: [
          { label: "" },
          { label: "SPIELER" },
          { label: "S" },
          { label: "N" },
          { label: "P" },
        ],
      },
      highlights: {
        link: "#",
        caption: "Liga.sh Highlights",
        image: "/images/demo/FIFA_Banner.png",
      },
      ads: {
        sidebar: {
          link: "#",
          image: "/images/demo/ads/banner_square1.png",
        },
      },
    };
  },

  mounted() {
    this.news = this.newsData[this.$route.params.slug]
  },
};
</script>
