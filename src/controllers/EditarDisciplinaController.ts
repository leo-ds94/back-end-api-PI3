import { Request, Response } from "express";

import { EditarDisciplinaService } from './../services/EditarDisciplinaService';

//Arquivo de chamada do Service para editar uma Disciplina
export class EditarDisciplinaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome } = request.body;

        const service = new EditarDisciplinaService();

        const result = await service.execute({id, nome});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        //Retornando o Disciplina editada.
        return response.json(result);

    }
}