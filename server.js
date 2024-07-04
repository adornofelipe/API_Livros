//import http from "http";
import "dotenv/config";
import app from "./src/app.js"
const PORT = 3000;


// const server = http.createServer((req, res) => {

//     //cabeçalho da resposta 200 e tipo de conteudo da resposta
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     // conteudo abaixo
//     res.end(rotas[req.url]);
// });

// passando a porta da conexao, depois passei o app
app.listen(PORT, () => {
    console.log("Servidor Funcionando!");
});