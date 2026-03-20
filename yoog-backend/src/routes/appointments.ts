import { Router } from 'express'

import { 
  getAppointmentsController, 
  createAppointmentController, 
  updateAppointmentController, 
  removeAppointmentController
} from '../controllers/appointments'

export const appointmentRouter = Router()

appointmentRouter.get('/:id', getAppointmentsController)

appointmentRouter.post('/:id', createAppointmentController)

appointmentRouter.put('/:id', updateAppointmentController)

appointmentRouter.delete('/:id', removeAppointmentController)