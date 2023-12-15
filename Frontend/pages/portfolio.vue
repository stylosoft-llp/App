<template>
  <v-layout column>
    <v-card
      class="parallax d-flex flex-column justify-center"
      height="280px"
      dark
      flat
      style="background-image: url('/rs-assets/about2.jpg')"
      width="100%"
    >
      <v-card
        dark
        color="#00000088"
        tile
        width="100%"
        height="100%"
        class="
          d-flex
          flex-column
          align-center
          justify-center
          text-shadow
          pa-2
          text-center
        "
      >
        <h1 class="display-2 font-weight-black" align="center">OUR PROJECTS</h1>
      </v-card>
    </v-card>
    <v-tabs
      v-model="projects"
      centered
      color="orange"
      class="projects my-4"
      icons-and-text
    >
      <v-tab>
        Completed
        <v-icon>mdi-check-circle</v-icon>
      </v-tab>
      <v-tab>
        On Going
        <v-icon>mdi-refresh</v-icon>
      </v-tab>
      <v-tab>
        Upcoming
        <v-icon>mdi-calendar</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="projects">
      <v-tab-item>
				<v-container>

				<v-row v-if="focus===null">
        <v-col md="4" v-for="(cp, cpi) in completed" :key="cpi">
						<v-card @click="focus=cpi" width="400px" height="400px" class="my-12" style="position:relative" flat>
						<div class="text-center title font-weight-black text-uppercase white--text absCard pa-2" >
							{{cp.name}}
						</div>
		        <v-img width="100%" height="100%" cover :src="cp.photos[0]"/>
					</v-card>
        </v-col>
				</v-row>
				<div class="text-center" v-else>
					<v-card-title>
						{{completed[focus].name}}
						<v-spacer></v-spacer>
					<v-btn class="my-2 mx-auto" color="orange" @click="focus=null">Back</v-btn>
					</v-card-title>
					<MazGallery :images="completed[focus].photos" height="600px"/>
				</div>
				</v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-layout>
</template>

<script>
export default {
  layout: "realestate",
  data: () => ({
    projects: 0,
		focus:null,
    completed: [
      {
        name: "Villa Palazzo",
        photos: [
          "/rs-assets/projects/villa-palazzo/1.jpg",
          "/rs-assets/projects/villa-palazzo/10.jpeg",
          "/rs-assets/projects/villa-palazzo/11.jpeg",
          "/rs-assets/projects/villa-palazzo/2.jpeg",
          "/rs-assets/projects/villa-palazzo/3.jpg",
          "/rs-assets/projects/villa-palazzo/4.jpg",
          "/rs-assets/projects/villa-palazzo/5.jpg",
          "/rs-assets/projects/villa-palazzo/6.jpg",
          "/rs-assets/projects/villa-palazzo/7.jpg",
          "/rs-assets/projects/villa-palazzo/8.jpg",
          "/rs-assets/projects/villa-palazzo/9.jpeg",
        ],
      },
			{
				name:'Sunyuga Vista',
				photos:[
					"/rs-assets/projects/vista/1.jpg",
					"/rs-assets/projects/vista/2.jpg",
          "/rs-assets/projects/vista/3.jpg",
          "/rs-assets/projects/vista/4.jpg",
          "/rs-assets/projects/vista/5.jpg",
				]
			},
			{
				name:'Elegance',
				photos:[
					"/rs-assets/projects/elegance/1.jpg",
					"/rs-assets/projects/elegance/2.jpg",
          "/rs-assets/projects/elegance/3.jpg",
          "/rs-assets/projects/elegance/4.jpg",
          "/rs-assets/projects/elegance/5.jpg",
          "/rs-assets/projects/elegance/6.jpg",
          "/rs-assets/projects/elegance/7.jpg",
				]
			}
    ],
  }),
};
</script>

<style>
	.absCard{
		bottom:0;width:100%;border-radius:0;
		position: absolute;
		z-index: 2;
		height: 80px;
		background: rgb(0,0,0);
		background: linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%);
		background: -moz-linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%);
		background: -webkit-linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1); 
	}
</style>