<template>
    <v-card
    class="mx-auto ma-3 pa-6"
    width="500px"
    outlined
    >
        <v-list-item three-line>
            <v-list-item-content>
            <div class="overline mb-4">INSTAGRAM</div>
            <v-list-item-title class="headline mb-1">{{this.nama||this.user.name}}</v-list-item-title>
            <v-list-item-subtitle>@{{this.user.instagram}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
            tile
            size="80"
            >
                <img
                    style="border-radius:50%"
                    :src="this.image||'https://instagram.fcgk18-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcgk18-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=obxKpHl12TUAX-99bK4&oh=ac985779e6dafe78da0514a7711d744d&oe=5EE002F1'"
                    alt="Profile"
                >
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn text>{{this.follower}} followers</v-btn>
            <v-btn text>{{this.following}} following</v-btn>
            <v-btn text>{{this.post}} posts</v-btn>
        </v-card-actions>

        <v-card-actions>
            <v-btn small v-for="interest in JSON.parse(this.user.interest)" :key="interest" rounded color="primary" dark>{{interest}}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from "axios";

export default{
    name:"Card",
    props:[
        "username",
        "user"
    ],
    data(){
        return{
            nama:"",
            image:"",
            follower:0,
            following:0,
            post:0
        }
    },
    
    methods:{
        getProfile(username){
            axios.get("https://www.instagram.com/"+username+"?__a=1")
            .then(res=>{
                if(res.status===200){
                    let user =res.data.graphql.user
                    this.nama=user.full_name
                    this.follower=user.edge_followed_by.count
                    this.following=user.edge_follow.count
                    this.post=user.edge_owner_to_timeline_media.count
                    this.image=user.profile_pic_url_hd
                }else if (res.status===302){
                    this.$notify({
                        group:"error",
                        title:"Error Notification",
                        text:"Ops, Data di block oleh instagram"
                    })
                }
            })
            .catch(err=>{
                this.$notify({
                        group:"error",
                        title:"Error Notification",
                        text:"Ops, Data di block oleh instagram untuk sementara waktu"
                    })
            })

        }
    },

    mounted(){
        this.getProfile(this.user.instagram)
    }

}
</script>