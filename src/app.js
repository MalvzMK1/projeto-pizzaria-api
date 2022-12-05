/* eslint-disable import/extensions */
/**
 *
 * Documentation - EN
 *
 * Objective: Create an API to consume the database and manipulate informations
 * Authors: Larissa Nunes Vaz Alves de Oliveira, Matheus Alves de Oliveira
 * Version: 1.0.22
 * Creation date: 17/11/2022
 * Modification date: 01/12/2022
 *
 * ------------------------------------------------------------------------------
 *
 * Documentação - PT-br
 *
 * Objetivo: Criar uma API para consumir o banco de dados e manipular informações
 * Autores: Larissa Nunes Vaz Alves de Oliveira, Matheus Alves de Oliveira
 * Versão: 1.0.22
 * Data de Criação: 17/11/2022
 * Data de Modificação: 01/12/2022
 *
 */

import express from 'express';
import cors from 'cors';
import { MESSAGE_ERROR } from './modules/config.js';
import controllerProduto from './controller/controllerProduto.js';
// import controllerAdministrador from './controller/controllerAdministrador';

const app = express();

app.use(express.json(), cors());

// ############################### END POINT PARA PRODUTOS #####################################

app.get('/v1/produtos', cors(), async (request, response) => {
  let message;
  let statusCode;

  const dadosProduto = await controllerProduto.listarProdutos();

  if (dadosProduto) {
    statusCode = 200;
    console.log(dadosProduto);
    message = dadosProduto;
  } else {
    statusCode = 404;
    message = MESSAGE_ERROR.NOT_FOUND_BD;
  }

  response.status(statusCode);
  response.json(message);
});

app.post('/v1/produto', cors(), async (request, response) => {
  let statusCode;
  let message;
  const headerContentType = request.headers['content-type'];

  if (headerContentType === 'application/json') {
    const dadosBody = request.body;
    if (JSON.stringify(dadosBody) !== '{}') {
      const novoProduto = await controllerProduto.novoProduto(dadosBody);

      statusCode = novoProduto.status;
      message = novoProduto.message;
    } else {
      statusCode = 400;
      message = MESSAGE_ERROR.EMPTY_BODY;
    }
  } else {
    statusCode = 415;
    message = MESSAGE_ERROR.CONTENT_TYPE;
  }

  response.status(statusCode);
  response.json(message);
});

app.put('/v1/produto/:id', cors(), async (request, response) => {
  let statusCode;
  let message;
  const headerContentType = request.headers['content-type'];

  if (headerContentType === 'application/json') {
    const dadosBody = request.body;

    if (JSON.stringify(dadosBody) !== '{}') {
      const { id } = request.params;

      if (id !== '' && id !== undefined) {
        dadosBody.id = id;

        const novoProduto = controllerProduto.atualizarProduto(dadosBody);

        statusCode = novoProduto.status;
        message = novoProduto.message;
      } else {
        statusCode = 400;
        message = MESSAGE_ERROR.REQUIRED_ID;
      }
    } else {
      statusCode = 400;
      message = MESSAGE_ERROR.EMPTY_BODY;
    }
  } else {
    statusCode = 415;
    message = MESSAGE_ERROR.CONTENT_TYPE;
  }

  response.status(statusCode);
  response.json(message);
});

app.delete('/v1/produto/:id', cors(), async (request, response) => {
  let statusCode;
  let message;
  const { id } = request.params;

  if (id !== '' && id !== undefined) {
    const deletarProduto = controllerProduto.deletarProduto(id);

    statusCode = deletarProduto.status;
    message = deletarProduto.message;
  } else {
    statusCode = 400;
    message = MESSAGE_ERROR.REQUIRED_ID;
  }
  response.status(statusCode);
  response.json(message);
});

app.get('/v1/produto/:id', cors(), async (request, response) => {
  let message;
  let statusCode;
  const { id } = request.params;

  if (id !== '' && id !== undefined) {
    const dadosProduto = await controllerProduto.buscarProduto(id);

    if (dadosProduto) {
      statusCode = 200;
      message = dadosProduto;
    } else {
      statusCode = 400;
      message = MESSAGE_ERROR.REQUIRED_ID;
    }
  } else {
    statusCode = 404;
    message = MESSAGE_ERROR.NOT_FOUND_BD;
  }

  response.status(statusCode);
  response.json(message);
});

app.listen(8080, () => {
  console.log('Server listening at port 8080...');
});
