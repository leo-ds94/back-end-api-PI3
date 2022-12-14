import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

// Referenciando a tabela:
@Entity("disciplina")
export class Disciplina {
    
    //Referenciando as colunas:
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    // Comando para geração de ID, caso não venha preenchido.
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

