import { Request, Response } from "express";

import { AdicionarLivroService } from './../services/AdicionarLivroService';

//Arquivo de chamada do Service para adicionar um Livro
export class AdicionarLivroController {
    async handle(request: Request, response: Response) {
        const {nome, id_disciplina} = request.body

        const service = new AdicionarLivroService();

        const result = await service.execute({
            nome,
            id_disciplina
        });

        // Verificando se resulta em erro para gerar status:400.
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        
        // Em caso de sucesso é gerado é exibido o resultado em json.
        return response.json(result);
    }
}