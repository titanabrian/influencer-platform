<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>

      <v-btn
        outlined>
        <span class="mr-2" @click="dialog=!dialog">Im An Influencer</span>
      </v-btn>
    </v-app-bar>

    <v-content>

          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">Login</v-card-title>
              <v-card-text class="text-center">
               <v-btn @click="signIn">Sign In With Google</v-btn>
              </v-card-text>
              
            </v-card>
          </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
let context;
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    dialog:false
  }),

  methods:{
    signIn(){
      this.$gAuth.signIn()
      .then(GoogleUser => {
    
        const user={
          name: GoogleUser.Qt.Ad,
          email: GoogleUser.Qt.zu,
          pict: GoogleUser.Qt.UK
        }

        context.$http.post("public/auth",user)
        .then(res=>{
          this.$session.start();
          this.$session.set("access_token",GoogleUser.uc.access_token);
          this.$session.set("user",GoogleUser.Qt);
        })
        .catch(err=>{
          console.log(err);
        })

      })
      .catch(error  => {
        console.log(error);
      })
    }
  },
  mounted(){
    context=this;
  }
};
</script>
