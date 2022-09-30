import { getRepository } from 'typeorm';

import { Livro } from './../entities/Livro';

// Tipando os dados do Funcionário a ser atualizado:
type EditarLivroRequest = {
    id: string;
    nome: string;
    id_disciplina: string;
}

export class EditarLivroService {
    
    async execute({id, nome, id_disciplina}: EditarLivroRequest) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Livro);

        const livro = await repo.findOne(id);

        console.log(livro);

         // Condição para verificar se o Livro informado realmente existe:
         if (!livro) {
            return new Error("Livro não encontrado.");
        }

        //Atribuindo os novos valores aos campos com if ternário
        livro.nome = nome ? nome: livro.nome;

        // Salvando as atualizações no banco de dados
        await repo.save(livro);

        return livro;
    
    }
}