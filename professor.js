const fs = require('fs');
const data = require("./data.json");

//show
exports.show = function (req,res) {
    //req.query passa a condição com ?id= A na barra de endereço
    //req.body vem através do post
    //req.params tipo endereço/var1/var2    passa direto no endereço
    const {id} = req.params

    const foundProfessor = data.professor.find(function(professor){
        return id == professor

    if(!foundProfessor) return res.send ('Professor não encontrado')
    return res.send(foundProfessor)
    })
}


//create
exports.post = function(req,res){
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == "")
            return res.send("Por favor preencha todos os campos!")
    }

    let{avatar_url,name,birth,gender,services}= req.body

    birth = Date.parse(req.body.birth)
    const criado_em = Date.now()
    const id = Number(data.professor.length + 1)

    data.professor.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        criado_em
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4),function(err){
        if(err) return res.send("O preenchimento dos dados está errado.")

        return res.redirect("/professor")
    } )
}

//update
//delete