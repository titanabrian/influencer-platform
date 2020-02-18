<template>
  <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row>
            <Card
              v-for="item in influencers_list"
              :key="item.email"
              :user="item"
            />
          </v-row>
        </v-col>
      </v-row>
  </v-container>    
</template>

<script>
import Card from "@/components/Card.vue"
export default {
  name: 'Home',
  components:{
    Card
  },
  data(){
    return {
      influencers_list:[]
    }
  },
  methods:{
    getInfluencers(){
      this.$http.get("/public/influencer")
      .then(res=>{
        this.influencers_list=res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },

  mounted(){
    this.getInfluencers();
  }
}
</script>
