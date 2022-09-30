import { Router } from "express";

import { ExcluirLivroController } from './controllers/ExcluirLivroController';
import { EditarLivroController } from './controllers/EditarLivroController';
import { EditarDisciplinaController } from './controllers/EditarDisciplinaController';
import { ExcluirDisciplinaController } from './controllers/ExcluirDisciplinaController';
import { ListarLivrosController } from './controllers/ListarLivrosController';
import { AdicionarLivroController } from './controllers/AdicionarLivroController';
import { ListarDisciplinaController } from './controllers/ListarDisciplinaController';
import { AdicionarDisciplinaController } from './controllers/AdicionarDisciplinaController';

const routes = Router();
const axios = require('axios');

// Listar Turmas - GET
routes.get("/disciplinas", new ListarDisciplinaController().handle);

// Excluir Disciplina
routes.delete("/disciplinas/excluir-disciplina/:id", new ExcluirDisciplinaController().handle);

// Atualizar/Editar Disciplina
routes.put("/disciplina/editar-disciplina/:id", new EditarDisciplinaController().handle);

// Listar Departamento Específico - GET{id}
//routes.get("/departments/:id", new GetDepartmentController().handle);

// Adicionar Disciplina
routes.post("/disciplinas/add-disciplina", new AdicionarDisciplinaController().handle);

//-------------------------------------------------------------------------------//

// Adicionar Livro
routes.post("/livros/add-livro", new AdicionarLivroController().handle);

//Listar Livros 
routes.get("/listar-livros", new ListarLivrosController().handle);

//Excluir Livro
routes.delete("/livros/excluir-livro/:id", new ExcluirLivroController().handle);

// Atualizar dados do Livro
routes.put("/livros/:id", new EditarLivroController().handle);

export { routes };