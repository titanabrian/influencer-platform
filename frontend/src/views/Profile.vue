<template>
    <v-card
        style="margin-top:3%"
        class="mx-auto"
        max-width="400"
    >
        <v-card-text>
            <div style="display:flex; align-item:center;justify-content:center" >
                <v-img
                    :src="this.$session.get('user').pict"
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
                :value="value"
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

export default {
  name: 'Profile',
  data(){
      return {
        items: ['Fashion', 'Game', 'Food', 'Education'],
        value: JSON.parse(this.$session.get("user").interest),
        name:this.$session.get("user").name,
        email:this.$session.get("user").email,
        instagram:this.$session.get("user").instagram
      }
  },
  methods:{
      submit(){

      }
  }
}
</script>
