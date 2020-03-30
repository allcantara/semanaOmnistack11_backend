const ProfileValidation = require('./Profile')
const SessionValidation = require('./Session')
const OngsValidationCreate = require('./Ongs/OngsValidationCreate')
const IncidentsValidationCreate = require('./Incidents/IncidentsCreate')
const IncidentsValidationDelete = require('./Incidents/IncidentsDelete')
const IncidentsValidationIndex = require('./Incidents/IncidentsIndex')


module.exports = {
  ProfileValidation,
  SessionValidation,
  OngsValidationCreate,
  IncidentsValidationCreate,
  IncidentsValidationDelete,
  IncidentsValidationIndex,
}

