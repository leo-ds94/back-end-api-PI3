import { getRepository } from 'typeorm';

import { Disciplina } from './../entities/Disciplina';

// Tipando os dados da Disciplina a ser atualizado:
type EditarDisciplinaRequest = {
    id: string;
    nome: string;
}

export class EditarDisciplinaService {
    
    async execute({id, nome}: EditarDisciplinaRequest) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Disciplina);

        const disciplina = await repo.findOne(id);

        console.log(disciplina);

        // Condição para verificar se a Disciplina informado realmente existe:
        if (!disciplina) {
            return new Error("Disciplina não encontrada.");
        }

        //Atribuindo os novos valores aos campos com if ternário
        disciplina.nome = nome ? nome: disciplina.nome;

        // Salvando as atualizações no banco de dados
        await repo.save(disciplina);

        return disciplina;
    }
}