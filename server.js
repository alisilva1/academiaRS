const express= require('express')
const nunjucks= require('nunjucks')
const routes = require ("./routes")

const server= express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views",{
     express:server,
     autoescape: false,
     noCache: true
    })

server.get("/portfolio", function(req,res){
    return res.render("portfolio", { itens: videos})
})

server.get("/video", function(req,res){
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id
    })
    if (!video){
        return res.send("Video not found!")
    }
    return res.render("video", { item: video })

})

server.listen(5000, function(){
    console.log("server is running")
})

