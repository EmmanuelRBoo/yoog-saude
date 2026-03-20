import { removeAppointment } from '../../models/appointments'

export async function removeAppointmentService(id: string) {
  const appointments = await removeAppointment(id)

  return appointments
}