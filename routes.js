const express = require ("express")
const routes = express.Router()
const professor = require("./professor")

routes.get('/', function(req,res){
    return res.redirect("/about")
})

routes.get('/professor', function(req,res){
    return res.render("professor/index")
})

routes.get('/professor/create', function(req,res){
    return res.render("professor/create")
})

routes.post('/professor',professor.post)

routes.get('/student', function(req,res){
    return res.send("/student")
})
module.exports= routes