import {autor} from "../models/Autor.js";

// no geral foi dividido a chamada da api para atraves do controller criado utilizar somente as rotas necessaria
class AutorController {
    //static usado para chamar de forma statica
    static async listaAutores (req, res){
    try {
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
        
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - falha ao consultar Autor`});
        
    }}

    static async listaAutorPorId (req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao consultar autor por ID`});
            
        }};

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso", autor: novoAutor});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }

    };
    static async atualizaAutor (req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:  "Autor Atualziado"});
            
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar Autor`});
            
        }};

        static async excluiAutor (req, res){
            try {
                const id = req.params.id;
                await autor.findByIdAndDelete(id);
                res.status(200).json({message: "Autor excluido"});
                
            } catch (erro) {
                res.status(500).json({message: `${erro.message} - Falha ao excluir o Autor`});
                
            }};

};

export default AutorController;