import { Request, Response } from "express";

import { EditarLivroService } from "../services/EditarLivroService";


//Arquivo de chamada do Service para editar os dados de um Livro
export class EditarLivroController {
    async handle(request: Request, response: Response) {
        const { id, id_disciplina } = request.params;
        const { nome } = request.body;

        //Realizando chamada ao serviço de Update
        const service = new EditarLivroService();

        // Atribuindo resultado a execução do serviço
        const result = await service.execute({id, nome, id_disciplina});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        //Retornando o Livro editado.
        return response.json(result);

    }
}