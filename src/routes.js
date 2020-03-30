const express = require('express')

const {
    OngController,
    IncidentController,
    ProfileController,
    SessionController
} = require('./app/controllers')

const {
    ProfileValidation,
    SessionValidation,
    OngsValidationCreate,
    IncidentsValidationCreate,
    IncidentsValidationDelete,
    IncidentsValidationIndex
} = require('./app/validations')

const router = express.Router()

router.post('/sessions', SessionValidation, SessionController.create)
router.post('/ongs', OngsValidationCreate, OngController.store)
router.get('/ongs', OngController.index)
router.post('/incidents', IncidentsValidationCreate, IncidentController.create)
router.get('/incidents', IncidentsValidationIndex, IncidentController.index)
router.delete('/incidents/:id', IncidentsValidationDelete, IncidentController.delete)
router.get('/profile', ProfileValidation, ProfileController.index)

module.exports = router

