import livros from "../models/livro.js";

class LivroController{
    //metodo para listar livro
    static listarLivros = (req,res) => {
        livros.find()
          .populate('autor') //linka com o schema de autor
          .exec((err, livros) => {
              res.status(200).json(livros);
            }) 
    }

    //listar livro por editora
    static listarLivroPorEditora = (req,res) => {
        const editora = req.query.editora;//procura a editora
        livros.find({'editora': editora}, {}, (err,livros) => {
            if(!err){
                res.status(200).send(livros)
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    
    //listar livro por id
    static listarLivroPorId = (req,res) => {
        const id = req.params.id
        livros.findById(id)
          .populate('autor', 'nome')
          .exec((err, livros) => {
          if(err){
            res.status(400).send({message: `${err.message} - Id do livro não localizado`})
          }else{
            res.status(200).send(livros);
          }
        })
    }

    //cadastro de livro
    static cadastrarLivros = (req,res) =>{
        let livro = new livros(req.body);
        //verifica se a erro no cadastro ou nao
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    //atualização de livro
    static atualizarLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    //deletar livro
    static deletarLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default LivroController;