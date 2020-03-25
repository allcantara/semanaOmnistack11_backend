const express = require('express')

const {
    OngController,
    IncidentController,
    ProfileController,
    SessionController
} = require('./app/controllers')

const router = express.Router()

router.post('/sessions', SessionController.create)

router.post('/ongs', OngController.store)
router.get('/ongs', OngController.index)

router.post('/incidents', IncidentController.create)
router.get('/incidents', IncidentController.index)
router.delete('/incidents/:id', IncidentController.delete)

router.get('/profile', ProfileController.index)


module.exports = router