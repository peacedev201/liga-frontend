<template>
  <div
    class="container-fluid"
    style="
      background-image: url('images/demo/bg-table1.png');
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-position: top;
    "
  >
    <div
      class="container lsh_section lsh_section--small lsh_section--no-bottom-padding lsh_section--no-top-padding"
    >
      <div class="row">
        <div class="col-12">
          <HeroHeading heading="Turniere" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 lsh_sidebar">
          <b-table-simple
            responsive
            thead-class="text-center"
            tbody-class="text-center"
            striped
            hover
            :items="items"
          >
            <b-thead head-variant="dark">
              <b-tr>
                <b-th> Houptsaison 2020 / 2021 </b-th>
                <b-th>Spiele</b-th>
                <b-th>Punkte</b-th>
                <b-th>S</b-th>
                <b-th>U</b-th>
                <b-th>N</b-th>
                <b-th>Tore</b-th>
                <b-th>Diff</b-th>
              </b-tr>
            </b-thead>
            <b-tbody class="bg-white">
              <b-tr v-for="(item, index) in items" :key="index">
                <b-td
                  ><span class="mr-2">{{ index + 1 }}</span>
                  <img :src="item.image" class="mr-3" alt="" />
                  <span>{{ item.name }}</span>
                </b-td>
                <b-td>{{ item.position }}</b-td>
                <b-td>{{ item.punkte }}</b-td>
                <b-td>{{ item.wins }}</b-td>
                <b-td>{{ item.draws }}</b-td>
                <b-td>{{ item.loses }}</b-td>
                <b-td>{{ item.points }}</b-td>
                <b-td>{{ item.total }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script>
export default {
  auth: false,

  layout: "guest",

  data: function () {
    return {
      items: [
        {
          position: 1,
          name: 'Tjorven "T-Goal" Tormann',
          wins: 5,
          punkte: 5,
          draws: 0,
          loses: 0,
          points: 15,
          class: "text-center",
          image: "/images/demo/table/table-player-1.png",
          total: 200,
        },
        {
          position: 2,
          name: 'Mark "Reddi" Rote',
          wins: 4,
          punkte: 4,
          draws: 1,
          loses: 1,
          points: 12,
          class: "text-center",
          image: "/images/demo/table/table-player-2.png",
          total: 100,
        },
        {
          position: 3,
          name: 'Toni "Momo" Mor',
          wins: 3,
          punkte: 3,
          draws: 2,
          loses: 2,
          points: 9,
          class: "text-center",
          total: 1000,
          image: "/images/demo/table/table-player-3.png",
        },
        {
          position: 4,
          name: 'Billy "Bally" Ball',
          wins: 2,
          punkte: 2,
          draws: 3,
          loses: 3,
          points: 6,
          class: "text-center",
          image: "/images/demo/table/table-player-4.png",
          total: 300,
        },
        {
          position: 5,
          name: 'Jonas "Joni" Schussow',
          wins: 1,
          punkte: 1,
          draws: 0,
          loses: 4,
          points: 3,
          class: "text-center",
          image: "/images/demo/table/table-player-5.png",
          total: 500,
        },
        {
          position: 6,
          name: 'Lars "Larsen" Minute',
          wins: 0,
          punkte: 0,
          draws: 0,
          loses: 5,
          points: 3,
          class: "text-center",
          image: "/images/demo/table/table-player-6.png",
          total: 600,
        },
        {
          position: 1,
          name: 'Tjorven "T-Goal" Tormann',
          wins: 5,
          punkte: 5,
          draws: 0,
          loses: 0,
          points: 15,
          class: "text-center",
          image: "/images/demo/table/table-player-1.png",
          total: 200,
        },
        {
          position: 2,
          name: 'Mark "Reddi" Rote',
          wins: 4,
          punkte: 4,
          draws: 1,
          loses: 1,
          points: 12,
          class: "text-center",
          image: "/images/demo/table/table-player-2.png",
          total: 100,
        },
        {
          position: 3,
          name: 'Toni "Momo" Mor',
          wins: 3,
          punkte: 3,
          draws: 2,
          loses: 2,
          points: 9,
          class: "text-center",
          total: 1000,
          image: "/images/demo/table/table-player-3.png",
        },
        {
          position: 4,
          name: 'Billy "Bally" Ball',
          wins: 2,
          punkte: 2,
          draws: 3,
          loses: 3,
          points: 6,
          class: "text-center",
          image: "/images/demo/table/table-player-4.png",
          total: 300,
        },
        {
          position: 5,
          name: 'Jonas "Joni" Schussow',
          wins: 1,
          punkte: 1,
          draws: 0,
          loses: 4,
          points: 3,
          class: "text-center",
          image: "/images/demo/table/table-player-5.png",
          total: 500,
        },
        {
          position: 6,
          name: 'Lars "Larsen" Minute',
          wins: 0,
          punkte: 0,
          draws: 0,
          loses: 5,
          points: 3,
          class: "text-center",
          image: "/images/demo/table/table-player-6.png",
          total: 600,
        },
        {
          position: 1,
          name: 'Tjorven "T-Goal" Tormann',
          wins: 5,
          punkte: 5,
          draws: 0,
          loses: 0,
          points: 15,
          class: "text-center",
          image: "/images/demo/table/table-player-1.png",
          total: 200,
        },
        {
          position: 2,
          name: 'Mark "Reddi" Rote',
          wins: 4,
          punkte: 4,
          draws: 1,
          loses: 1,
          points: 12,
          class: "text-center",
          image: "/images/demo/table/table-player-2.png",
          total: 100,
        },
        {
          position: 3,
          name: 'Toni "Momo" Mor',
          wins: 3,
          punkte: 3,
          draws: 2,
          loses: 2,
          points: 9,
          class: "text-center",
          total: 1000,
          image: "/images/demo/table/table-player-3.png",
        },
        {
          position: 4,
          name: 'Billy "Bally" Ball',
          wins: 2,
          punkte: 2,
          draws: 3,
          loses: 3,
          points: 6,
          class: "text-center",
          image: "/images/demo/table/table-player-4.png",
          total: 300,
        },
      ],
      ad: {
        link: "#",
        image: "/images/demo/ad_2.jpg",
      },
      logoSlider: [
        {
          link: "#",
          image: "/images/demo/logos/logo1.png",
        },
        {
          link: "#",
          image: "/images/demo/logos/logo2.png",
        },
        {
          link: "#",
          image: "/images/demo/logos/logo3.png",
        },
        {
          link: "#",
          image: "/images/demo/logos/logo4.png",
        },
      ],
    };
  },
};
</script>
