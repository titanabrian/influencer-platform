import router from "@/router";

export default function auth({next,to}){
    let session=JSON.parse(sessionStorage.getItem("vue-session-key"));
    
    if(session==null){
        return router.push("/");
    }

    if(!session.auth){
        return router.push("/");
    }
    return next();
}