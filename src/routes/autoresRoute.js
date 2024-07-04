import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores",AutorController.listaAutores);
routes.get("/autores/:id",AutorController.listaAutorPorId);
routes.post("/autores",AutorController.cadastrarAutor);
routes.put("/autores/:id",AutorController.atualizaAutor);
routes.delete("/autores/:id",AutorController.excluiAutor);

// usar o nome da funcao criada e exportar
export default routes;