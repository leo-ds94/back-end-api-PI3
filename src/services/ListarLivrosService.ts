import { getRepository } from 'typeorm';

import { Livro } from './../entities/Livro';

export class ListarLivrosService {
    
    async execute() {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Livro);

        const livros = await repo.find();

        //Retornando os Alunos cadastrados
        return livros;

    }
}