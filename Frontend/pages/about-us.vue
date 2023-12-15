<template>
  <v-layout column>
    <v-card
      class="parallax d-flex flex-column justify-center"
      height="280px"
      dark
      color="primary"
      width="100%"
    >
      <v-card
        dark
        color="primary"
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
        <h1 class="display-2 font-weight-black" align="center">ABOUT US</h1>
      </v-card>
    </v-card>
    <v-container>
      <v-row>
        <v-col md="7">
          <v-container class="py-16">
            <p
              style="letter-spacing: 5px"
              class="orange--text font-weight-black"
            >
              PIONEERING INNOVATIONS
            </p>
            <h1
              style="font-family: Patua One !important;letter-spacing: 2px !important;font-size: 2.8rem;"
              class="font-weight-black"
            >
              StyloDesk By Stylosoft LLP
            </h1>
            <p align="left" class="subtitle-1 text-justify">
              StyloDesk is the customizable and simple customer relationship management solution for all types of businesses. It offers great flexibility to manage everyday business tasks . For instance, we offer a simple platform to keep track of customer service tasks for your business.  
            </p>
            <p align="left" class="body-1 text-justify">
              We develop the platform on-demand and are always in touch with our users to make sure the tools are up to date. Every day our userbase is growing. Our team works 24/7 to support and keep our platform [up-to-date].
            </p>
            <p align="left" class="body-1 text-justify">
              We have a special focus on customer experience. For a small business, medium sized enterprise or large corporate, the StyloDesk solution is the perfect solution. You can add multiple roles including administrators, service desk, and executive engineers. Moreover, you can also create your own forms and get them filled as per your needs by your executive.
            </p>
          </v-container>
        </v-col>
        <v-col md="5" class="d-flex align-center justify-center">
          <v-img
            width="100%"
            max-width="600px"
            style="text-wrap: wrap; display: inline; float: right"
            src="/about.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
				<v-card color="grey lighten-4" class="text-center py-16">
			<p class="heading2 font-weight-black">DEVELOPED WITH YOU IN MIND</p>
			<p class="mt-2 title font-weight-regular">A Perfect, Simple and Customizable HelpDesk for all industries</p>
			<v-container>
			<v-row dense>
				<v-col v-for="(f,fi) in features" :key="fi" md="4">
			<v-card style="box-shadow:0 5px 10px #e7e7e7;" :style="`background:var(--v-primary-base)`" class="d-flex rounded-xl align-center flex-column py-16 px-2 ma-2">
				    <v-card dark color="#00000088" tile width="100%" height="100%" class="d-flex flex-column align-center justify-center text-shadow pa-2 text-center">
				<h2 class="mt-2">{{f.title}}</h2>
				<p>{{f.text}}</p>
    </v-card>
			</v-card>
				</v-col>
			</v-row>
			</v-container>
		</v-card>
  </v-layout>
</template>

<script>
export default {
	data:()=>({
			features:[
			{title:'We Understand Your Needs',image: '/rs-assets/features1.jpg', text:'We are dedicated to provide the best solution for different needs.', background: 'linear-gradient(135deg, #84bcfa 0%, #2b70fa 100%)'},
			{title:'Reality Beyond Your Dreams​',image: '/rs-assets/features2.jpg', text:'We are dedicated to providing the best possible experience for our customers',background:'linear-gradient(135deg, #f7b8af 0%, #f8452d 100%)'},
			{title:'Everything At One Place',image: '/rs-assets/feature3.jpg', text:'Create your customized product forms, assign teams and more!',background:'linear-gradient(135deg, #a0eac2 0%, #31c369 100%)'}
		],
	})
};
</script>

<style>
</style>