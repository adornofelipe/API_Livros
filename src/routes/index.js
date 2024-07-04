import express from "express";
import livro from "./livrosRoute.js";
import autor from "./autoresRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Curso de Node.js")
);
    app.use(express.json(), livro , autor);

};

export default routes;