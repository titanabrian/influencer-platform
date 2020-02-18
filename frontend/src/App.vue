<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>

      <v-btn v-if="!this.$session.get('auth')"
        outlined>
        <span class="mr-2" @click="dialog=!dialog">Im An Influencer</span>
      </v-btn>
      <v-btn v-if="this.$session.get('auth')!=null"
        outlined @click="signOut">
        <span class="mr-2" >Sign Out</span>
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
          <router-view></router-view>
    </v-content>
    <notifications 
    group="success"
    classes="vue-notification success"
    position="bottom right"
    />
    <notifications 
    group="error"
    classes="vue-notification error"
    position="bottom right"
    />
    <notifications 
    group="warning"
    classes="vue-notification warn"
    position="bottom right"
    />
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
          this.$session.set("user",res.data.data);
          this.$session.set("auth",true);
          this.dialog=false;
          this.$router.push("/profile");
        })
        .catch(err=>{
          console.log(err);
        })

      })
      .catch(error  => {
        console.log(error);
      })
    },
    signOut(){
      this.$gAuth.signOut()
      .then(res=>{
        this.$session.clear();
        this.$router.push("/");
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    context=this;
  }
};
</script>
