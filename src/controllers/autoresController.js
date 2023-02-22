import autores from "../models/Autor.js";

class AutorController{
    //metodo para listar autor
    static listarAutores = (req,res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        }) 
    }

    //listar autor por id
    static listarAutorPorId = (req,res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado`})
            }else{
                res.status(200).send(autores);
            }
        })
    }

    //cadastro de autor
    static cadastrarAutores = (req,res) =>{
        let autor = new autores(req.body);
        //verifica se a erro no cadastro ou nao
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor.`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    //atualização de autor
    static atualizarAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    //deletar autor
    static deletarAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default AutorController;