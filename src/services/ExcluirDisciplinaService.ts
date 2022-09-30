import { getRepository } from 'typeorm';

import { Disciplina } from './../entities/Disciplina';

export class ExcluirDisciplinaService {

    async execute(id: string) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Disciplina);

        //Verificando se a Disciplina informado realmente existe:
        if(!(await repo.findOne(id))) {
            return new Error("Disciplina não encontrada.");
        }

        //Deletando Turma pelo ID
        await repo.delete(id);

    }
}