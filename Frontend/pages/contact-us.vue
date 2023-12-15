<template>
  <v-layout
    style="background: url('/contact.jpeg'); min-height: 100vh;background-size: cover;background-attachment:fixed;"
  >
    <v-card
      class="contactBD"
      style="background-color: #ffffffdd; margin:0;width:100%"
    >
      <v-container>
        <h3 class="heading3 font-weight-bold text-center my-3 ">
          Contact Us
        </h3>
        <v-row>
          <v-col cols="12" md="6">
            <v-form ref="form">

              <v-text-field outlined v-model="name" label="Name *">
              </v-text-field>
              <v-text-field
                outlined
                v-model="email"
                label="E-Mail Address *"
              ></v-text-field>

              <v-text-field
                outlined
                v-model="phone"
                label="Phone No. *"
                hint="Phone number with country code"
              ></v-text-field>

              <v-textarea
                outlined
                name="message"
                label="Your Message"
                v-model="message"
                hint="Provide your brief message"
              ></v-textarea>
              <!--  -->
              <v-btn
                color="primary"
                class="spl-btn"
                :loading="loading"
                @click.stop="submitQuery()"
                block
                large
                >Submit Now</v-btn
              >
              <br />
            </v-form>
          </v-col>
          <v-col md="6" cols="12">
            <p class="font-weight-bold my-2">Corporate Branch</p>
            <v-list color="#ffffffcc">
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-gmail</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>E-Mail</v-list-item-subtitle>
                  <v-list-item-title>info@stylosoftllp.com</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>Address</v-list-item-subtitle>
                  <v-list-item-title>Stylosoft LLP, Jeedimetla, Hyderabad</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle>Phone</v-list-item-subtitle>
                  <v-list-item-title>+91 980 981-9823</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.83089426916!2d78.43761156977541!3d17.521460199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x478e6ef92a6ec910!2sStandard%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1654933717821!5m2!1sen!2sin" width="98%" height="200" style="border:0;margin:10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data:()=>({
    name:'',
    email:'',
    phone:'',
    message:'',
    loading:false
  }),
  methods:{
    submitQuery(){
      this.loading=true;
      this.$axios.post('inquiries',{
        name:this.name,
        email:this.email,
        phone:this.phone,
        message:this.message
      }).then((res)=>{
        this.loading = false;
        this.$toast.success("We've Received Your Response and We'll Contact You Shortly", { icon: "mdi-check-circle" });
      },(err)=>{
        this.loading = false;
        this.$toast.error("An Error Occured", { icon: "mdi-information" });
      })
    }
  }
};
</script>

<style>
.contactBD{
  -webkit-backdrop-filter: blur(5px);
backdrop-filter: blur(5px);
border: 1px solid rgba(255,255,255,0.25);
}
</style>