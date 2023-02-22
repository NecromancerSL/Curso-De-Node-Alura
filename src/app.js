import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

//verifica se da erro na conexao
db.on("erro", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => { //abrindo o banco
    console.log('Conexão feito com sucesso');
})

const app = express();
app.use(express.json()); //interpreta o que chega via push ou put e armazena 
routes(app);//inicia as rotas do index.js


export default app;