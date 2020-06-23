const fs = require('fs');
const data = require("./data.json");
//create
exports.post = function(req,res){
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == "")
            return res.send("Por favor preencha todos os campos!")
    }
    req.body.birth = Date.parse(req.body.birth)
    req.body.criado_em = Date.now()

    data.professor.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 4),function(err){
        if(err) return res.send("O preenchimento dos dados está errado.")

        return res.redirect("/professor")
    } )
}

//update
//delete