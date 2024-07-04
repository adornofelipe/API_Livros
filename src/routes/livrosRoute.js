import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros",LivroController.listaLivros);
routes.get("/livros/busca",LivroController.listarLivrosPorEditora);
routes.get("/livros/:id",LivroController.listaLivroPorId);
routes.post("/livros",LivroController.cadastrarLivro);
routes.put("/livros/:id",LivroController.atualizaLivro);
routes.delete("/livros/:id",LivroController.excluiLivro);

// usar o nome da funcao criada e exportar
export default routes;