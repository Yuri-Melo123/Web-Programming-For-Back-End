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
        { nome: { contains: nome, mode: 'insensitive' } },
        { sinopse: { contains: nome, mode: 'insensitive' } }
      ]
    }
  })
}

module.exports = {
  listarTodos,
  buscarPorId,
  filtrarPorNome
}
