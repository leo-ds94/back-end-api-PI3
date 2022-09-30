import { getRepository } from 'typeorm';

import { Livro } from './../entities/Livro';
import { Disciplina } from './../entities/Disciplina';

// Tipagem do formato para acrescentar um livro
type LivroRequest = {
    nome: string;
    id_disciplina: string;
}

export class AdicionarLivroService {
    
    async execute({nome, id_disciplina}: LivroRequest): Promise<Livro | Error> {
    
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Livro);
        const repoDisciplina = getRepository(Disciplina);
    
        //Verificando se já existe o Departamento a ser vinculado ao Funcionário
        if(!await repoDisciplina.findOne(id_disciplina)) {
            return new Error("A Disciplina não foi encontrada.")
        }
    
        //Criando objeto de acordo com a Request
        const livro = repo.create({
            nome, 
            id_disciplina
        });
    
        //Salvando o objeto
        await repo.save(livro);
    
        return livro;
    
      }
}