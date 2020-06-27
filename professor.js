const fs = require('fs');
const data = require("./data.json");
const { send } = require('process');
const {calcula_idade} = require("./funcoes")

//show
exports.show = function (req,res) {
    //req.query passa a condição com ?id= A na barra de endereço
    //req.body vem através do post
    //req.params tipo endereço/var1/var2    passa direto no endereço
    const {id} = req.params

    const foundProfessor = data.professor.find(function(professor){
        return id == professor.id
        
    })
    if (!foundProfessor) return res.send ('Professor não encontrado')
    
    switch(foundProfessor.gender){
        case 'M':
            foundProfessor.gender='Masculino'
            break;
        case 'F':
            foundProfessor.gender='Feminino'
            break;
        case 'O':
            foundProfessor.gender='Outro'
            break;
    }

    const professor = {
        ...foundProfessor,
        age: calcula_idade(foundProfessor.birth),
        services: foundProfessor.services.split(","),
        criado_em: new Intl.DateTimeFormat("pt-BR").format(foundProfessor.criado_em)
    }

    return res.render("professor/show",{professor: professor})
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

//test