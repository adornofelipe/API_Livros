import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";
// no geral foi dividido a chamada da api para atraves do controller criado utilizar somente as rotas necessaria
class LivroController {
    //static usado para chamar de forma statica
    static async listaLivros (req, res){
    try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha ao consultar livro`});
        
    }}

    static async listaLivroPorId (req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao consultar livro por ID`});
            
        }};

        
    static async cadastrarLivro(req, res){
        const novoLivro = req.body;
        try {
            // abaixo temos exemplo do operador de espelhamento
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso", livro: livroCriado});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }

    };
    static async atualizaLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:  "Livro Atualziado"});
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar Livro`});
            
        }};

        static async excluiLivro (req, res){
            try {
                const id = req.params.id;
                await livro.findByIdAndDelete(id);
                res.status(200).json({message: "Livro excluido"});
                
            } catch (erro) {
                res.status(500).json({message: `${erro.message} - Falha ao excluir o Livro`});
                
            }};


            static async listarLivrosPorEditora (req, res){
                const editora = req.query.editora;
                try {
                    const livrosPorEditora = await livro.find({editora: editora})
                    res.status(200).json(livrosPorEditora);
                    
                } catch (erro) {
                    res.status(500).json({message: `${erro.message} - Falha na busca`});
                    
                }};

};

export default LivroController;