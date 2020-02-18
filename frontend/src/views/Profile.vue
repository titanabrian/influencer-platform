<template>
    <v-card
        style="margin-top:3%"
        class="mx-auto"
        max-width="400"
    >
        <v-card-text>
            <div style="display:flex; align-item:center;justify-content:center" >
                <v-img
                    :src="this.$session.get('user').pict||this.$session.get('user').picture"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="200px"
                    max-width="200px"
                    style="border-radius:50%"
                    >
                </v-img>
            </div>
            <form style="margin-top:2%">
                <v-text-field
                label="Name"
                v-model="name"
                required
                solo
                ></v-text-field>

                <v-text-field
                label="Email"
                v-model="email"
                required
                disabled
                solo
                ></v-text-field>

                <v-text-field
                label="Instagram"
                v-model="instagram"
                required
                solo
                ></v-text-field>

                <v-select
                :items="items"
                v-model="interest"
                chips
                label="Interest"
                multiple
                solo
                ></v-select>

                <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
            </form>
        </v-card-text>
  </v-card>
  
</template>

<script>
// @ is an alias to /src
let context;
export default {
  name: 'Profile',
  data(){
      return {
        items: ['Fashion', 'Game', 'Food', 'Education'],
        name:this.$session.get("user").name,
        email:this.$session.get("user").email,
        instagram:this.$session.get("user").instagram,
        interest:JSON.parse(this.$session.get("user").interest)
      }
  },
  methods:{
      submit(){
          let payload = {
              name :this.name,
              email : this.email,
              instagram: this.instagram,
              interest : this.interest,
              pict: this.$session.get('user').pict
          }

          this.$http.post("api/update", payload)
          .then(res=>{
              if(res.status==200){
                  context.$notify({
                    group:"success",
                    title:"Success Notification",
                    text:"Berhasil Merubah Data"
                  })
                  context.$session.set("user",res.data.data)
              }
          })
          .catch(err=>{

          })
      }
  },
  mounted(){
      context=this
  }
}
</script>
