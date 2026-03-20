import { updateAppointment } from '../../models/appointments'

export async function updateAppointmentService(id: string) {
  const appointments = await updateAppointment(id)

  return appointments
}