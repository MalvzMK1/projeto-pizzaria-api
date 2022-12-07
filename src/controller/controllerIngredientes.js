/* eslint-disable import/extensions */
/** ************************************************************************************************
* Objetivo: Arquivo responsável pela manipulação de dados com o BD (insert, update, delet e select)
* Autor: Larissa Nunes e Matheus Alves
* Versão: 1.0
* Data criação: 24-11-2022
* Data modificação: 01/12/2022
************************************************************************************************* */

<<<<<<< HEAD
import { MESSAGE_ERROR, MESSAGE_SUCESS } from '../modules/config.js';
import ingredienteDao from '../model/DAO/ingredientes.js';

// funcao para retornar um registro baseado no id
=======
import { MESSAGE_ERROR, MESSAGE_SUCESS } from '../modulo/config.js';
import ingredienteDao from '../model/DAO/ingredientes.js';

>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const buscarIngrediente = async (id) => {
  const dadosIngredienteJSON = {};

  if (id === '' || id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  const dadosIngrediente = await ingredienteDao.selectByIdIngrediente(id);
<<<<<<< HEAD
  // import { selectByIdProduto } from '../model/DAO/produtos.js';
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b

  if (dadosIngrediente) {
    dadosIngredienteJSON.ingrediente = dadosIngrediente;
    return dadosIngredienteJSON;
  }
  return false;
};

<<<<<<< HEAD
// funcao para gerar um novo produto
const novoIngrediente = async (ingrediente) => {
  // validação de campos obrigatórios
=======
const novoIngrediente = async (ingrediente) => {
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  if (ingrediente.nome === '') {
    return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS };
  }
  const novoIngrediente = await ingredienteDao.insertIngrediente(ingrediente);
<<<<<<< HEAD
  // chama a função para inserir um novo produto
=======

>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  const result = novoIngrediente;

  if (result) {
    return { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM };
  }
  return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
};

<<<<<<< HEAD
// funcao para excluir um registro
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const deletarIngrediente = (id) => {
  if (id === '' || id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  const ingrediente = buscarIngrediente(id);
  if (ingrediente) {
    const deleteIngrediente = ingredienteDao.deleteIngrediente(id);
    const result = deleteIngrediente;

    if (result) {
      return { status: 201, message: MESSAGE_SUCESS.DELETE_ITEM };
    }
    return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
  }
  return { status: 404, message: MESSAGE_ERROR.NOT_FOUND_BD };
};

<<<<<<< HEAD
// funcao para atualizar um registro
const atualizarIngrediente = (ingrediente) => {
  // validacao para o id como campo obrigatorio
  if (ingrediente.id === '' || ingrediente.id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  // validacao de campos obrigatorios
=======
const atualizarIngrediente = (ingrediente) => {
  if (ingrediente.id === '' || ingrediente.id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  if (ingrediente.nome === '') {
    return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS };
  }

  const atualizarIngrediente = ingredienteDao.updateIngrediente(ingrediente);
  const result = atualizarIngrediente;

  if (result) {
    return { status: 201, message: MESSAGE_SUCESS.UPDATE_ITEM };
  }
  return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
};

<<<<<<< HEAD
// funcao para retornar todos os registros
const listarIngredientes = async () => {
  const ingrediente = await ingredienteDao.selectAllIngredientes();
  // const produto = await selectAllProdutos();
=======
const listarIngredientes = async () => {
  const ingrediente = await ingredienteDao.selectAllIngredientes();
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b

  if (ingrediente) {
    return ingrediente;
  }
  return false;
};

const controllerIngredientes = {
  listarIngredientes,
  novoIngrediente,
  deletarIngrediente,
  atualizarIngrediente,
  buscarIngrediente,
};

export default controllerIngredientes;
