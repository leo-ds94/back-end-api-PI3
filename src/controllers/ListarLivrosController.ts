import { Request, Response } from "express";

import { ListarLivrosService } from './../services/ListarLivrosService';

//Arquivo de chamada do Service para listar os Livros
export class ListarLivrosController {
    
    async handle(request: Request, response: Response) {
        const service = new ListarLivrosService();

        const livros = await service.execute();

        // Retorna todos os Alunos
        return response.json(livros);//.send(request.query.nome)
    }
}