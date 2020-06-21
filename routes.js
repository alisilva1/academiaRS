const express = require ("express")
const routes = express.Router()

routes.get('/', function(req,res){
    return res.redirect("/about")
})

routes.get('/professor', function(req,res){
    return res.render("professor/index")
})

routes.get('/professor/create', function(req,res){
    return res.render("professor/create")
})

routes.post('/professor',function(req,res){
    return res.send("Recebido!")
})

routes.get('/student', function(req,res){
    return res.send("/student")
})
module.exports= routes