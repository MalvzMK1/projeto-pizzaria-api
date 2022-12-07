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
import mensagemDao from '../model/DAO/mensagens.js';

// funcao para retornar um registro baseado no id
=======
import { MESSAGE_ERROR, MESSAGE_SUCESS } from '../modulo/config.js';
import mensagemDao from '../model/DAO/mensagens.js';

>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const buscarMensagem = async (id) => {
  const dadosMensagensJSON = {};

  if (id === '' || id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  const dadosMensagens = await mensagemDao.selectByIdMensagem(id);

  if (dadosMensagens) {
    dadosMensagensJSON.mensagem = dadosMensagens;
    return dadosMensagensJSON;
  }
  return false;
};

<<<<<<< HEAD
// funcao para gerar uma nova mensagem
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const novaMensagem = async (mensagem) => {
  if (mensagem.nome === '' || mensagem.email === '' || mensagem.telefone === '' || mensagem.celular === '' || mensagem.mensagem === '' || mensagem.id_tipo_mensagem === '') {
    return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS };
  }
  const novaMensagem = await mensagemDao.insertMensagem(mensagem);
<<<<<<< HEAD
  // chama a função para inserir uma nova mensagem
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  const result = novaMensagem;

  if (result) {
    return { status: 201, message: MESSAGE_SUCESS.INSERT_ITEM };
  }
  return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
};

<<<<<<< HEAD
// funcao para excluir um registro
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const deletarMensagem = (id) => {
  if (id === '' || id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  const mensagem = buscarMensagem(id);
  if (mensagem) {
    const deleteMensagem = mensagemDao.deleteMensagem(id);
    const result = deleteMensagem;

    if (result) {
      return { status: 201, message: MESSAGE_SUCESS.DELETE_ITEM };
    }
    return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
  }
  return { status: 404, message: MESSAGE_ERROR.NOT_FOUND_BD };
};

<<<<<<< HEAD
// funcao para atualizar um registro
const atualizarMensagem = (mensagem) => {
  // validacao para o id como campo obrigatorio
  if (mensagem.id === '' || mensagem.id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  }
  // validacao de campos obrigatorios
  if (mensagem.nome === '' || mensagem.email === '' || mensagem.telefone === '' || mensagem.celular === '' || mensagem.mensagem === '' || mensagem.id_tipo_mensagem === '') {
=======
const atualizarMensagem = (mensagem) => {
  if (mensagem.id === '' || mensagem.id === undefined) {
    return { status: 400, message: MESSAGE_ERROR.REQUIRED_ID };
  } if (mensagem.nome === '' || mensagem.email === '' || mensagem.telefone === '' || mensagem.celular === '' || mensagem.mensagem === '' || mensagem.id_tipo_mensagem === '') {
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    return { status: 404, message: MESSAGE_ERROR.REQUIRED_FIELDS };
  }

  const atualizarMensagem = mensagemDao.updateMensagem(mensagem);
  const result = atualizarMensagem;

  if (result) {
    return { status: 201, message: MESSAGE_SUCESS.UPDATE_ITEM };
  }
  return { status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB };
};

<<<<<<< HEAD
// funcao para retornar todos os registros
const listarMensagens = async () => {
  const mensagem = await mensagemDao.selectAllMensagens();
  // const mensagem = await selectAllMensagens();
=======
const listarMensagens = async () => {
  const mensagem = await mensagemDao.selectAllMensagens();
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b

  if (mensagem) {
    return mensagem;
  }
  return false;
};

const controllerMensagem = {
  listarMensagens,
  novaMensagem,
  deletarMensagem,
  atualizarMensagem,
  buscarMensagem,
};

export default controllerMensagem;
