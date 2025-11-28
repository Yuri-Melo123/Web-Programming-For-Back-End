const filmeModel = require('../models/filmeModel')

// GET /v1/controle-filmes/filme
const listarTodos = async (req, res) => {
  try {
    const filmes = await filmeModel.listarTodos()
    if (!filmes || filmes.length === 0) {
      return res.status(404).json({ message: 'Nenhum filme encontrado.' })
    }
    return res.status(200).json(filmes)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao buscar filmes.' })
  }
}

// GET /v1/controle-filmes/filme/:id
const buscarPorId = async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido.' })
    }

    const filme = await filmeModel.buscarPorId(id)
    if (!filme) {
      return res.status(404).json({ message: 'Filme não encontrado.' })
    }

    return res.status(200).json(filme)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao buscar filme.' })
  }
}

// GET /v1/controle-filmes/filtro/filme?nome=xxx
const filtrarPorNome = async (req, res) => {
  try {
    const { nome } = req.query
    if (!nome || nome.trim() === '') {
      return res.status(400).json({ message: 'Parâmetro "nome" é obrigatório.' })
    }

    const filmes = await filmeModel.filtrarPorNome(nome.trim())
    return res.status(200).json(filmes)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao filtrar filmes.' })
  }
}

module.exports = {
  listarTodos,
  buscarPorId,
  filtrarPorNome
}
