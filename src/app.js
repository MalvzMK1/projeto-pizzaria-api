/**
 *
 * Documentation - EN
 *
 * Objective: Create an API to consume the database and manipulate informations
 * Authors: Larissa Nunes Vaz, Matheus Alves de Oliveira
 * Version: 1.0.22
 * Creation date: 17/11/2022
 * Modification date: 17/11/2022
 *
 * ------------------------------------------------------------------------------
 *
 * Documentação - PT-br
 *
 * Objetivo: Criar uma API para consumir o banco de dados e manipular informações
 * Autores: Larissa Nunes Vaz, Matheus Alves de Oliveira
 * Versão: 1.0.22
 * Data de Criação: 17/11/2022
 * Data de Modificação: 17/11/2022
 *
 */

import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json(), cors());

app.listen(8080, () => {
  console.log('Server listening at port 8080...');
});
