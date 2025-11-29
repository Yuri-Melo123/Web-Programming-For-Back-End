const prisma = require('../config/prismaClient')

const listarTodos = async () => {
  return await prisma.tbl_filme.findMany()
}

const buscarPorId = async (id) => {
  return await prisma.tbl_filme.findUnique({
    where: { id: Number(id) }
  })
}

const filtrarPorNome = async (nome) => {
  return await prisma.tbl_filme.findMany({
    where: {
      OR: [
        { nome: { contains: nome } },
        { sinopse: { contains: nome } }
      ]
    }
  })
}


module.exports = {
  listarTodos,
  buscarPorId,
  filtrarPorNome
}
