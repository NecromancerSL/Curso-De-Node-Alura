import mongoose from "mongoose";

//'tabela' do banco
const livroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
})

//fala como se chama e qual o modelo do banco
const livros = mongoose.model('livros',livroSchema);

export default livros;