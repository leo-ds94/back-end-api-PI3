import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

// Referenciando a tabela:
@Entity("livros")
export class Livro {
    
    //Referenciando as colunas:
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    id_disciplina: string;

    // Comando para geração de ID, caso não venha preenchido.
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

