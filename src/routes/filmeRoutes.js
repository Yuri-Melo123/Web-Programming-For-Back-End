const express = require('express')
const router = express.Router()
const filmeController = require('../controllers/filmeController')

router.get('/v1/controle-filmes/filme', filmeController.listarTodos)
router.get('/v1/controle-filmes/filme/:id', filmeController.buscarPorId)
router.get('/v1/controle-filmes/filtro/filme', filmeController.filtrarPorNome)

module.exports = router
