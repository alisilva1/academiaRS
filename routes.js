const express = require ("express")
const routes = express.Router()


server.get("/", function(req,res){
    const header = {
        avatar_url: "https://avatars3.githubusercontent.com/u/38330004?s=460&u=f5b8b45e98fbbdee21e5da2e023216cb42af8416&v=4",
        name: "Alisson Medeiros",
        job: 'Consultor na empresa <a href= "https://www.mobileum.com/" target="_blank"> Mobileum </a>',
        description: "Curioso em Design e atualmente analista de sistemas",
        link: [
            {name: "Github", url: "https://github.com/alisilva1"},
            {name: "Facebook", url: "https://www.facebook.com/alisson.silva.77920"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/alisson-medeiros-337450119/"}
        ]
    }
    return res.render("about", {about: header})
})