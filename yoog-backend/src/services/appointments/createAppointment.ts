import { decode } from '../../utils'
import { createAppointment } from '../../models/appointments'

export async function createAppointmentService(token: string, patientId: string) {
  const appointments = await createAppointment({
    userId: decode(token).id,
    code: Math.random().toString(36).substring(2, 6 + 2),
    status: 'AGUARDANDO',
    patientId,
  })

  return appointments
}