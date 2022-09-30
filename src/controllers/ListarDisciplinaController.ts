import { Request, Response } from "express";

import { ListarDisciplinaService } from "../services/ListarDisciplinaService";

//Arquivo de chamada do Service para Listar todos os Departamentos
export class ListarDisciplinaController {
    
    async handle(request: Request, response: Response) {
        const service = new ListarDisciplinaService();

        const disciplina = await service.execute();
        
        // Retorna todos os departamentos em formato json
        return response.json(disciplina);
    }
}