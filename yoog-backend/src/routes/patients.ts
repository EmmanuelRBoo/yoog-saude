import { Router } from 'express'

import { getPatientsController, createPatientController } from '../controllers/patients'

export const patientRouter = Router()

patientRouter.get('/', getPatientsController)

patientRouter.post('/', createPatientController)