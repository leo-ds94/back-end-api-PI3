import { getRepository } from 'typeorm';

import { Livro } from './../entities/Livro';

export class ExcluirLivroService {

    async execute(id: string) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Livro);

        //Verificando se o Livro informado realmente existe:
        if(!(await repo.findOne(id))) {
            return new Error("Livro não encontrado.");
        }

        //Deletando Livro pelo ID
        await repo.delete(id);

    }
}