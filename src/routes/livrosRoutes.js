import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

//define oq acontece em cada rota
router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora) //tem que ser do mais especifico para o menos especifico
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivros)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro)



export default router;