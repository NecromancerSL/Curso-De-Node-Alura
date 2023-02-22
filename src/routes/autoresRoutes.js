import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

//define oq acontece em cada rota
router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutores)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.deletarAutor)



export default router;