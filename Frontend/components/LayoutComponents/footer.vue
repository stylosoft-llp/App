<template>
  <v-footer
    dark
    padless
    inset
    class="justify-center pl-0 pr-0"
  >
    <v-card
      flat
      style="width:100%;color:#091842 !important"
      color="#071731"
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          target="_blank"
          class="mx-2 white--text"
          icon
        >
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-row>
			<v-col cols="12" md="6" sm="12">
				<v-container class="text-justify">
          <v-card light class="pa-2 rounded-lg" max-width="250px">
            <img contain width="100%" src="/logo.png" />
          </v-card>
          <br />
					<p class="my-1 body-1">Service desk solution made for all types of businessess. It offers great flexibility to manage everyday business tasks.</p>
				</v-container>
			</v-col>
      <v-col cols="12" md="3" sm="6">
				<v-container class="text-justify">
					<h2 class="title mb-4">Navigate</h2>
          <div v-for="(item,i) in items" :key="i" >
          <nuxt-link :to="item.link" class="body-1 footerLink">{{item.name}}</nuxt-link>
          </div>
				</v-container>
			</v-col>
      <v-col cols="12" md="3" sm="6">
				<v-container class="text-justify">
					<h3 class="title mb-4">Quick Links</h3>
          <div v-for="(item,i) in links" :key="i" >
          <nuxt-link :to="item.link" class="body-1 footerLink">{{item.name}}</nuxt-link>
          </div>
				</v-container>
			</v-col>
		</v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--background white--text">©
        {{ new Date().getFullYear() }} — ✨&nbsp;<strong>Stylosoft LLP | All Rights Reserved!</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {name:'mdi-facebook',link:''},
        {name:'mdi-twitter',link:''},
        {name:'mdi-linkedin',link:''},
        {name:'mdi-instagram',link:''},
      ],
      items:[
        {name:'Home',link:'/'},
        {name:'About Us',link:'/about-us'},
        {name:'Contact Us',link:'/contact-us'},
    ],
      links:[
        {name:'Login',link:'/login'},
        {name:'Register',link:'/register'},
    ],
	}),
  }
</script>
<style>
.footerLink, .footerLink:link{color:#ccccdd !important; text-decoration: none;}
</style>