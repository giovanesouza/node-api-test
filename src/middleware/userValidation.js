const ObjectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    //testa um erro por vez e toma apenas uma decisao por vez
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }
    if(req.body.nome){
        console.log(typeof(req.body.nome));
    }
    if(!req.body.email){
        return res.status(400).send({ message: `O campo 'email' precisa ser preenchido!`});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido!`});
    }

    return next();
}


const validaIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios`});
    }
};

const valida_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.body._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios`});
    }
};

const validaLogin = (req, res, next) => {
    let erros = [];
    
    if(!req.body.email){
        erros.push("email");
    }

    if(!req.body.senha){
        erros.push("senha");
    }

    //testando quantos erros temos e tomando decisoes em relacao a isso
    if(erros.length == 0){
        return next();
    }else{
        if(erros. length > 1){
            return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos!`});
        }else{
            return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido!`});
        }
    }
}


module.exports = {
    validaUsuario,
    validaIdParams,
    valida_IdBody,
    validaLogin,
}