import { getRepository } from 'typeorm';

import { Disciplina } from './../entities/Disciplina';

export class ListarDisciplinaService {
    
    async execute() {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Disciplina);

        const disciplina = await repo.find();

        //Retornando todos Departamentos cadastrados
        return disciplina;
    }
}