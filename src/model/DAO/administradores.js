import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertAdministrador = async (administrador) => {
  try {
    const sql = `insert into tbl_administrador (
        nome,
        email,
        senha
        )
        values (
            '${administrador.nome}',
            '${administrador.email}',
            '${administrador.senha}'
            )`;

    const result = await prisma.$executeRawUnsafe(sql);
    if (result) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const updateAdministrador = async (administrador) => {
  try {
    const sql = `update tbl_administrador set
         nome = '${administrador.nome}',
         email = '${administrador.imagem}',
         senha = '${administrador.tamanho}'
         
         where id = '${administrador.id}'`;

    const result = await prisma.$executeRawUnsafe(sql);
    if (result) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const deleteAdministrador = async (id) => {
  try {
    const sql = `delete from tbl_administrador 
        where id = '${id}'`;

    const result = await prisma.$executeRawUnsafe(sql);
    if (result) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const selectAllAdministradores = async () => {
  const sql = `select cast(id as float) as 
    id, 
    nome, 
    email, 
    senha, 
    from tbl_administrador order by id desc`;

  const rsAdministrador = await prisma.$queryRawUnsafe(sql);

  if (rsAdministrador.length > 0) {
    return rsAdministrador;
  }
  return false;
};

const selectByIdAdministrador = async (id) => {
  const sql = `select cast(id as float) as 
        id, 
        nome, 
        email, 
        senha,  
        from tbl_administrador
        where id = ${id}`;

  const rsAdministrador = await prisma.$queryRawUnsafe(sql);

  if (rsAdministrador.length > 0) {
    return rsAdministrador.length;
  }
  return false;
};

export default {
  updateAdministrador,
  deleteAdministrador,
  selectAllAdministradores,
  insertAdministrador,
  selectByIdAdministrador,
};
