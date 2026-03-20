import { getAppointments } from '../../models/appointments'

export async function getAppointmentsService(id: string) {
  const appointments = await getAppointments(id)

  return appointments
}