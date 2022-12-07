/** ************************************************************************************************
* Objetivo: Arquivo responsável pela manipulação de dados com o BD (insert, update, delet e select)
* Autor: Larissa Nunes e Matheus Alves
* Versão: 1.0
* Data criação: 06/10/2022
* Data modificação: 01/12/2022
************************************************************************************************* */

<<<<<<< HEAD
// import da classe pismaClient, responsável pelas interações com o BD
// import PrismaClient from '@prisma/client';
import { PrismaClient } from '@prisma/client';

// função para inserir um novo registro do BD
const insertMensagem = async (mensagem) => {
  try {
    // instancia da classe PrismaClient
=======
import { PrismaClient } from '@prisma/client';

const insertMensagem = async (mensagem) => {
  try {
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    const prisma = new PrismaClient();

    const sql = `insert into tbl_mensagem (
                nome,
                email,
                telefone,
                celular,
                mensagem,
                id_tipo_mensagem
        ) values (
            '${mensagem.nome}',
            '${mensagem.email}',
            '${mensagem.telefone}',
            '${mensagem.celular}',
            '${mensagem.mensagem}',
            '${mensagem.id_tipo_mensagem}'
            )`;
<<<<<<< HEAD
    // console.log(sql);
    // $executeRawUnsafe permite encaminhar uma variavel contendo o script
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    const result = await prisma.$executeRawUnsafe(sql);
    if (result) {
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    // console.log(error)
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    return false;
  }
};

<<<<<<< HEAD
// função para atualizar um registro no BD
const updateMensagem = async (mensagem) => {
  try {
    // instancia da classe PrismaClient
=======
const updateMensagem = async (mensagem) => {
  try {
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    const prisma = new PrismaClient();

    const sql = `update tbl_mensagem set
            nome = '${mensagem.nome}',
            email = '${mensagem.email}',
            telefone = '${mensagem.telefone}', 
            celular = '${mensagem.celular}', 
            mensagem = '${mensagem.mensagem}',
            id_tipo_mensagem = '${mensagem.id_tipo_mensagem}'
         
         where id = '${mensagem.id}'`;

<<<<<<< HEAD
    // $executeRawUnsafe permite encaminhar uma variavel contendo o script
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    const result = await prisma.$executeRawUnsafe(sql);

    if (result) {
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    // console.log(error)
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    return false;
  }
};

<<<<<<< HEAD
// função para deletar um registro no BD
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const deleteMensagem = async (id) => {
  try {
    const prisma = new PrismaClient();

    const sql = `delete from tbl_mensagem 
        where id = '${id}'`;

<<<<<<< HEAD
    // $executeRawUnsafe permite encaminhar uma variavel contendo o script
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
    const result = await prisma.$executeRawUnsafe(sql);
    if (result) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

<<<<<<< HEAD
// função para retornar os registros no BD
const selectAllMensagens = async () => {
  const prisma = new PrismaClient();

  // recordset = dados vindos de um BD
=======
const selectAllMensagens = async () => {
  const prisma = new PrismaClient();

>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  const sql = `select cast(id as float) as 
            nome,
            email,
            telefone,
            celular,
            mensagem,
            id_tipo_mensagem
    from tbl_mensagem order by id desc`;

<<<<<<< HEAD
  // criamos um objeto do tipo recordset para receber os dados do DB aravés do script  SQL (select)
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  const rsMensagem = await prisma.$queryRawUnsafe(sql);

  if (rsMensagem.length > 0) {
    return rsMensagem;
  }
  return false;
};

<<<<<<< HEAD
// funcao para retornar apenas o registro baseado no id
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
const selectByIdMensagem = async (id) => {
  const prisma = new PrismaClient();

  const sql = `select cast(id as float) as 
            nome,
            email,
            telefone,
            celular,
            mensagem,
            id_tipo_mensagem
    from tbl_mensagem where id = ${id}`;

<<<<<<< HEAD
  // objeto do tipo recordset para receber os dados do DB aravés do script  SQL (select)
=======
>>>>>>> f2deb81e21d019fbf409c5f8b617657eef31934b
  const rsMensagem = await prisma.$queryRawUnsafe(sql);

  if (rsMensagem.length > 0) {
    return rsMensagem.length;
  }
  return false;
};

export default {
  updateMensagem,
  deleteMensagem,
  selectAllMensagens,
  insertMensagem,
  selectByIdMensagem,
};
