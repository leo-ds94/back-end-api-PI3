import { Request, Response } from 'express';

import { ExcluirDisciplinaService } from './../services/ExcluirDisciplinaService';

//Arquivo de chamada do Service para excluir uma Turma
export class ExcluirDisciplinaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new ExcluirDisciplinaService();

        const result = await service.execute( id );

        // Verificando se resulta em erro para gerar status:400.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        //Retorando status: Sucesso
        return response.status(200).end();
    }
}